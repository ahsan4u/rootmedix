import React, { useState, useRef } from "react";
const Lottie = React.lazy(() => import("lottie-react"));
import { Suspense } from "react";
import loadingEffect from "../animated Icon/loading.json"

function DoctorCard({data}) {
    const [isLoading, setIsLoading] = useState(false);
    function loadingFn() {
        setIsLoading(true);
    }
    return(

        <div onClick={loadingFn} className='doctors_card filter saturate-[1.4] bg-[rgb(40,40,40)] sm:w-60 w-[170px] shadow-[2px_2px_5px_gray] overflow-hidden rounded-3xl sm:mb-4 lg:mt-5 my-3 relative'> {/* we change bg color from  bg-[rgb(61,61,61)] to bg-[rgb(40,40,40)] because here the filter affect the whole card*/}
            {isLoading && ( <Suspense fallback={<div className="fixed">.</div>}>
                <Lottie animationData={loadingEffect} className="w-14 absolute z-50"/>
            </Suspense>)}

            <div className='doctors_sub_card sm:aspect-[19/10] aspect-[19/9] bg-blue-400 rounded-3xl flex justify-center items-end transition-colors duration-500'>
                <img src={data.img} alt="👴🏻" className='bg-cyan-400 aspect-[1/1] text-center lg:text-7xl text-5xl w-[45%] rounded-full border-[3px] border-[#3d3d3d] relative top-7'/>
            </div>
            <div className='text-center mt-8 text-white'>
                <h2 className='font-bold sm:text-[15px] text-[11px]'>{data.name}</h2>
                <p className='sm:text-sm text-[10px] mt-[-2px] sm:mt-[3px] pb-1 text-nowrap overflow-scroll text-gray-400 border-b-2 border-blue-400 w-[83%] m-auto'>{data.type}</p>
                
                <p className='text-left sm:text-sm text-[10px] w-[90%] pl-[4%] pr-[2%] m-auto pt-1'>• {data.speciality}</p>
                <p className='text-left sm:text-sm text-[10px] w-[90%] pl-[4%] pr-[2%] m-auto'>• {data.experiance}</p>
                <p className='text-left sm:text-sm text-[10px] w-[90%] pl-[4%] pr-[2%] m-auto'>• {data.hospital}</p>
                <button className='hover:bg-blue-500 w-[85%] h-8 sm:text-sm text-xs font-bold sm:font-normal bg-blue-400 text-black rounded-lg sm:my-4 my-2 transition-colors duration-500'>Book an Appointment</button>
            </div>
        </div>
    )  
}

export default DoctorCard;