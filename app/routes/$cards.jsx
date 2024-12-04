import React, { useEffect, useState } from "react";
import cardsdata from "../data/cards";
import { Link, useParams } from "@remix-run/react";

function GivenCards({Card}) {
    const {cards} = useParams();
    let newData;
        if(cards == 'treatments') {
            newData = cardsdata["treatments"];
        } else if(cards == 'doctors') {
            newData = Object.keys(cardsdata["doctors"]).map(key=>cardsdata["doctors"][key]);
        }

    return(
        <div className={`grid ${cards=='doctors'?'grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]':'grid-cols-[repeat(auto-fit,minmax(130px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'} sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full justify-items-center mb-12`}>
        {
            newData?.map((eachData, idx)=> {

                return (
                <Link  key={idx} to={cards == 'treatments'?'/treatments/cardiology': eachData.link} className="w-full hover:scale-105 transition-transform duration-500 aspect-[1/1] flex justify-center items-center flex-shrink-0">
                    <Card data={eachData}/>
                </Link>)
})
        }
        </div>
    )
}

export default GivenCards;