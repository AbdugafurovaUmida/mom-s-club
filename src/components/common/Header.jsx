"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import HamburgerMenu from '../../../public/images/burger_menu.svg'


const navMenu = [
  {
    id: 1,
    link: 'о-курсе',
    text: 'О курсе'
  },
  {
    id: 2,
    link: 'галерея',
    text: 'Галерея'
  },
  {
    id: 3,
    link: 'материалы',
    text: 'Бесплатные материалы'
  },
  {
    id: 4,
    link: 'об-авторе',
    text: 'Об авторе'
  }
]

const Header = () => {

  const [isOpen, setOpen] = useState(false)
  const [matches, setMatches] = useState(false);
  

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMatches = e => setMatches(e.matches);

    if (mediaQuery.matches) {
      setMatches(true);
    }

    if (typeof window !== 'undefined' && window.matchMedia) {
      mediaQuery.addEventListener('change', handleMatches);
    }

    return () => {
      if (typeof window !== 'undefined' && window.matchMedia) {
        mediaQuery.removeEventListener('change', handleMatches);
      }
    };
  }, []);
  

  return (
    <header className='md:pt-[127px] pt-16 absolute top-0 left-0 w-full bg-transparent z-30'>
      <div className="container">
        <nav className="nav">
          <button className='md:hidden flex ml-auto pr-[20px] z-50 relative' onClick={handleClick}><Image className='text-right' src={HamburgerMenu} alt={HamburgerMenu} width={60} height={25} /></button>
          <ul className={`md:flex gap-6 transition-all !duration-1000 md:translate-y-0 ${isOpen ? 'flex flex-col items-center bg-[#FBF3F0] fixed top-0 left-0 w-full h-full pt-[125px] z-10 translate-y-0 ' : 'hidden flex-row translate-y-[-600px] h-0'}`}>
            {
              matches ? navMenu.map(item => (
                <li className='  ' key={item.id}>
                  <Link className='md:text-base text-sm opacity-100 hover:opacity-70 transition-all' href={'#' + item.link}>{item.text}</Link>
                </li>
              ))
                : navMenu.map(item => (
                  <li className='' key={item.id} onClick={handleClick}>
                    <Link className='md:text-base text-sm opacity-100 hover:opacity-70 transition-all' href={'#' + item.link}>{item.text}</Link>
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