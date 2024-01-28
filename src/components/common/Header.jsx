import React from 'react'


const navMenu = [
  {
    id: 1,
    link: '#about',
    text: 'О планере'
  },
  {
    id: 2,
    link: '#purchase',
    text: 'Купить'
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
  return (
    <header className='pt-[127px]'>
      <div className="container">
        <nav className="nav">
          <ul className='flex gap-6'>
            {
              navMenu.map(item => (
                <li key={item.id}>
                  <a className='text-sm' href={item.link}>{item.text}</a>
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