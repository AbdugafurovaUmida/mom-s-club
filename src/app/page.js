import Hero from '@/components/Hero'
import Quote from '@/components/Quote'
import Plan from '@/components/Plan'
import React from 'react'

const HomePage = () => {
  return (
    <main className='h-full min-h-screen'>
      <Hero />
      <Quote/>
      <Plan/>
    </main>
  )
}

export default HomePage
