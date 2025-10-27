import React from "react";
import { House , BadgeInfo, Headset, UserRoundCheck, UserRound} from 'lucide-react';
import CompanyLogo from '../images/companyLogo.png'
import { Link } from "react-router-dom";

   function Header ()  {

    return (
        <div className="bg-slate-600 p-1 ">
        <div className="max-w-7xl flex justify-between gap-6 ">
            <div className="w-44 py-2 px-6">
                <img src={CompanyLogo} alt="Logo" className="h-20 " />
            </div>

                <nav className="flex justify-center items-center gap-10">
                <Link to='/home' className="flex justify-between gap-3 font-bold text-white text-xl">
                    <span><House /></span>
                    Home</Link>
                <Link to='/about' className="flex justify-between gap-3 font-bold text-white text-xl">
                    <span><BadgeInfo /></span>
                    About Us</Link>
                <Link to="/contact" className="flex justify-between gap-3 font-bold text-white text-xl">
                    <span><Headset /></span>
                    Contact Us</Link>
                    <div className="text-white text-xl font-bold">
                {/* <UserRoundCheck /> */}
                <button className=" flex justify-end gap-3">
                    <span><UserRound /></span>
                    Login
                </button>
            </div>
            </nav>
            
           
        </div>
         
        </div>
    )
}
export default Header