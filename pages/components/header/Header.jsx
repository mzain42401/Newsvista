import React, { useRef, useState } from 'react'
import Logo from "../../../images/Copy of Abstract Illustrative Stream Studio Logo.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaSearch } from "react-icons/fa";
import { FaBars, FaOutdent } from "react-icons/fa6";
import classes from './header.module.css'
import Image from 'next/image';

const Header = () => {
  const {
    navbar,
    logo,
    navToggleBtn,
    active
  } = classes
  let [initial, setInitial] = useState(true)
  let navRef = useRef()

  const toggleIcons = () => {
    setInitial(!initial)
    showNav()
  }


  const showNav = () => {
    navRef.current.classList.toggle(active)
  }
  let currentDate;
  let myDate = new Date()
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  let month = myDate.getMonth()
  let currentMonth = months[month]
  let date = myDate.getDate()
  let year = myDate.getFullYear()
  currentDate = currentMonth + " " + date + ", " + year;

  return (
    <>
      <header className=" flex justify-between items-center md:px-20 px-5 bg-gray-200">
        <div className="capitalize text-black font-semibold ">{currentDate}</div>
        <div className="flex py-1 text-black">

          <span className="px-2 text-xl hover:text-[#ffae00] cursor-pointer"><a href=""><FaFacebookF /></a></span>
          <span className="px-2 text-xl hover:text-[#ffae00] cursor-pointer" ><a href=""><FaTwitter /></a></span>
          <span className="px-2 text-xl hover:text-[#ffae00] cursor-pointer" ><a href=""><FaLinkedinIn /></a></span>
          <span className="px-2 text-xl hover:text-[#ffae00] cursor-pointer" ><a href=""><FaInstagram /></a></span>
          <span className="px-2 text-xl hover:text-[#ffae00] cursor-pointer "><a href=""><FaPhoneAlt /></a></span>
        </div>
      </header>



      <nav className={navbar}>
        <div>
          <a className=" title-font font-medium  text-gray-900 ">
            <Image src={Logo} alt='Logo' className='w-56' />

          </a>
        </div>

        <ul ref={navRef}>
          <li>
            <a onClick={toggleIcons} href="#home">Home</a>
          </li>
          <li>
            <a onClick={toggleIcons} href="#about">About</a>
          </li>
          <li>
            <a onClick={toggleIcons} href="#services">Sports</a>
          </li>

          <li>
            <a onClick={toggleIcons} href="#projects">Technology</a>
          </li>
          <li>
            <a onClick={toggleIcons} href="#testimonial">Business</a>
          </li>
          <li>
            <a onClick={toggleIcons} href="#contact">Politics</a>
          </li>

          <li>
            <a onClick={toggleIcons} href="#contact">Health</a>
          </li>
          <li>
            <a onClick={toggleIcons} href="#contact">Education</a>
          </li>
          <li>
            <a onClick={toggleIcons} href="#contact">Entertainment</a>
          </li>
          <li className='md:flex hidden'>
          <span className="  text-xl   cursor-pointer px-3  text-[#ffae00]"><FaSearch /></span>

          </li>
          
        </ul>

        <div className={navToggleBtn} onClick={toggleIcons}>
          {initial ? <FaBars /> : <FaOutdent />}
        </div>
      </nav>


      {/* 
      <header className=" bg-black   ">
        <div className=" flex  justify-between items-center px-4  md:py-0 py-3 ">
          <div>
            <a className=" title-font font-medium  text-gray-900 ">
              <Image src={logo} alt='Logo' className='w-56' />

            </a>
          </div>
         
          <div onClick={()=>setbars(!bars)} className='cursor-pointer hover:text-[#d21d4e] text-3xl md:hidden text-[#ffae00]'>
            <FaBars/>
          </div>
          <nav className="hidden md:flex flex-wrap items-center text-base justify-center font-semibold">
            <ul className='flex  items-center'>
              <li>
                <a className="  hover:text-[#d21d4e] px-3  cursor-pointer text-[#ffae00]">Home</a>
              </li>
              <li>
                <a className=" hover:text-[#d21d4e] cursor-pointer px-3  text-[#ffae00]">About</a>
              </li>
              <li>
                <a className=" hover:text-[#d21d4e] cursor-pointer px-3  text-[#ffae00]">Sports</a>
              </li>
              <li>
                <a className=" hover:text-[#d21d4e] cursor-pointer px-3  text-[#ffae00]">Technology</a>
              </li>
              <li>
                <a className=" hover:text-[#d21d4e] cursor-pointer px-3  text-[#ffae00]">Business </a>
              </li>
              <li>
                <a className=" hover:text-[#d21d4e] cursor-pointer px-3  text-[#ffae00]">Politics</a>
              </li>
              <li>
                <a className=" hover:text-[#d21d4e] cursor-pointer px-3  text-[#ffae00]">Health </a>
              </li>
              <li>
                <a className=" hover:text-[#d21d4e] cursor-pointer px-3  text-[#ffae00]">Education </a>
              </li>
              <li>

                <a className=" hover:text-[#d21d4e] cursor-pointer px-3  text-[#ffae00]">Entertainment</a>
              </li>
              <li className='ml-10'>

                <span className=" text-xl  cursor-pointer px-3  text-[#ffae00]"><FaSearch /></span>
              </li>
            </ul>



          </nav>

        </div>
      </header>
 */}



    </>
  )
}

export default Header
