import Image from 'next/image'
import React from 'react'

function Blog() {
  return (
    <div className='pb-20'>
     <div className='w-[200px] mx-auto py-10'>
      <p className='text-xs text-gray-500 text-center'>BLOG</p>
      <p className='text-3xl font-bold text-center'>Blog Posts</p>
     </div>
      {/* cart1 */}
     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around '>
     <div className='w-[400px]'>
      <Image src={require('../../../public/assects/images/firstWoman.jpg')} alt='1' className='w-[350px]'/>
      <p className='text-2xl pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='flex gap-3 pt-3'>
        <p className=''>Ham Brook</p>
        <span className='font-bold'>.</span>
        <p className=''>Jan 18, 2020</p>
        <span className='font-bold'>.</span>
        <p className='text-orange-500'>News</p>
      </div>
      <p className='text-lg text-gray-600 py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
      <p className='text-xl text-orange-600'>Continue Reading...</p>
     </div>
     {/* cart2 */}
     <div className='w-[400px]'>
      <Image src={require('../../../public/assects/images/firstWoman.jpg')} alt='1' className='w-[350px]'/>
      <p className='text-2xl pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='flex gap-3 pt-3'>
        <p className=''>Ham Brook</p>
        <span className='font-bold'>.</span>
        <p className=''>Jan 18, 2019</p>
        <span className='font-bold'>.</span>
        <p className='text-orange-500'>News</p>
      </div>
      <p className='text-lg text-gray-600 py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
      <p className='text-xl text-orange-600'>Continue Reading...</p>
     </div>
     {/* cart3 */}
     <div className='w-[400px]'>
      <Image src={require('../../../public/assects/images/firstWoman.jpg')} alt='1' className='w-[350px]'/>
      <p className='text-2xl pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className='flex gap-3 pt-3'>
        <p className=''>Ham Brook</p>
        <span className='font-bold'>.</span>
        <p className=''>Jan 18, 2019</p>
        <span className='font-bold'>.</span>
        <p className='text-orange-500'>News</p>
      </div>
      <p className='text-lg text-gray-600 py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
      <p className='text-xl text-orange-600'>Continue Reading...</p>
     </div>
     </div>
    </div>
  )
}

export default Blog;
