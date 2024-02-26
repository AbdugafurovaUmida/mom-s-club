import Hero from '@/components/Hero'
import Materials from '@/components/Materials'
import AboutAuthor from '@/components/AboutAuthor'
import Plan from '@/components/Plan'
import Products from '@/components/Products'
import React from 'react'
import Modal from '../components/modal/Modal'

const HomePage = () => {
  return (
    <main className='h-full min-h-screen'>
      <Hero />
      <AboutAuthor/>
      <Plan/>
      <Products />
      <Materials />
      <Modal/>
    </main>
  )
}

export default HomePage
