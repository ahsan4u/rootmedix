import cardsdata from "../data/cards";
import TeatmentCard from "../components/TreatmentCard"
import ServiceCard from "../components/ServiceCard";
import HospitalsCard from "../components/HospitalCard"
import { Link } from "@remix-run/react";
import ScrollDiv from "../components/ScrollDiv";

export default function Treatments() {
    const treatmentData = cardsdata["treatments"];
    const hospitalsData = cardsdata["hospitals"];
    const servicesData = cardsdata["services"];
    return(<>
        <div className={`bg-[#fffbff] grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full justify-items-center pb-12`}>
        {
            treatmentData.map((eachData, idx)=> (
                <Link  key={idx} to='/treatments/cardiology' className="w-full hover:scale-105 transition-transform duration-500 aspect-[1/1] flex justify-center items-center flex-shrink-0">
                    <TeatmentCard data={eachData}/>
                </Link>
            ))
        }
        </div>

        <ScrollDiv heading={'Best Hospitals'} cardsData = {hospitalsData} Card={HospitalsCard}/>       

      <div className="mt-12">
        <ScrollDiv heading={'Our Services'} cardsData={servicesData} Card={ServiceCard}/>
      </div>
    </>)
}