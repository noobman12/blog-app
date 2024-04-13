import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faPalette } from "@fortawesome/free-solid-svg-icons/faPalette";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";

function Navbar() {
  return (
    <div className='flex items-center justify-between'>
      <div className='text-2xl font-bold text-logo_gray'>Logo</div>
      <div className='flex gap-10'>
        <div className='search-icon h-[20px] w-[20px] mt-[2px]'>
          <FontAwesomeIcon icon={faMagnifyingGlass} color='gray' />
        </div>
        <div className='palette h-[27px] w-[27px]'>
          <FontAwesomeIcon icon={faPalette} color='white' />
        </div>
        <div className='menu h-[25px] w-[25px] mb-[2px]'>
          <FontAwesomeIcon icon={faBars} color='white' />
        </div>
        <div className='flex content-center subcribe-button gap-2'>
          <div className='subcribe-icon h-[23px] w-[23px]'>
            <FontAwesomeIcon icon={faEnvelope} color='white' />
          </div>
          <span className=' text-lg text-gray-400 font-font_plus_jakarta_sans'>
            SUBCRIBE
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
