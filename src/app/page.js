import Hero from '@/components/Hero'
import Materials from '@/components/Materials'
import AboutAuthor from '@/components/AboutAuthor'
import Plan from '@/components/Plan'
import Products from '@/components/Products'
import React from 'react'

const HomePage = () => {
  return (
    <main className='h-full min-h-screen'>
      <Hero />
      <div className='course-author__wrapper'>
         <AboutAuthor/>
         <Plan/>
      </div>
      <Products />
      <Materials />
    </main>
  )
}

export default HomePage
