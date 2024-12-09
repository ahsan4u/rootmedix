import cardsdata from "../data/cards";
import DoctorCard from "../components/DoctorCard"
import { Link } from "@remix-run/react";

export default function Doctors() {
    const newData = Object.keys(cardsdata["doctors"]).map(key=>cardsdata["doctors"][key]);
    return(<>
    <div className="bg-[#fffbff] pb-10">

        <div className='grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] w-full justify-items-center'>
        {
            newData.map((eachData, idx)=> (
                <Link  key={idx} to={eachData.link} className="w-full hover:scale-105 transition-transform duration-500 aspect-[1/1] flex justify-center items-center flex-shrink-0">
                    <DoctorCard data={eachData}/>
                 </Link>
            ))
        }
        </div>
    </div>
    </>)
}

