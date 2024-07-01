import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



function AboutUs() {
  return (
    <div>
 {/* card 1 */}
    <div className="px-5 grid grid-cols-1 sm:grid-cols-2 justify-around mx-16 py-8 bg-slate-100 h-[500px] ">
    <div className="">
      <Image src={require('../../../public/assects/images/firstWoman.jpg')} alt="1" className="w-96 h-auto"/>
    </div>
    <div className="w-96">
  <p className="text-2xl font-bold">About This Product</p>
  <p>Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
   <br/>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</p>
   <br/>
   <p>Price:</p>
   <br/>
   <p><del>$269.00</del> $69.00</p>
   <div className="flex gap-2 pt-4">
        <div className="flex items-center justify-center h-16 w-52 border-[3px] border-black bg-white hover:bg-black text-black hover:text-white">
          <p className="font-bold">VIEW DETAILS</p>
        </div>
        <div className="flex items-center justify-center h-16 w-52 border-[3px] border-black bg-black text-white hover:bg-white hover:text-black">
          <p className="font-bold">ADD TO CART</p>
        </div>
        </div>
    </div>
    </div>
     {/* card 2 */}
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 justify-around mx-16 py-10 px-5 bg-slate-100 h-[500px] ">
    <div className="w-96">
  <p className="text-2xl font-bold">About This Product</p>
  <p>Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
   <br/>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?</p>
   <br/>
   <p>Price:</p>
   <br/>
   <p><del>$269.00</del> $69.00</p>
   <div className="flex gap-2 pt-4">
        <div className="flex items-center justify-center h-16 w-52 border-[3px] border-black bg-white hover:bg-black text-black hover:text-white">
          <p className="font-bold">VIEW DETAILS</p>
        </div>
        <div className="flex items-center justify-center h-16 w-52 border-[3px] border-black bg-black text-white hover:bg-white hover:text-black">
          <p className="font-bold">ADD TO CART</p>
        </div>
        </div>
    </div>
    <div className="">
      <Image src={require('../../../public/assects/images/secondWoman.jpg')} alt="1" className="w-96 h-auto"/>
    </div>
    </div>
     {/* card 3 */}
     <div className="p-10 grid sm:grid-cols-1 md:grid-cols-2">
      <div>
        <Image src={require('../../../public/assects/images/aboutUsFirst.jpg')} alt="3" className="w-[800px]"/>
      </div>
      <div className="w-56 mx-auto mt-16">
        <p className="text-xs font-bold text-gray-600 text-center">MERCHANT COMPANY</p>
        <p className="text-center text-3xl font-bold py-5">About Us</p>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
        <div className="m-auto my-7  flex justify-center items-center h-10 w-32 bg-black text-white hover:bg-white hover:text-black border-[2px] border-black ">
          <p className="font-bold">LEARN MORE</p>
        </div>
      </div>
     </div>
     <div className="flex justify-center pt-10">
     <div className="">
      <p className="text-center text-gray-600 text-sm">TEAM</p>
      <p className="text-center text-5xl font-bold pt-3">Leadership</p>
     </div> 
     </div>
     <div className=" justify-around pt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* card1 */}
     <div className="w-80 ">
      <Image src={require('../../../public/assects/images/firstMan.jpg')} alt="1" className="w-60 mx-auto"/>
      <div className="">
      <p className="text-xl py-3 text-center text-gray-900">John Rooster</p>
      <p className="text-xs text-center text-gray-500">CO-FOUNDER, PRESIDENT</p>
      <p className="pt-6 text-center">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
      <div className="flex justify-center gap-3 py-3">
      <FaFacebook  className="h-9 w-9"/>
      <AiFillTwitterCircle  className="h-9 w-9"/>
      <FaLinkedin  className="h-9 w-9"/>
      <FaInstagram className="h-9 w-9" />
      </div>
      </div>
     </div>
     {/* card2 */}
     <div className="w-80 ">
      <Image src={require('../../../public/assects/images/secondMan.jpg')} alt="1" className="w-60 mx-auto"/>
      <div className="">
      <p className="text-xl py-3 text-center text-gray-900">Tom Sharp</p>
      <p className="text-xs text-center text-gray-500">CO-FOUNDER, COO</p>
      <p className="pt-6 text-center">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
      <div className="flex justify-center gap-3 py-3">
      <FaFacebook  className="h-9 w-9"/>
      <AiFillTwitterCircle  className="h-9 w-9"/>
      <FaLinkedin  className="h-9 w-9"/>
      <FaInstagram className="h-9 w-9" />
      </div>
      </div>
     </div>
     {/* card3 */}
     <div className="w-80 ">
      <Image src={require('../../../public/assects/images/thirdMan.jpg')} alt="1" className="w-60 mx-auto"/>
      <div className="">
      <p className="text-xl py-3 text-center text-gray-900">Winston Hodson</p>
      <p className="text-xs text-center text-gray-500">CO-FOUNDER, COO</p>
      <p className="pt-6 text-center">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
      <div className="flex justify-center gap-3 py-3">
      <FaFacebook  className="h-9 w-9"/>
      <AiFillTwitterCircle  className="h-9 w-9"/>
      <FaLinkedin  className="h-9 w-9"/>
      <FaInstagram className="h-9 w-9" />
      </div>
      </div>
     </div>

     </div>
    </div>

  );
}

export default AboutUs;
