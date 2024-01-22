import React from 'react'
import Container from './Container'
import productOfTheYear from "@/assets/productOfTheYear.webp"
import Image from 'next/image'
import Link from 'next/link'

const YearProduct = () => {
  return (
    <section className='w-full bg-[#f3f3f3] py-4 hidden md:block'>
      <Container className='md:bg-transparent relative py-0 mb-10'>
        <Image
          src={productOfTheYear}
          alt="Product of the year"
          className='w-full h-full object-cover hidden md:inline-block'
        />
        <div className='w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start justify-center gap-6'>
          <h2 className='text-3xl font-semibold text-primeColor'>Product of the year</h2>
          <p className='text-base font-normal text-primeColor max-w-[600px] mr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas dolores tempora beatae sed aut nam amet tenetur assumenda officiis?</p>
          <Link href={'/'} className='bg-primeColor text-white text-lg w-[185px] h-[50px] hover:bg-black duration-300 font-bold rounded-md flex items-center justify-center'>Shop now</Link>
        </div>
      </Container>
    </section>
  )
}

export default YearProduct