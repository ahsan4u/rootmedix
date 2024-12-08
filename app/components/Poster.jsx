import React, { useEffect, useState } from "react";
import UserInfo from "../components/UserInfo";

function Poster() {
    const [isMobile, setMobile] = useState(false);
    useEffect(()=> {
        window.innerWidth > 740?setMobile(true): setMobile(false);
    },[]);
    return (
        <>
            <div className="sm:aspect-[16/7.5] aspect-[16/9] bg-cover bg-center w-full bg-[url('/img/poster.jpg')] -hue-rotate-[-10deg] flex justify-end items-center">
                {isMobile && (
                <div className="w-72 lg:mr-32 mr-20 lg:mt-7 overflow-hidden rounded-md bg-gradient-to-b from-white via-white to-blue-400">
                    <UserInfo/>
                </div>)}
            </div>
        </>
    )
}

export default Poster;