import Poster from '../components/Poster';
import ScrollDiv from '../components/ScrollDiv';
import TreatmentCard from '../components/TreatmentCard';
import HospitalCard from '../components/HospitalCard';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import UserInfo from '../components/UserInfo';
import {treatments, hospitals, maxsaket, services} from '../data/cards';
import { useEffect, useState } from 'react';


export const meta = () => {
  return [
    { title: "Root Medix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Home() {
  const [isMobile, setMobile] = useState(false);
  const bestDoctors = Object.keys(maxsaket).map(key=>maxsaket[key]).slice(0, 12);

  useEffect(()=> {
    window.innerWidth < 640? setMobile(true):setMobile(false);
  },[]);

  return (<>
    <Poster/>
    <div className="mt-1 mb-6 lg:mt-10 lg:mb-14">
       <ScrollDiv heading={'Browse by Specialist'} cardsData={treatments} link={'/our-treatments'} Card={TreatmentCard} count={6} seeMore={true} scroll={true}/>    
    </div>
    <div className="mt-4 mb-6 lg:mt-10 lg:mb-14">
        <ScrollDiv heading={'Best Hospitals'} cardsData={hospitals} Card={HospitalCard} count={4}/>
    </div>
    <div className="mt-4 mb-6 lg:mt-10 lg:mb-14">
        <ScrollDiv heading={'Our Services'} cardsData={services} Card={ServiceCard} count={4}/>
    </div>
    <div className="mt-4 mb-6 lg:mt-10 lg:mb-14">
        <ScrollDiv heading={'Best Doctors'} cardsData={bestDoctors} link={'/our-doctors'} Card={DoctorCard} count={4} seeMore={true} scroll={true}/>
    </div>
    
    {isMobile && (
    <div className="my-7 bg-gradient-to-b from-white via-blue-50 to-[#4d8fe0] overflow-hidden rounded-3xl border-t border-dotted border-[#dddfe2] shadow-xl m-auto">
        <UserInfo/>
    </div>)}
  </>)
}
