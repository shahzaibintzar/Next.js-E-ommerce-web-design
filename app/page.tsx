import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import Products from "./(components)/Products/Products";
import AboutUs from "./(components)/AboutUs/AboutUs";
import Special from "./(components)/Special/Special";
import Testimonials from "./(components)/Testimonials";
import Blog from "./(components)/Blog/Blog";
import Contect from "./(components)/Contect/Contect";

function page() {
  return (
    <>
      <div className="flex justify-around h-20 bg-slate-300 items-center ">
        <div className="flex gap-1">
          <BiLogoFacebookCircle className="h-8 w-8 cursor-pointer" />
          <AiFillTwitterCircle className="h-8 w-8 cursor-pointer" />
          <AiFillInstagram className="h-8 w-8 cursor-pointer" />
          <BsLinkedin className="h-8 w-8 cursor-pointer" />
        </div>

        <div className="flex gap-3 ">
          <div className="flex gap-2">
            <IoIosCall className="cursor-pointer" />
            <p className="cursor-pointer hidden sm:block">(+1) 234 5678 9101</p>
          </div>
          <div className="flex gap-2">
            <MdEmail className="cursor-pointer" />
            <p className="cursor-pointer hidden sm:block">
              shop@Yourdomain.com
            </p>
          </div>
        </div>
      </div>
      {/* heaader */}
      <div className="h-20 bg-slate-200 flex justify-around items-center">
        <div className="">
          <p className="text-4xl font-sans font-bold cursor-pointer">
            Selling<span className="text-orange-500 font-bold text-4xl">.</span>
          </p>
        </div>
        <div className="hidden sm:block">
          <div className="flex gap-4 ">
            <Link
              href={"/"}
              className="hover:text-orange-400 cursor-pointer font-light"
            >
              Home
            </Link>
            <Link 
              href={"products"}
              className="hover:text-orange-400 cursor-pointer font-light"
            >
              Products
            </Link>
            <Link
            
              href={"#"}
              className="  hover:text-orange-400 cursor-pointer font-light"
            >
              About Us
            </Link>
            <Link
              href={"#"}
              className="hover:text-orange-400 cursor-pointer font-light"
            >
              Special
            </Link>
            <Link
              href={"#"}
              className="hover:text-orange-400 cursor-pointer font-light"
            >
              Testimonials
            </Link>
            <Link
              href={"#"}
              className="hover:text-orange-400 cursor-pointer font-light"
            >
              Blog
            </Link>
            <Link
              href={"#"}
              className="hover:text-orange-400 cursor-pointer font-light"
            >
              Contect
            </Link>
          </div>
        </div>
        <TiThMenu className="sm:hidden h-12 w-12 cursor-pointer" />
      </div>
    <div className="image flex px-10 items-center">
       <div>
       <div className="text-white font-bold text-7xl">Shop With Us</div>
        <p className="text-white font-thin text-2xl pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br/> 
          Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <div className="flex gap-2 pt-4">
        <div className="flex items-center justify-center h-16 w-36 border-[3px] border-white bg-transparent hover:bg-white text-white hover:text-black">
          <p className="font-bold">SHOP NOW</p>
        </div>
        <div className="flex items-center justify-center h-16 w-52 border-[3px] border-white bg-white hover:bg-transparent hover:text-white">
          <p className="font-bold">CLUB MEMBERSHIP</p>
        </div>
        </div>
        {/* <div>
        </div> */}
       </div>
      </div>
      <div className="product">
      <Products />
      </div>
      <div className="">
        <AboutUs/>
      </div>
      <div className="">
        <Special/>
      </div>
      {/* <div> */}
        {/* <Testimonials/> */}
      {/* </div> */}
      <div>
        <Blog/>
      </div>
      <div>
        <Contect/>
      </div>
    </>
  );
}

export default page;
