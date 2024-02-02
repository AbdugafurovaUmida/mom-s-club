import Hero from '@/components/Hero'
import Materials from '@/components/Materials'
import Quote from '@/components/Quote'
import Plan from '@/components/Plan'
import Products from '@/components/Products'
import React from 'react'

const HomePage = () => {
  return (
    <main className='h-full min-h-screen'>
      <Hero />
      <Quote/>
      <Plan/>
      <Products />
      <Materials />
    </main>
  )
}

export default HomePage
