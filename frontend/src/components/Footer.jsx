import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptates! Sequi et ipsum libero ipsam fugit voluptatem hic quasi eveniet itaque ratione, voluptas inventore harum deserunt, qui omnis, adipisci incidunt?
                </p>
                <img src={assets.logo} className='mb-5 w-36' alt="" />
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+90 212 111 1111</li>
                    <li>contact@super.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-6 text-sm text-center'>Copyright 2024© super.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer