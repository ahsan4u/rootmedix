import cardsdata from "../data/cards";
import TeatmentCard from "../components/TreatmentCard"
import { Link } from "@remix-run/react";

export default function Treatments() {
    const newData = cardsdata["treatments"];
    return(
        <div className={`grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full justify-items-center mb-12`}>
        {
            newData.map((eachData, idx)=> (
                <Link  key={idx} to='/treatments/cardiology' className="w-full hover:scale-105 transition-transform duration-500 aspect-[1/1] flex justify-center items-center flex-shrink-0">
                    <TeatmentCard data={eachData}/>
                </Link>
            ))
        }
        </div>
    )
}