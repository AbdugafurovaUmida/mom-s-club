import React from 'react'
import Instagram from '../../../public/images/instagram-icon.svg'
import Telegram from '../../../public/images/telegram-icon.svg'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-[#504F4F] font-light py-[88px] text-white leading-6' >
      <div className="container px-8">
        <div className='flex flex-col justify-between md:items-end md:flex-row'>
          <ul className='flex flex-col gap-3'>
            <li className='mb-2'>Елизавета Евгеньевна Шац</li>
            <li className='mb-2'>
              <a href="tel:++7 999 999 99 99">+7 999 999 99 99</a>
            </li>
            <li className="flex gap-4 mb-2 socials">
              <a href='#'><Image src={Instagram} alt="instagram logo" /></a>
              <a href="#"><Image src={Telegram} alt="tetegram logo" /></a>
            </li>
            <li className='mb-2'>
              <a className='underline' href="http://">Связаться</a>
            </li>
          </ul>

          <div className='flex order-3 mt-6 md:order-none opacity-60'> Разработка сайта GUD team </div>

          <div className='flex flex-col gap-3 underline md:items-end'>
            <button className="inline-flex mb-2" type="button">Наверх</button>
            <a className="inline-flex mb-2" href="http://">Политика конфиденциальности</a>
            <a className="inline-flex mb-2" href="http://">Договор-оферта</a>
            <a className="inline-flex mb-2" href="http://">Условия доставки</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer