import React from 'react';
import { Suspense } from 'react';
const Lottie = React.lazy(() => import("lottie-react"));
import menuEffect from '../animated Icon/menuV2.json';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [isMobile, setMobile] = useState(false);
    const menubarRef = useRef(null);
    const mobileSearchIcon = useRef(null);
    const navBarToggle = useRef(null);
    const MobileSearchCont = useRef(null);
    const MobileSearchContInputDiv = useRef(null);
    const MobileSearchContInput = useRef(null);
    const MobileSearchContButton = useRef(null);
    const langSidebarDiv = useRef(null);
    const location = useLocation();

    useEffect(()=> {
        setMobile(window.innerWidth > 1020?false:true);
    },[]);
    
    useEffect(()=> {
        if(navBarToggle.current.style.opacity) {
            navBarToggle.current.style.width= '0';
            navBarToggle.current.style.opacity= null;
            document.querySelector('html').style.overflow = 'scroll';
            menubarRef.current.playSegments([40, 0], true);
        }
    },[location])
    
    useEffect(()=> {
        navBarToggle.current.addEventListener('touchmove', ()=> {
            if(navBarToggle.current.style.opacity) {
                navBarToggle.current.style.width= '0';
                navBarToggle.current.style.opacity= null;
                document.querySelector('html').style.overflow = 'scroll';
                menubarRef.current.playSegments([40, 0], true);
            }
        })
    },[]);

    function toggleNavbar(e) {
        menubarRef.current.setSpeed(2);
        if(!navBarToggle.current.style.opacity) {
            // First remove the search
            MobileSearchContInputDiv.current.style.width = '46px';
            MobileSearchContInputDiv.current.style.background = 'transparent';
            MobileSearchContInput.current.style.display = 'none';
            MobileSearchCont.current.style.cssText = 'top: 11px; right: 62px; transition: top 0.5s ease-in-out, right 0.2s ease-in-out;';
            langSidebarDiv.current.style.width = '198px';
            MobileSearchContButton.current.style.margin = null;
            MobileSearchContButton.current.style.background = '#243355';
            mobileSearchIcon.current.style.color = 'white';
            
            navBarToggle.current.style.width= '80vw';
            navBarToggle.current.style.opacity= '1';
            document.querySelector('html').style.overflow = 'hidden';
            
            menubarRef.current.play();
            menubarRef.current.playSegments([0, 60], true);
        } else {
            navBarToggle.current.style.width= '0';
            navBarToggle.current.style.opacity= null;
            document.querySelector('html').style.overflow = 'scroll';
            menubarRef.current.playSegments([40, 0], true);
        }
    }
    
    function MobileSearch() {
        if(window.innerWidth < 1020) {
            const inputDiv = MobileSearchContInputDiv.current;
            const input = MobileSearchContInput.current;
            if(inputDiv.offsetWidth < 50) {
                // first remove sidebar if visible
                if(navBarToggle.current.style.opacity) {
                    navBarToggle.current.style.width= '0';
                    navBarToggle.current.style.opacity= null;
                    document.querySelector('html').style.overflow = 'scroll';
                    menubarRef.current.playSegments([40, 0], true);
                }

                inputDiv.style.width = '98vw';
                inputDiv.style.background = 'rgb(82,82,82)';
                langSidebarDiv.current.style.width = '143px';
                MobileSearchCont.current.style.cssText = 'top: 68px; right: 1vw; transition: top 0.2s ease-in-out, right 0.5s ease-in-out;';
                MobileSearchContButton.current.style.margin = '4px';
                MobileSearchContButton.current.style.background = 'white';
                mobileSearchIcon.current.style.color = 'black';
                setTimeout(()=> {
                    input.style.display = 'block';
                    input.focus();
                }, 500);
            } else if(inputDiv.offsetWidth > 50 && !input.value) {
                inputDiv.style.width = '46px';
                input.style.display = 'none';
                inputDiv.style.background = 'transparent';
                MobileSearchCont.current.style.cssText = 'top: 11px; right: 62px; transition: top 0.5s ease-in-out, right 0.2s ease-in-out;';
                langSidebarDiv.current.style.width = '198px';
                MobileSearchContButton.current.style.margin = null;
                MobileSearchContButton.current.style.background = '#243355';
                mobileSearchIcon.current.style.color = 'white';
            }
        }
    }
    
    return (
        <>
            <div className="topBar sticky top-0 lg:static z-20 lg:shadow-[inset_0_0_3px_darkcyan] bg-gradient-to-r from-cyan-100 via-blue-300 to-blue-400 h-16 flex justify-between items-center lg:pr-3">
                <Link to='/'><img src="/img/logo.png" alt="Root-Medix" className='drop-shadow-sm filter contrast-150 ml-1 h-11 lg:h-12 lg:ml-2'/></Link>
                <div ref={langSidebarDiv} className='flex justify-between items-center w-[198px] lg:w-[550px] transition-all duration-500'>
                    <select name="language" id="lang" className='lg:shadow-md hover:scale-105 outline-none border-2 border-[#122d3a21] lg:border-none bg-transparent lg:bg-white text-sm lg:text-[16px] px-1 lg:px-5 h-9 lg:h-10 rounded-xl transition-transform duration-500'>
                        <option value="eng">English</option>
                        <option value="hin">Hindi</option>
                        <option value="arab">Arabic</option>
                    </select>

                    <div ref={MobileSearchCont} className='lg:static fixed top-[11px] right-[62px] z-20 rounded-full lg:shadow-md'>
                        <div ref={MobileSearchContInputDiv} className='lg:bg-white rounded-full overflow-hidden lg:w-full w-[46px] flex lg:justify-start justify-end items-center transition-all duration-500'>
                            <input type="text"
                            ref={MobileSearchContInput}
                            name="search"
                            id="search"
                            placeholder="Search here..."
                            className='lg:w-72 w-[90%] lg:h-10 h-12 pl-3 lg:text-black text-white lg:block hidden outline-none text-md bg-transparent'/>
                            <button ref={MobileSearchContButton} onClick={MobileSearch} className='bg-[#243355] lg:mx-0.5 lg:w-9 w-11 aspect-[1/1] text-white rounded-full transition-colors duration-500'><i ref={mobileSearchIcon} className="fa-solid fa-magnifying-glass" style={{color: "white"}}></i></button>
                        </div>
                    </div>

                    {isMobile && (<button onClick={toggleNavbar} className='lg:hidden block sidebarBtn p-[9px] bg-[#243355] mr-2 rounded-full z-50 transition-colors duration-500'>
                        <Lottie lottieRef={menubarRef} animationData={menuEffect} loop={false} autoplay={false} className='w-7 h-7 filter invert'/>
                    </button>)}
                </div>
            </div>

            <ol className='navBar lg:sticky md:sticky lg:top-0 z-50 flex justify-end lg:justify-start w-full'>
                <div ref={navBarToggle} style={{backdropFilter: 'blur(6px)'}} className='lg:flex lg:bg-[transparent] bg-[#525252] fixed z-50 top-16 lg:static w-0 overflow-hidden opacity-0 lg:opacity-100 lg:w-full h-full lg:h-auto lg:gap-2 lg:pl-2 lg:py-1 text-md lg:text-[16px] transition-all duration-500'>
                    <Link to='/'><li className='text-white lg:text-black lg:bg-blue-200 hover:bg-gray-500 lg:hover:bg-blue-300 shadow-lg hover:scale-105 transition-all duration-500 px-7 xl:px-8 lg:px-5 rounded-full py-4 lg:py-[6px] cursor-pointer'>Home</li></Link>
                    <Link to='/our-doctors'><li className='text-white lg:text-black lg:bg-blue-200 hover:bg-gray-500 lg:hover:bg-blue-300 shadow-lg hover:scale-105 transition-all duration-500 px-7 xl:px-8 lg:px-5 rounded-full py-4 lg:py-[6px]'>Doctors</li></Link>
                    <Link to='/our-hospitals'><li className='text-white lg:text-black lg:bg-blue-200 hover:bg-gray-500 lg:hover:bg-blue-300 shadow-lg hover:scale-105 transition-all duration-500 px-7 xl:px-8 lg:px-5 rounded-full py-4 lg:py-[6px]'>Hospitals</li></Link>
                    <Link to='/our-treatments'><li className='text-white lg:text-black lg:bg-blue-200 hover:bg-gray-500 lg:hover:bg-blue-300 shadow-lg hover:scale-105 transition-all duration-500 px-7 xl:px-8 lg:px-5 rounded-full py-4 lg:py-[6px]'>Treatment Cost</li></Link>
                    <Link to='/'><li className='text-white lg:text-black lg:bg-blue-200 hover:bg-gray-500 lg:hover:bg-blue-300 shadow-lg hover:scale-105 transition-all duration-500 px-7 xl:px-8 lg:px-5 rounded-full py-4 lg:py-[6px]'>Medical Visa</li></Link>
                    <Link to='/'><li className='text-white lg:text-black lg:bg-blue-200 hover:bg-gray-500 lg:hover:bg-blue-300 shadow-lg hover:scale-105 transition-all duration-500 px-7 xl:px-8 lg:px-5 rounded-full py-4 lg:py-[6px]'>Contact us</li></Link>
                    <Link to='/'><li className='text-white lg:text-black lg:bg-blue-200 hover:bg-gray-500 lg:hover:bg-blue-300 shadow-lg hover:scale-105 transition-all duration-500 px-7 xl:px-8 lg:px-5 rounded-full py-4 lg:py-[6px]'>About us</li></Link>
                    <Link to='/'><li className='text-white lg:text-black lg:bg-blue-200 hover:bg-gray-500 lg:hover:bg-blue-300 shadow-lg hover:scale-105 transition-all duration-500 px-7 xl:px-8 lg:px-5 rounded-full py-4 lg:py-[6px]'>Blogs</li></Link>
                </div>
            </ol>
        </>
    )   
}

export default Navbar;