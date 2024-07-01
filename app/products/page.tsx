// import Image from "next/image";
// import React from "react";
// import { IoMdHeart } from "react-icons/io";
// import { MdOutlineStar } from "react-icons/md";

// function page() {
//   return (
//     <div>
//       <div className="pt-10 w-[600px] mx-auto ">
//         <p className="flex justify-center text-xs text-slate-700 font-bold">
//           POPULAR PRODUCTS
//         </p>
//         <p className="flex justify-center font-bold text-4xl">Our Products</p>
//         <p className="flex text-center py-3 ">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
//           nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
//           consequatur laboriosam ipsam.
//         </p>
//       </div>
//       <div className=" justify-center gap-3 py-3 grid sm:grid-cols-2 md:grid-cols-3 ">
//         {/* 1 */}
//       <div className=" w-96 px-3 ">
//         <div className="w-96 overflow-hidden hover:border-[2px] border-red-500">
//           <Image
//             src={require("../../public/assects/images/firstWoman.jpg")}
//             alt="1"
//             className="woman"
//           />
//         </div>
//         <p className="flex justify-center text-2xl pt-2 hover:text-red-600">
//           Wild West Hoodie
//         </p>
//         <div className="flex gap-5 justify-center py-5">
//         <div className="flex gap-2">
//           <MdOutlineStar />
//           <p>5.0</p>
//         </div>
//         <div className="flex gap-2">
//           <IoMdHeart />
//           <p>4.6</p>
//         </div>
//         </div>
//         <p className="flex justify-center text-center">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
//       <div className="flex justify-center py-4 gap-5">
//       <div className="h-8 w-20 border-[3px] border-black bg-black hover:bg-white text-white">
//         <p className="font-bold flex justify-center items-center hover:text-black">CART</p>
//       </div>
//       <div className="h-8 w-20 border-[3px] border-black bg-white hover:bg-black text-black">
//         <p className="font-bold flex justify-center items-center hover:text-white">VIEW</p>
//       </div>
//       </div>
//       </div>
//       {/* 2 */}
//        <div className=" w-96 px-3">
//         <div className="w-96 overflow-hidden hover:border-[2px] border-red-500">
//           <Image
//             src={require("../../public/assects/images/secondProduct.jpg")}
//             alt="2"
//             className="woman"
//           />
//         </div>
//         <p className="flex justify-center text-2xl pt-2 hover:text-red-600">
//           Wild West Hoodie
//         </p>
//         <div className="flex gap-5 justify-center py-5">
//         <div className="flex gap-2">
//           <MdOutlineStar />
//           <p>5.0</p>
//         </div>
//         <div className="flex gap-2">
//           <IoMdHeart />
//           <p>4.6</p>
//         </div>
//         </div>
//         <p className="flex justify-center text-center">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
//       <div className="flex justify-center py-4 gap-5">
//       <div className="h-8 w-20 border-[3px] border-black bg-black hover:bg-white text-white">
//         <p className="font-bold flex justify-center items-center hover:text-black">CART</p>
//       </div>
//       <div className="h-8 w-20 border-[3px] border-black bg-white hover:bg-black text-black">
//         <p className="font-bold flex justify-center items-center hover:text-white">VIEW</p>
//       </div>
//       </div>
//       </div>
//       {/* 3 */}
//       <div className=" w-96 px-3">
//         <div className="w-96 overflow-hidden hover:border-[2px] border-red-500">
//           <Image
//             src={require("../../public/assects/images/thirdProduct.jpg")}
//             alt="3"
//             className="woman"
//           />
//         </div>
//         <p className="flex justify-center text-2xl pt-2 hover:text-red-600">
//           Wild West Hoodie
//         </p>
//         <div className="flex gap-5 justify-center py-5">
//         <div className="flex gap-2">
//           <MdOutlineStar />
//           <p>5.0</p>
//         </div>
//         <div className="flex gap-2">
//           <IoMdHeart />
//           <p>4.6</p>
//         </div>
//         </div>
//         <p className="flex justify-center text-center">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
//       <div className="flex justify-center py-4 gap-5">
//       <div className="h-8 w-20 border-[3px] border-black bg-black hover:bg-white text-white">
//         <p className="font-bold flex justify-center items-center hover:text-black">CART</p>
//       </div>
//       <div className="h-8 w-20 border-[3px] border-black bg-white hover:bg-black text-black">
//         <p className="font-bold flex justify-center items-center hover:text-white">VIEW</p>
//       </div>
//       </div>
//       </div>
//       </div>
//       {/* section2 */}
//       <div className=" justify-center gap-3 py-5 grid sm:grid-cols-2 md:grid-cols-3 ">
//         {/* 4 */}
//       <div className=" w-96 px-3 ">
//         <div className="w-96 overflow-hidden hover:border-[2px] border-red-500">
//           <Image
//             src={require("../../public/assects/images/fourProduct.jpg")}
//             alt="1"
//             className="woman"
//           />
//         </div>
//         <p className="flex justify-center text-2xl pt-2 hover:text-red-600">
//           Wild West Hoodie
//         </p>
//         <div className="flex gap-5 justify-center py-5">
//         <div className="flex gap-2">
//           <MdOutlineStar />
//           <p>5.0</p>
//         </div>
//         <div className="flex gap-2">
//           <IoMdHeart />
//           <p>4.6</p>
//         </div>
//         </div>
//         <p className="flex justify-center text-center">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
//       <div className="flex justify-center py-4 gap-5">
//       <div className="h-8 w-20 border-[3px] border-black bg-black hover:bg-white text-white">
//         <p className="font-bold flex justify-center items-center hover:text-black">CART</p>
//       </div>
//       <div className="h-8 w-20 border-[3px] border-black bg-white hover:bg-black text-black">
//         <p className="font-bold flex justify-center items-center hover:text-white">VIEW</p>
//       </div>
//       </div>
//       </div>
//       {/* 5 */}
//        <div className=" w-96 px-3">
//         <div className="w-96 overflow-hidden hover:border-[2px] border-red-500">
//           <Image
//             src={require("../../public/assects/images/thirdWoman.jpg")}
//             alt="2"
//             className="woman"
//           />
//         </div>
//         <p className="flex justify-center text-2xl pt-2 hover:text-red-600">
//           Wild West Hoodie
//         </p>
//         <div className="flex gap-5 justify-center py-5">
//         <div className="flex gap-2">
//           <MdOutlineStar />
//           <p>5.0</p>
//         </div>
//         <div className="flex gap-2">
//           <IoMdHeart />
//           <p>4.6</p>
//         </div>
//         </div>
//         <p className="flex justify-center text-center">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
//       <div className="flex justify-center py-4 gap-5">
//       <div className="h-8 w-20 border-[3px] border-black bg-black hover:bg-white text-white">
//         <p className="font-bold flex justify-center items-center hover:text-black">CART</p>
//       </div>
//       <div className="h-8 w-20 border-[3px] border-black bg-white hover:bg-black text-black">
//         <p className="font-bold flex justify-center items-center hover:text-white">VIEW</p>
//       </div>
//       </div>
//       </div>
//       {/* 6 */}
//       <div className=" w-96 px-3">
//         <div className="w-96 overflow-hidden hover:border-[2px] border-red-500">
//           <Image
//             src={require("../../public/assects/images/secondWoman.jpg")}
//             alt="3"
//             className="woman"
//           />
//         </div>
//         <p className="flex justify-center text-2xl pt-2 hover:text-red-600">
//           Wild West Hoodie
//         </p>
//         <div className="flex gap-5 justify-center py-5">
//         <div className="flex gap-2">
//           <MdOutlineStar />
//           <p>5.0</p>
//         </div>
//         <div className="flex gap-2">
//           <IoMdHeart />
//           <p>4.6</p>
//         </div>
//         </div>
//         <p className="flex justify-center text-center">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
//       <div className="flex justify-center py-4 gap-5">
//       <div className="h-8 w-20 border-[3px] border-black bg-black hover:bg-white text-white">
//         <p className="font-bold flex justify-center items-center hover:text-black">CART</p>
//       </div>
//       <div className="h-8 w-20 border-[3px] border-black bg-white hover:bg-black text-black">
//         <p className="font-bold flex justify-center items-center hover:text-white">VIEW</p>
//       </div>
//       </div>
//       </div>
//       </div>
//       {/* next section */}
//       <div className="update flex justify-center items-center">
//         <div className="">
//             <p className="text-white text-center text-2xl">Get notified on each updates.</p>
//             <div className="text-center py-10">
//             <input type="email" placeholder="Enter Your email address" className="text-white h-10 w-[500px] px-2 font-sans bg-transparent border-[3px] border-white"/>
//             <button className="px-3 border-[3px] border-white text-white font-bold h-10 hover:bg-white hover:text-black">SUBSCRIBE</button>
//             </div>
//             <p className="text-white text-center w-[650px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam doloremque ducimus tempora.</p>
//         </div>
//       </div>
//       {/* section  */}
//       <div className="py-16 w-[600px] mx-auto">
//         <p className="flex justify-center text-xs text-slate-700 font-bold">
//         AWESOME PRODUCTS
//         </p>
//         <p className="flex justify-center font-bold text-4xl">Featured Products</p>
//         <p className="flex text-center py-3 ">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
//           nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
//           consequatur laboriosam ipsam.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default page;
