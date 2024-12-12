import React, { useRef, useState } from "react";
const Lottie = React.lazy(() => import("lottie-react"));
import { Suspense } from "react";
import loadingEffect from "../animated Icon/loading.json"

function HospitalCard({data}) {
    const [isLoading, setIsLoading] = useState(false);
    function loadingFn() {
        setIsLoading(true);
    }

    return (
        <div onClick={loadingFn} className="filter saturate-[1.5] relative bg-white sm:w-64 w-[166px] shadow-[2px_2px_5px_gray] rounded-xl sm:rounded-xl mb-3 sm:mt-5 mt-3 overflow-hidden cursor-pointer">
            {isLoading && ( <Suspense fallback={<div className="fixed">.</div>}>
                <Lottie animationData={loadingEffect} className="w-14 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50"/>
            </Suspense>)}
            <img src={data.img} alt="" className="w-[100%] aspect-[16/9] object-cover" />
            <div className="font-bold px-3 pt-1 pb-2 mt-[1px] bg-[#3d3d3d] brightness-[0.9] contrast-[1.2] text-cyan-50 transition-colors duration-[0.5s]">
                <p className="text-xs sm:text-sm">{data.name}{'>'}</p>
                <p className="font-normal text-xs">{data.place}</p>
            </div>
        </div>
    )
}

export default HospitalCard;