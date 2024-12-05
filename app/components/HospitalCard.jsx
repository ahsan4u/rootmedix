import React, { useRef, useState } from "react";
const Lottie = React.lazy(() => import("lottie-react"));
import { Suspense } from "react";
import loadingEffect from "../animated Icon/loading.json"

function HospitalCard({data}) {
    const cardRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    function loadingFn(e) {
        if(cardRef.current.contains(e.target)) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }
    return (
        <div ref={cardRef} onClick={loadingFn} className="bestHospital relative bg-white sm:w-64 w-[166px] shadow-[2px_2px_5px_gray] rounded-lg sm:rounded-xl my-3 overflow-hidden cursor-pointer">
            {isLoading && ( <Suspense fallback={<div className="fixed">.</div>}>
                <Lottie animationData={loadingEffect} className="w-14 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50"/>
            </Suspense>)}
            <img src={data.img} alt="" className="w-[100%] aspect-[16/9] object-cover" />
            <div className="bestHospital-text font-bold m-1 px-1 pb-1 text-cyan-900 border rounded-md sm:rounded-lg transition-colors duration-[0.5s]">
                <p className="text-xs sm:text-sm">{data.name}{'>'}</p>
                <p className="font-normal text-xs">{data.place}</p>
            </div>
        </div>
    )
}

export default HospitalCard;