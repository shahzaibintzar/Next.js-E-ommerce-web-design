// import Image from "next/image";
// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// function page() {
//   return (
//     <div>
//       <>
//       <Swiper
//         pagination={{
//           dynamicBullets: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//       {/* <div className=" w-[400px] h-[600px] py-10 mx-auto">
//       <p className="text-xs text-gray-600 text-center">PEOPLE SAYS</p>
//       <p className="text-4xl font-bold text-center py-5">Testimonials</p>
//       <div className="flex justify-center">
//         <Image src={require('../../public/assects/images/secondMan.jpg')} alt="1" className="w-[200px] h-[200px] rounded-full"/>
//       </div>
//       </div> */}
//     </div>
//   );
// }

// export default page;




'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { createContext } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Testimonials from './Testimonials';
import Testimonials1 from './Testimonials1';
import Testimonials2 from './Testimonials2';
import Testimonials3 from './Testimonials3';

export default function page() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper"
      >
        <SwiperSlide><Testimonials/></SwiperSlide>
        <SwiperSlide><Testimonials1/></SwiperSlide>
        <SwiperSlide><Testimonials2/></SwiperSlide>
        <SwiperSlide><Testimonials3/></SwiperSlide>
      </Swiper>
    </>
  );
}

