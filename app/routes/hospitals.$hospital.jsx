import UserInfo      from "../components/UserInfo";
import TreatmentCard from "../components/TreatmentCard";
import ScrollDiv     from "../components/ScrollDiv";
import ServiceCard   from '../components/ServiceCard';
import hospitals     from '../data/hospitals';
import cardsData     from '../data/cards';
import { useParams } from '@remix-run/react';


function HospitalInfo() {
  const {hospital} = useParams();
  const hospitalInfo = hospitals[hospital];
  const newTreatment = cardsData["treatments"];
  const services = cardsData["services"];

  return (
    <>
      <div className="lg:flex justify-between lg:px-4 lg:pt-2 bg-[#f7ffff]">
        
        <div className="overflow-hidden rounded-lg shadow-xl">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between overflow-hidden lg:bg-gradient-to-b from-cyan-800 via-[#15495c] to-[#0e323f]">
            <div className="text-white bg-gradient-to-b from-cyan-800 via-[#15495c] to-[#0f3542] lg:bg-none lg:p-5 py-2 my-2 px-1 lg:mx-0 mx-1 rounded-lg">
              <h1 className="text-lg lg:text-2xl font-bold truncate">{hospitalInfo?.name}</h1>
              <div className="mt-1 lg:mt-4 ml-1">
                <div className="flex mb-1">
                  <p className="text-sm font-semibold lg:truncate">Location:</p>
                  <span className="font-normal text-slate-300 text-xs ml-2 mt-[3px]">{hospitalInfo?.location?.address}</span>
                </div>
                <div className="flex mb-1">
                  <p className="text-sm font-semibold lg:truncate">Airport:</p>
                  <span className="font-normal text-slate-300 text-xs ml-2 mt-[3px]">{hospitalInfo?.location?.airport}</span>
                </div>
                <div className="flex mb-1">
                  <p className="text-sm font-semibold lg:truncate">Beds:</p>
                  <span className="font-normal text-slate-300 text-xs ml-2 mt-[3px]">{hospitalInfo?.location?.beds}</span>
                </div>
              </div>
            </div>
            <img src={hospitalInfo?hospitalInfo.img: '/img/loading.gif'} alt="Hospital" className={`rounded-lg mx-1 mt-2 lg:m-0 lg:rounded-none lg:w-72 object-cover saturate-[1.4]`} />
          </div>

          <div className=" px-2 lg:px-10 bg-[#fffdff] lg:bg-none tracking-tighter">
            {hospitalInfo?.contents?.map((content, index) => (
              <div key={index}>
                {content.heading && <h2 className="tracking-tight text-[17px] lg:text-xl font-bold pt-4 lg:pt-8 text-blue-950">{content.heading}</h2>}
                {content.subHeading && <p className="lg:text-justify  pl-1 pt-1" >{content.subHeading}</p>}
                {content.description && <p className={`lg:text-justify pl-1 pt-1 ${!content.subHeading && !content.heading &&('pt-3')}`}>{content.description}</p>}
                {content.points && (
                  <ul className="list-disc pl-5 mt-2" >
                    {
                      content.points.map((point, idx) => {
                        return (
                          <li key={idx} className="lg:text-justify text-[#1f1209]">{point}</li>
                        )
                      })
                    }
                  </ul>
                )}
              </div>
            ))}

            <div className="w-[85%] py-6">
              <h2 className="text-xl font-bold text-[#111b3d]">Contact Us</h2>
              <p className="ml-1 text-sm">{hospitalInfo?.name}</p>
              <p className="ml-1 text-sm text-justify">{hospitalInfo?.location?.address}</p>
              <p className="ml-1 text-sm">Phone: <span className="text-blue-950">+918090124099</span></p>
              <p className="ml-1 text-sm">Email: <span className="text-blue-950">noman@gmail.com</span></p>
              <p className="ml-1 text-sm">Website: <span className="text-blue-950">www.rootmedix.com</span></p>
            </div>
          </div>
        </div>
        
        <div className="sm:w-72 w-[97vw] m-auto sm:mt-10 lg:mt-0 lg:ml-5 flex-shrink-0 self-start lg:border-none mt-12 border-t border-dotted border-[#b6c0ce] shadow-xl overflow-hidden rounded-xl sticky top-12 bg-gradient-to-b from-white via-white to-blue-300">
          <UserInfo />
        </div>
      </div>

      <div className="mt-10">
        <ScrollDiv heading={'Browse by Specialist'} cardsData = {newTreatment} Card={TreatmentCard} count={6}/>          
      </div>

      <div className="mt-12">
        <ScrollDiv heading={'Our Services'} cardsData={services} Card={ServiceCard}/>
      </div>
    </>
  );
}

export default HospitalInfo;