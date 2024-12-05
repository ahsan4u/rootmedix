import React, { useState } from "react";
const Lottie = React.lazy(() => import("lottie-react"));
import { Suspense } from "react";
import loadingEffect from "../animated Icon/loading.json"

function DoctorCard({data, loading}) {
    return(
        <div className='doctors_card bg-white lg:w-60 w-[170px] shadow-lg overflow-hidden rounded-3xl lg:mb-4 my-3 relative'>
            
            {loading && ( <Suspense fallback={<div className="fixed">.</div>}>
                <Lottie animationData={loadingEffect} className="w-14 absolute z-50"/>
            </Suspense>)}

            <div className='doctors_sub_card lg:aspect-[19/10] aspect-[19/9] bg-blue-500 rounded-3xl flex justify-center items-end transition-colors duration-500'>
                <img src={data.img} alt={data.img} className='bg-cyan-400 aspect-[1/1] w-[45%] rounded-full border-[3px] border-white relative top-7'/>
            </div>
            <div className='text-center mt-8' style={{fontFamily: `"Convergence", sans-serif`}}>
                <h2 className='font-bold lg:text-[16px] text-xs'>{data.name}</h2>
                <p className='lg:text-sm text-[10px] mt-[-2px] lg:mt-[3px] pb-1 text-nowrap overflow-scroll text-gray-500 border-b-2 border-blue-700 w-[83%] m-auto'>{data.type}</p>
                
                <p className='text-left lg:text-sm text-[10px] w-[90%] pl-[4%] pr-[2%] m-auto pt-1'>• {data.speciality}</p>
                <p className='text-left lg:text-sm text-[10px] w-[90%] pl-[4%] pr-[2%] m-auto'>• {data.experiance}</p>
                <p className='text-left lg:text-sm text-[10px] w-[90%] pl-[4%] pr-[2%] m-auto'>• {data.hospital}</p>
                <button className='hover:bg-blue-900 w-[85%] h-8 lg:text-sm text-xs bg-blue-700 text-white rounded-lg lg:my-4 my-2 transition-colors duration-500'>Book an Appointment</button>
            </div>
        </div>
    )  
}

export default DoctorCard;