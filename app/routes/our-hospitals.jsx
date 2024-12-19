import {hospitals, treatments, services} from "../data/cards";
import ScrollDiv from "../components/ScrollDiv"
import HospitalCards from "../components/HospitalCard";
import TreatmentCard from "../components/TreatmentCard";
import ServiceCard from "../components/ServiceCard";
import { Link } from "@remix-run/react";

export default function Doctors() {
    return(<>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] w-full justify-items-center  pb-10'>
        {
            hospitals.map((eachData, idx)=> (
                <Link  key={idx} to={eachData.link} className="w-full hover:scale-105 transition-transform duration-500 aspect-[1/1] flex justify-center items-center flex-shrink-0">
                    <HospitalCards data={eachData}/>
                 </Link>
            ))
        }
        </div>
        
        <ScrollDiv heading={'Best Treatments'} cardsData = {treatments} Card={TreatmentCard} count={6}/>       

        <div className="mt-12">
        <ScrollDiv heading={'Our Services'} cardsData={services} Card={ServiceCard}/>
        </div>
    </>)
}

