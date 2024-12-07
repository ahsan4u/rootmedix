import cardsdata from "../data/cards";
import DoctorCard from "../components/DoctorCard"
import { Link } from "@remix-run/react";

export default function Doctors() {
    const newData = Object.keys(cardsdata["doctors"]).map(key=>cardsdata["doctors"][key]);
    return(<>
        <h1 className="lg:text-4xl text-2xl font-bold text-[#97b3f5] inline-block bg-[#3d3d3d] px-2 rounded-md py-1 ml-4 lg:my-5 mt-3 mb-1">Max Saket Hospital</h1>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] w-full justify-items-center mb-12'>
        {
            newData.map((eachData, idx)=> (
                <Link  key={idx} to={eachData.link} className="w-full hover:scale-105 transition-transform duration-500 aspect-[1/1] flex justify-center items-center flex-shrink-0">
                    <DoctorCard data={eachData}/>
                 </Link>
            ))
        }
        </div>
        <h1 className="lg:text-4xl text-2xl font-bold text-[#97b3f5] inline-block bg-[#3d3d3d] px-2 rounded-md py-1 ml-4 my-5">Max Dwarka Hospital</h1><br/>
        <h1 className="lg:text-4xl text-2xl font-bold text-[#97b3f5] inline-block bg-[#3d3d3d] px-2 rounded-md py-1 ml-4 my-5">BLK Max Hospital</h1><br/>
        <h1 className="lg:text-4xl text-2xl font-bold text-[#97b3f5] inline-block bg-[#3d3d3d] px-2 rounded-md py-1 ml-4 my-5">Akash Hospital</h1>
    </>)
}

