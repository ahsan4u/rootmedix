import { Link, useParams } from 'react-router-dom';
import ScrollDiv from '../components/ScrollDiv';
import DoctorCard from '../components/DoctorCard';
import ServiceCard from '../components/ServiceCard';
import {maxsaket, services} from '../data/cards';
import { useEffect, useState } from 'react';

function InTreatment() {
    const [data, setData] = useState();
    const [isloading, setIsloading] = useState(true);
    function generateItems(count) {
        const items = [];
        for (let i = 0; i < count; i++) {
          items.push(<div className='w-[90%] aspect-[16/10] rounded-2xl drop-shadow-xl bg-[#b0b3b4] lg:mb-6 mb-3 ' key={i}></div>);
        }
        return items;
    }
    const maxDoctors = Object.keys(maxsaket).map((key)=> maxsaket[key]);
    const {treatment} = useParams();
    useEffect(() => {
        import("../data/cards").then((module) => setData(module[treatment])).finally(()=>{setIsloading(false)});
    }, [useParams()]);

    return (
        <>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(195px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center w-full justify-around bg-[#faf6f6] pt-5 pb-12'>
            {isloading && generateItems(16)}
                    {
                        data?.map((item, idx)=>(
                            <Link key={idx} to="/treatments/cardiology/heart-transplant" className='w-[90%] hover:scale-105 transition-all duration-500'>
                            <div className='flex aspect-[16/10] rounded-2xl drop-shadow-xl overflow-hidden lg:mb-6 mb-3 relative'>
                                <div className='text-white w-[65%] flex flex-col justify-between lg:pl-2 pl-[6px] lg:pt-2 pb-2 pt-1 h-full bg-[url("/img/treatment-card.png")] brightness-[0.95] contrast-[1.1] bg-[length:100%_100%] z-20 rounded-l-2xl'>
                                    {item.short && (<div>
                                        <h2 className='font-bold text-lg lg:text-2xl'>{item.short}</h2>
                                        <p className='lg:text-[16px] lg:mt-1 text-[9.8px] w-[73%]'>{item.name}</p>
                                    </div>)}
                                    {!item.short && (<p className='lg:text-lg text-[11px] mt-1 w-[75%]'>{item.name}</p>)}
                                    <p className='lg:text-lg text-[10px] ml-1 w-[60%]'>Cost In India</p>
                                </div>
                                <img src={item.img} alt={item.img} className='w-[50%] h-full absolute right-0 object-cover rounded-r-2xl'/>
                            </div>
                            </Link>
                        ))
                    }
            </div>
            <ScrollDiv heading={'Best Doctors'} cardsData={maxDoctors} Card={DoctorCard} scroll={true}/>
            
            <div className="mt-12">
                <ScrollDiv heading={'Our Services'} cardsData={services} Card={ServiceCard}/>
            </div>
        </>
    )
}

export default InTreatment;