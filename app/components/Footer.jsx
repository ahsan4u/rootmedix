import React from "react";
import { Link } from "@remix-run/react";
function Footer() {

    return(
        <>
            <div className="footer-container text-white bg-[#3d3d3d] mt-20">
                <button className='block m-auto text-xl rounded-full bg-[#328596] px-8 py-2 relative bottom-5'>Consultant</button>
                <div className="link-column grid sm:grid-cols-4 grid-cols-1 pb-10 justify-items-center">
                    <div className="important-links lg:w-[70%] w-[85%]  sm:mb-0 mb-8">
                        <h3 className='border-b-2 border-[rgb(255,118,60)] text-2xl font-semibold pr-3 pb-1 mt-1 mb-5'>Important Links</h3>
                        <Link to="/our-doctors"><p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Top Doctor</p></Link>
                        <Link to="/our-hospitals"><p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Top Hospital</p></Link>
                        <Link to="/our-treatments"><p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Treatment Cost</p></Link>
                        <Link to="/"><p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Medical Visa</p></Link>
                        <Link to="/"><p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> About Us</p></Link>
                    </div>

                    <div className="important-links lg:w-[70%] w-[85%]  sm:mb-0 mb-8">
                        <h3 className='border-b-2 border-[rgb(255,118,60)] text-2xl font-semibold pr-3 pb-1 mt-1 mb-5'>Treatment</h3>
                        <Link to="/treatments/cardiology"><p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Cardiology</p></Link>
                        <Link to="/treatments/spine"><p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Spine</p></Link>
                        <Link to="/treatments/gastroenterology"><p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Gastroenterology</p></Link>
                        <Link to="/treatments/orthopadic"><p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Orthopadic</p></Link>
                        <Link to="/treatments/urology"><p className='my-1 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Urology</p></Link>
                    </div>

                    <div className="important-links lg:w-[70%] w-[85%]  sm:mb-0 mb-8">
                        <h3 className='border-b-2 border-[rgb(255,118,60)] text-2xl font-semibold pr-3 pb-1 mt-1 mb-5'>Our Hospital</h3>
                        <Link to="/hospitals/maxsaket"><p className='my-2 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Max Hospital, Saket</p></Link>
                        <Link to="/hospitals/blkmax"><p className='my-2 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> BLK Max Hospital</p></Link>
                        <Link to="/hospitals/maxdwarka"><p className='my-2 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Max Hospital, Dwarka</p></Link>
                        <Link to="/hospitals/aakash"><p className='my-2 sm:text-[16px] text-[20px] text-slate-300'><span className='text-white'>•</span> Aakash Hospital Dwarka</p></Link>
                    </div>

                    <div className="important-links lg:w-[70%] w-[85%] sm:mb-0 mb-8">
                        <h3 className='border-b-2 border-[rgb(255,118,60)] text-2xl font-semibold pr-3 pb-1 mt-1 mb-5'>Contact Us</h3>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300 border border-slate-500 p-1 rounded-lg mb-2'>Mob.: +918957510221 <br/> Email: noman@gmail.com</p>
                        <p className='my-1 sm:text-[16px] text-[20px] text-slate-300 border border-slate-500 p-1 rounded-lg mb-2'>Mob.: +919565717167 <br/> Email: itsahsan13@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;