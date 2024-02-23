"use client";

import React from 'react'
import Instagram from '../../../public/images/instagram-icon.svg'
import Telegram from '../../../public/images/telegram-icon.svg'
import Image from 'next/image';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='relative bg-[#504F4F] font-light py-[44px] text-white leading-6' >
      <div className="container px-8">
        <div className='flex flex-col justify-between md:items-end md:flex-row'>
          <ul className='flex flex-col gap-3'>
            <li className="flex gap-6 mb-2 socials">
              <a className="transition duration-200 hover:-translate-y-3" href='https://www.instagram.com/momsclubuz/' target="_blank"><Image src={Instagram} alt="instagram logo" /></a>
              <a className="transition duration-200 hover:-translate-y-3" href="https://t.me/momsclubuz" target="_blank"><Image src={Telegram} alt="tetegram logo" /></a>
            </li>
            <li className='mb-2'>
              <a className='underline hover:opacity-60' target="_blank" href="https://t.me/momsclubuzb">Связаться</a>
            </li>
          </ul>
          <p
            className='flex order-3 mt-6 transition duration-300 group md:order-none opacity-60 '>
            Разработка сайта&nbsp; - &nbsp;
            <a
              target="_blank"
              href='https://www.instagram.com/gud_team_/'
              className='font-bold transition duration-300 font-white hover:opacity-80 hover:underline'> GUD team </a> </p>

          <div className='flex flex-col md:items-end'>
            <button
              onClick={scrollToTop}
              className="absolute lg:static top-[32px] right-[32px] transition duration-300 flex mb-2 w-[56px] h-[56px] rounded-full justify-center items-center border border-pink border-2 bg-[#dfc5c4] hover:bg-transparent hover:translate-y-[7px] shadow-buttonShadow" type="button">
              <svg width={30} className="icon__arrow-up fill-white" viewBox="0 0 24 24">
                <title className='rounded-full'>Back to top</title>
                <path d="M18.71,11.71a1,1,0,0,1-1.42,0L13,7.41V19a1,1,0,0,1-2,0V7.41l-4.29,4.3a1,1,0,0,1-1.42-1.42l6-6a1,1,0,0,1,1.42,0l6,6A1,1,0,0,1,18.71,11.71Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer