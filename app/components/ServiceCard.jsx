import React from "react";
const Lottie = React.lazy(() => import("lottie-react"));
import { Suspense, useState } from "react";
import loadingEffect from "../animated Icon/loading.json"

function ServiceCard({data}) {
    const [isLoading, setIsLoading] = useState(false);
    function loadingFn() {
        setIsLoading(true);
    }

    return(
        <div onClick={loadingFn} className="filter saturate-[1.4] brightness-[0.9] contrast-[1.2] relative bg-white sm:w-64 w-[166px] shadow-[2px_2px_5px_gray] rounded-xl mb-3 lg:mt-5 mt-3 overflow-hidden">
            {isLoading && ( <Suspense fallback={<div className="fixed">.</div>}>
                <Lottie animationData={loadingEffect} className="w-14 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50" style={{filter: 'invert(0.7)'}}/>
            </Suspense>)}
            <img src={data.img} alt="" className="w-[100%] aspect-[16/9] object-cover" />
            <p className="text-center text-md sm:text-2xl font-bold mt-[2px] py-2 bg-[#3d3d3d] text-cyan-50 transition-colors duration-[0.5s]">{data.name}</p>
        </div>
    )
}

export default ServiceCard;