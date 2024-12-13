import React, { useEffect, useRef, useState } from "react";
import {maxsaket} from "../data/doctorsProfileData";
import {doctors, treatments, services} from "../data/cards"
import ServiceCard from "../components/ServiceCard";
import TreatmentCard from "../components/TreatmentCard"
import ScrollDiv from "../components/ScrollDiv";
import UserInfo from "../components/UserInfo";
import { useParams } from "@remix-run/react";

export default  function DoctorsProfile() {
    const popupForm = useRef(null);
    const aboutRef = useRef(null);
    const doctorImgRef = useRef(null);
    const [isMobile600, setMobile600] = useState(false);
    const [isMobile1000, setMobile1000] = useState(false);
    useEffect(()=> {
        setMobile600(window.innerWidth < 600?true:false);
        setMobile1000(window.innerWidth < 1000?true:false);
    })
    
    const {hospital, doctor} = useParams();
    const doctorProfile = maxsaket[doctor];
    const doctorIntro = doctors[hospital][doctor];

    function popupWindow() {
        if(!popupForm.current.style.opacity) {
            popupForm.current.style.opacity= '1';
            popupForm.current.style.left= (isMobile600)? '55%':'50%';
            document.querySelector('html').style.overflow= 'hidden';
        } else {
            popupForm.current.style.opacity= null;
            popupForm.current.style.left= '-200px';
            document.querySelector('html').style.overflow= 'scroll';
        }
    }
    
    function removeWindow() {
        popupForm.current.style.opacity= null;
        popupForm.current.style.left= '-200px';
        document.querySelector('html').style.overflow= 'scroll';
    }

    useEffect(()=> {
        if(window.innerWidth < 1000) {
            aboutRef.current.style.marginTop = `${doctorImgRef.current.offsetWidth-60}px`;
        }

        window.onscroll = ()=>{
            if(window.innerWidth < 1000 && window.scrollY > 500) {
                doctorImgRef.current && doctorImgRef.current.classList.add('hidden');
            } else {
                doctorImgRef.current && doctorImgRef.current.classList.remove('hidden');
            }
        }
    },[]);

    return(
        <>
            <div ref={popupForm} className="opacity-0 flex z-50 fixed top-1/2 left-[-200px] lg:w-auto w-[100vw] translate-x-[-50%] translate-y-[-50%] transition-all duration-500" >
                <div className="lg:scale-110 lg:w-auto w-[100vw] shadow-2xl bg-gradient-to-b from-white via-white to-blue-300 overflow-hidden rounded-[10px]">
                    <UserInfo/>
                </div>
                <button onClick={removeWindow} className="h-10 w-10 text-2xl pb-1 lg:scale-100 scale-150 rounded-full relative lg:right-6 lg:bottom-6 right-10 bottom-[-4px] hover:text-red-500">×</button>
            </div>

            <div className="mb-20 lg:px-4 lg:flex justify-around lg:w-[98vw] rounded-lg m-auto shadow-lg lg:bg-gradient-to-r from-purple-300 via-purple-50 to-[#f3feff] ">
                
                <div className="lg:sticky lg:w-[28%] lg:h-[70vh] top-[35vh] lg:bg-[#4c494d] bg-white rounded-t-3xl flex flex-col items-center">
                    <div ref={doctorImgRef} className="lg:relative lg:bottom-[90px] lg:rounded-full bg-red-700 fixed lg:w-[60%] w-full aspect-square">
                        <img className="lg:rounded-full w-full lg:block bg-gray-700 text-white lg:text-[140px] text-[260px] text-center lg:bg-violet-300 lg:border-[6px] lg:border-[#4c494d]" src={doctorIntro?.img} alt="👴🏻" />
                    </div>
                    <div className="text-[15px] lg:mt-[-80px] w-[78%] m-auto text-white">
                        <h2 className="text-center font-bold text-xl">{doctorIntro?.name}</h2>
                        {(!isMobile1000) && (<>
                        <p className="text-center text-sm text-cyan-100">{doctorIntro?.type}</p>

                        <p className="mt-3 pt-2 px-1 border-t-2 border-orange-500">• {doctorIntro?.speciality}</p>
                        <p className="mt-1 px-1">• {doctorIntro?.experiance}</p>
                        <p className="mt-1 px-1">• {doctorIntro?.hospital}</p>
                        <button onClick={popupWindow} className="hover:scale-110 transition-all duration-500 block h-12 w-[90%] rounded-xl mt-7 m-auto bg-[#76b4e4] active:bg-cyan-950 text-[#20201f] text-lg font-semibold">Book an Appointment</button>
                        </>)}
                    </div>
                </div>

                <div ref={aboutRef} className="lg:w-[55%] min-h-[100vh] lg:mt-[8vh] overflow-hidden rounded-t-3xl lg:rounded-none pb-5 relative z-10 bg-[#fffdff] lg:bg-transparent">
                    
                    {isMobile1000 && (
                        <div className="mb-1 py-2 text-2xl font-bold text-white bg-[#3d3d3d] rounded-3xl">
                            <h1 className="text-center">{doctorIntro?.name}</h1>
                            <p className="text-[15px] lg:mt-[-4px] mt-[-6px] text-center font-thin text-gray-200">{doctorIntro?.type}</p>
                            
                            <p className="text-lg font-thin w-[82%] m-auto border-t-2 border-orange-400 pt-2 px-[1%] mt-2">• {doctorIntro?.speciality}</p>
                            <p className="text-lg font-thin w-[82%] m-auto px-[1%]">• {doctorIntro?.experiance}</p>
                            <p className="text-lg font-thin w-[82%] m-auto px-[1%]">• {doctorIntro?.hospital}</p>
                            <button onClick={popupWindow} className="hover:scale-110 transition-all duration-500 block h-12 w-[80%] rounded-xl mt-3 m-auto bg-white text-cyan-900 active:bg-cyan-950">Book an Appointment</button>
                        </div>
                    )}
                    
                    {
                        doctorProfile.map((details, idx)=>(
                            <div key={idx} className="px-2 lg:px-0 bg-[#fffdff] lg:bg-transparent">
                                {details.heading && (<h1 className="mb-1 mt-3 text-4xl text-cyan-900 font-bold border-b-4 border-dashed border-cyan-500 inline-block pr-4 pb-2">{details.heading}</h1>)}
                                {details.subheading && (<h2 className="text-xl lg:text-2xl text-cyan-900 font-semibold mt-5 lg:border-b-4 lg:border-dashed lg:border-cyan-500 inline-block pr-4 lg:pb-1">{details.subheading}</h2>)}
                                {details.miniheading && (<p className="font-semibold lg:mt-3 mt-1">{details.miniheading}</p>)}
                                {details.description && (<p className="lg:mt-1 mt-1">{details.description}</p>)}
                                {details.list && ( <ol className={`mt-1 ml-5 list-disc ${!details.description && ('lg:mt-3 mt-1')}`}>
                                    {
                                        details.list.map((data, idx)=>(
                                            <li key={idx} className="mb-1">
                                                {data.name && (<span className="font-semibold mr-2">{data.name}:</span>)}
                                                {data.content}
                                            </li>
                                        ))
                                    }
                                </ol>)}
                            </div>
                        ))
                    }
                </div>
            </div>

            {isMobile600 && (
            <div className="bg-gradient-to-b from-white via-white to-blue-300 overflow-hidden rounded-[20px] border-t border-dotted border-[#64748b] shadow-lg w-[95vw] mb-10 m-auto">
                <UserInfo/>
            </div>)}

            <div className="mb-10"><ScrollDiv heading={'Treatments'} cardsData = {treatments} Card={TreatmentCard} count={6} scroll={true}/></div>
            <ScrollDiv heading={'Our Services'} cardsData = {services} Card={ServiceCard} count={4}/>
        </>
    )
}