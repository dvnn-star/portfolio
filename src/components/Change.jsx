import React from "react";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { FaChevronLeft } from "react-icons/fa";

function Navbar() {
    return (
        <div>
            
            {/* Tombol Chevron Kiri */}
            <Link to="/">
                <FaChevronLeft className="text-white scale-[2] fixed bottom-20 left-20 cursor-pointer" />
            </Link>
            
            {/* Tombol Chevron Kanan */}
            <Link to="/Page2" >
                <GrNext className="text-white scale-[2] fixed bottom-20 right-20 cursor-pointer" />
            </Link> 
        </div>
    );
}

export default Navbar;
