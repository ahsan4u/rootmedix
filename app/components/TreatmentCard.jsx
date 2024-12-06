import React from "react";
const Lottie = React.lazy(() => import("lottie-react"));
import { Suspense, useState } from "react";
import loadingEffect from "../animated Icon/loading.json"

const TreatmentCard = ({data, loading})=>{
    const [isLoading, setIsLoading] = useState(false);
    function loadingFn() {
        setIsLoading(true);
    }

    return(
    // <div onClick={loadingFn} className="treatment_card_div relative bg-white sm:w-[150px] w-[105px] cursor-pointer shadow-[2px_2px_5px_gray] rounded-xl sm:p-2 p-1 my-3">
    //     {isLoading && ( <Suspense fallback={<div className="fixed">.</div>}>
    //             <Lottie animationData={loadingEffect} className="w-14 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50" style={{filter: 'invert(0.7)'}}/>
    //     </Suspense>)}
    //     <img src={data.img} alt={data.img} className="bg-white w-[100%] aspect-[16/17.5] object-cover rounded-lg shadow-[2px_2px_5px_gray]" />
    //     <p className="treatment_name sm:text-[15px] text-[11px] text-center font-bold sm:mt-3 mt-2 mb-1 sm:p-0 sm:py-1 p-1   text-cyan-900 border rounded-lg transition-colors duration-[0.5s]">{data.name}</p>
    // </div>
    <div className=" sm:w-[150px] w-[105px] mt-5 mb-3 rounded-xl aspect-[8/10.6] relative overflow-hidden shadow-[2px_2px_5px_gray]">
        <img src="./img/treatmentCard.png" alt="" className="h-full relative z-10"/>
        <img src={data.img} alt={data.img} className="bg-white absolute top-0 aspect-[16/17.5] object-cover rounded-lg" />
        <p className="treatment_name w-full sm:text-[15px] text-[11px] text-center font-bold mb-1 sm:py-1 py-[1px] z-10 absolute bottom-0 text-cyan-50 transition-colors duration-[0.5s]">{data.name}</p>

    </div>
    )

}
export default TreatmentCard;