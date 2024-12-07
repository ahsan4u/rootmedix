import React from "react";
const Lottie = React.lazy(() => import("lottie-react"));
import { Suspense, useState } from "react";
import loadingEffect from "../animated Icon/loading.json"

const TreatmentCard = ({data})=>{
    const [isLoading, setIsLoading] = useState(false);
    function loadingFn() { setIsLoading(true) }

    return(
    <div onClick={loadingFn} className="sm:w-[150px] w-[105px] mt-5 mb-3 rounded-xl aspect-[8/11] relative overflow-hidden shadow-[2px_2px_5px_gray]">
        {isLoading && ( <Suspense fallback={<div className="fixed">.</div>}>
            <Lottie animationData={loadingEffect} className="w-14 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50" style={{filter: 'invert(0.7)'}}/>
        </Suspense>)}
        
        <img src={data.img} alt={data.img} className="bg-white absolute top-0 aspect-[16/17.5] object-cover rounded-lg" />
        <img src="./img/3treatmentCard.png" alt="" className="w-full absolute bottom-0 z-10"/>
        <p className="treatment_name w-full sm:text-[15px] text-[11px] text-center font-bold mb-1 sm:py-1 py-[1px] z-10 absolute bottom-0 text-cyan-50 transition-colors duration-[0.5s]">{data.name}</p>
    </div>)
}
export default TreatmentCard;