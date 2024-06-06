import React from 'react'
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className='py-5'>
      <div className=" w-[400px] h-[600px] mx-auto">
      <p className="text-xs text-gray-600 text-center">PEOPLE SAYS</p>
      <p className="text-4xl font-bold text-center ">Testimonials</p>
      <div className="flex justify-center">
        <Image src={require('../../public/assects/images/secondMan.jpg')} alt="1" className="w-[100px] h-[100px]  rounded-full"/>
      </div>
      </div>
      <p className='text-2xl w-[800px] mx-auto mt-[-140px] italic text-gray-500'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minima quia sint nisi molestiae excepturi laboriosam ratione, tempore neque sit at nesciunt corporis repellat quasi libero. Dolores eum doloremque error?"</p>
        <p className='font-bold'>John Smith</p>
    </div>
  )
}
