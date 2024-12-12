import React, { useEffect, useState } from "react";
import UserInfo from "../components/UserInfo";

function Poster() {
    return (
        <>
            <div className="sm:aspect-[16/7.5] filter saturate-[1.3] brightness-[0.9] contrast-[1.2] aspect-[16/9] bg-cover bg-center w-full bg-[url('/img/poster.jpg')] flex justify-end items-center">
                <div className="lg:block hidden w-72 lg:mr-32 mr-20 lg:mt-7 overflow-hidden rounded-md bg-gradient-to-b from-white via-white to-blue-400">
                    <UserInfo/>
                </div>
            </div>
        </>
    )
}

export default Poster;