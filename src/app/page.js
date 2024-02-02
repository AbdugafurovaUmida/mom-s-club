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
      <Materials />
      <Quote/>
      <Plan/>
      <Products />
    </main>
  )
}

export default HomePage
