import React from "react";

function Special() {
  return (
    <div>
      <div className="special ">
        <div className="w-[700px] mx-auto">
          <p className="text-xs text-gray-500 text-center pt-2">
            SPECIAL PROMO
          </p>
          <p className="text-3xl font-bold text-white text-center py-5">
            Summer Sale
          </p>
          <p className="text-xl text-white text-center">
            Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
            eveniet aut consequatur laboriosam ipsam.
          </p>
          <div className="gap-6 justify-center items-center pt-10 grid sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5">
            <div className="bg-white w-24 h-36 rounded-md ">
              <p className="text-5xl text-center pt-7 text-green-500">00</p>
              <p className="text-xs text-gray-500 text-center pt-7">weeks</p>
            </div>
            <div className="bg-white w-24 h-36 rounded-md ">
              <p className="text-5xl text-center pt-7 text-green-500">00</p>
              <p className="text-xs text-gray-500 text-center pt-7">days</p>
            </div>
            <div className="bg-white w-24 h-36 rounded-md ">
              <p className="text-5xl text-center pt-7 text-green-500">00</p>
              <p className="text-xs text-gray-500 text-center pt-7">hr</p>
            </div>
            <div className="bg-white w-24 h-36 rounded-md ">
              <p className="text-5xl text-center pt-7 text-green-500">00</p>
              <p className="text-xs text-gray-500 text-center pt-7">min</p>
            </div>
            <div className="bg-white w-24 h-36 rounded-md ">
              <p className="text-5xl text-center pt-7 text-green-500">00</p>
              <p className="text-xs text-gray-500 text-center pt-7">sec </p>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <div className="h-12 w-36 border-[2px] border-white bg-transparent flex justify-center items-center text-white hover:bg-white hover:text-black ">
              <p className="font-bold ">SHOP NOW</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div>
          <p className="text-center text-xs text-gray-500">OUR SERVICES</p>
          <p className="text-4xl font-bold">We Offer Services</p>
        </div>
      </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-around py-8 px-10">
          <div className="w-[280px] pt-5">
            <p className="text-xl text-gray-500">Business Consulting</p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at. 
            </p>
            <p className="text-orange-600 hover:text-orange-400">Learn More</p>
          </div>
          <div className="w-[280px] pt-5">
            <p className="text-xl text-gray-500">Market Analysis</p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <p className="text-orange-600 hover:text-orange-400">Learn More</p>
          </div>
          <div className="w-[280px] pt-5">
            <p className="text-xl text-gray-500">User Monitoring</p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <p className="text-orange-600 hover:text-orange-400">Learn More</p>
          </div>
          <div className="w-[280px] pt-5">
            <p className="text-xl text-gray-500">Seller Consulting</p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at. 
            </p>
            <p className="text-orange-600 hover:text-orange-400">Learn More</p>
          </div>
          <div className="w-[280px] pt-5">
            <p className="text-xl text-gray-500">Financial Investment</p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <p className="text-orange-600 hover:text-orange-400">Learn More</p>
          </div>
          <div className="w-[280px] pt-5">
            <p className="text-xl text-gray-500">Financial Management</p>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <p className="text-orange-600 hover:text-orange-400">Learn More</p>
          </div>

        </div>
    </div>
  );
}

export default Special;
