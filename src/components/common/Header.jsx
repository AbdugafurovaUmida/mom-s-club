"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import HamburgerMenu from '../../../public/images/burger_menu.svg'


const navMenu = [
  {
    id: 1,
    link: '#about',
    text: 'О курсе'
  },
  {
    id: 2,
    link: '#purchase',
    text: 'Галерея'
  },
  {
    id: 3,
    link: '#free',
    text: 'Бесплатные материалы'
  },
  {
    id: 4,
    link: '#author',
    text: 'Об авторе'
  }
]

const Header = () => {

  const [isOpen, setOpen] = useState(false)


  return (
    <header className='md:pt-[127px] pt-16 absolute top-0 left-0 w-full bg-transparent'>
      <div className="container">
        <nav className="nav">
          <button className='md:hidden flex ml-auto pr-[20px] z-50 relative' onClick={() => setOpen((prev) => !prev)}><Image className='text-right' src={HamburgerMenu} alt={HamburgerMenu} width={60} height={25} /></button>
          <ul className={`md:flex gap-6 transition-all !duration-1000 md:translate-y-0 ${isOpen ? 'flex flex-col items-center bg-[#DDD5F0] fixed top-0 left-0 w-full h-full pt-[125px] z-10 translate-y-0 ' : 'hidden flex-row translate-y-[-600px] h-0'}`}>
            {
              navMenu.map(item => (
                <li key={item.id} onClick={() => setOpen((prev) => !prev)}>
                  <a className='md:text-base text-sm' href={item.link}>{item.text}</a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header