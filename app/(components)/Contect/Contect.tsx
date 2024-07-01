import Image from 'next/image'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Contect() {
  return (
  <>
    <div className='bg-slate-200 '>
      <div className='py-10'>
        <div className='w-[300px] mx-auto'>
          <p className='text-xs  text-gray-400 text-center'>CONTACT FORM</p>
          <p className='text-3xl font-bold text-center py-5'>Get In Touch</p>
        </div>
      </div>
      <div className='w-[700px] h-[750px] bg-white mx-auto'>
        <div className='w-[600px] m-auto py-8'>
          <p className='text-2xl'>Contact Form</p>
          <div className='grid sm:grid-cols-2  '>
            <div>
            <p className='py-5'>First Name</p>
          <input
            type='text'
            placeholder='Enter Your First Name'
            className='text-black h-10 w-[370px] sm:w-[200px] px-2 font-sans bg-transparent border-[1px] border-black'
          />
            </div>
            <div>
            <p className='py-5'>Last Name</p>
          <input
            type='text'
            placeholder='Enter Your Last Name'
            className='text-black h-10 w-[370px] sm:w-[200px] px-2 font-sans bg-transparent border-[1px] border-black'
          />
            </div>
          </div>
          <p className='py-5'>Email</p>
          <input
            type='text'
            placeholder='Enter Your Email'
            className='text-black h-10 w-[370px] sm:w-[500px]  px-2 font-sans bg-transparent border-[1px] border-black'
          />
          <p className='py-5'>Subject</p>
          <input
            type='text'
            placeholder='Enter Your Subject'
            className='text-black h-10 w-[370px] sm:w-[500px] px-2 font-sans bg-transparent border-[1px] border-black'
          />
          <p className='py-5'>Message</p>
          <textarea
            placeholder='Write Your notes or questions here...'
            className='text-black h-[200px] w-[370px] sm:w-[500px]  px-2 font-sans bg-transparent border-[1px] border-black'
          />
          <button type='button' className='h-12 w-36 mt-5 border-[1px] border-black bg-black text-white font-bold'>SEND MESSAGE</button>
        </div>
      </div>
    </div>
<div className=' flex justify-around mt-10 pt-5 bg-white'>
<div>
  <p className='font-bold'>ABOUT US</p>
  <p className='w-56 h-64 leading-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam</p>
</div>
<div className=''>
  <p className='font-bold'>QUICK LINKS</p>
  <p className=''>About Us</p>
  <p className=''>Services</p>
  <p className=''>Testimonials</p>
  <p className=''>Contact Us</p>
</div>
<div>
  <p className='font-bold'>FOLLOW US</p>
  <div className='flex gap-6'>
  <FaFacebookF />
  <FaTwitter />
  <FaInstagram />
  <FaLinkedinIn />
  </div>



</div>
<div>
  <p className='font-bold'>FEATURED PRODUCT</p>
  <Image src={require('../../../public/assects/images/secondWoman.jpg')} alt='1' className='h-[300px] w-[300px]'/>
  <p className='text-2xl'>Leather Brown Shoe</p>
  <p className='font-bold text-lg'>$60.00</p>
  <div className='h-8 w-32 flex justify-center items-center border-[1px] border-black bg-black text-white hover:bg-white hover:text-black'>
    <p className='font-bold'>ADD TO CART</p>
  </div>
</div>
</div>
    </>
  )
}

export default Contect;
 