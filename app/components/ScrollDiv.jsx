import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "@remix-run/react";


function ScrollDiv({heading, cardsData, Card, link,  count, seeMore, scroll}) {
    const treatmentsRef = useRef([]);
    const cardsContainer = useRef(null);
    

    useEffect(()=> {
        treatmentsRef.current.forEach((treatmentCard)=> {
            treatmentCard.style.marginLeft = `0`;
            treatmentCard.style.marginRight = `0`;
            const scrollCont = cardsContainer.current.offsetWidth;
            let margin = 0;
            if(scrollCont < 700) {
                margin = (scrollCont - (treatmentCard.offsetWidth* ((count >= 6)? 3: 2)))/ ((count == 6)? 6: 4);
            } else if(scrollCont < 1000) {
                margin = (scrollCont - (treatmentCard.offsetWidth* ((count >= 6)? 4: 3)))/ ((count == 6)? 8: 6);
            } else {
                margin = (scrollCont - (treatmentCard.offsetWidth* ((count >= 6)? 5: 4)))/ ((count == 6)? 10    : 8);
            }
            treatmentCard.style.paddingLeft = `${margin}px`;
            treatmentCard.style.paddingRight = `${margin}px`;
        });

        let intervalID;
        function startScrolling() {
            let idx = 100;
            intervalID = setInterval(() => {
                if(typeof window !== "undefined") {
                    let upperHeight = cardsContainer.current.getBoundingClientRect().top -100;
                    (window.innerWidth< 600) && (upperHeight -= (window.innerHeight/2)+200)
                    if(window.scrollY > upperHeight) {
                        cardsContainer.current.scrollBy({
                            top: 0,
                            left: treatmentsRef.current[0]?.offsetWidth,
                            behavior: 'smooth'
                        })
                    }
                    idx++;
                }    
            }, 4000);
        }
        if(scroll) {
            startScrolling();
            cardsContainer.current.addEventListener('touchstart', ()=> {clearInterval(intervalID)});
            cardsContainer.current.addEventListener('touchmove', ()=> {clearInterval(intervalID)});
            cardsContainer.current.addEventListener('touchend', ()=> {startScrolling()});
        }

        return ()=> { clearInterval(intervalID); }

    }, [cardsData?.length]);

    return (
        <div className="border-b border-dotted border-gray-500 rounded-b-3xl w-[98vw] m-auto">
            <div className="filter saturate-[1.4] flex justify-between bg-gradient-to-r from-cyan-200 via-blue-400 to-blue-500 rounded-t-lg overflow-hidden items-center px-3">
                <h2 className="sm:text-[26px] text-[18px] font-bold py-1">{heading}</h2>
                {seeMore && <Link to={link} className="font-bold"><img src="/img/seemore.png" alt="see-more" className="w-7 hover:scale-110 hue-rotate-60"/></Link>}
            </div>

            <div ref={cardsContainer} className="treatment-container overflow-x-scroll overflow-y-hidden flex flex-nowrap snap-x snap-proximity">
                {cardsData.map((cardData, idx) => {
                    return (
                        <Link 
                            key={idx}
                            to={cardData.link}
                            ref={elmnt=>treatmentsRef.current[idx]=elmnt}
                            className="snap-start lg:mx-10 mx-5 hover:scale-105 transition-all duration-300"
                        >
                        <Card data={cardData}/>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default ScrollDiv;