import Hero from '@/components/Hero'
import Materials from '@/components/Materials'
import AboutAuthor from '@/components/AboutAuthor'
import Plan from '@/components/Plan'
import Products from '@/components/Products'
import React from 'react'
import Sponsors from '@/components/Sponsors'
import Gallery from '@/components/Gallery'
import Head from 'next/head'


const HomePage = () => {
  return (
    <>
    <Head>
      <title> Mom's club</title>
      <meta name= "description" content="Mom's club - Первый курс по уходу за новорождёнными для мам в Узбекистане"/>
      <meta property='og:title' content='Mom`s club'/>
      <meta property='og:description' content='Первый курс по уходу за новорождёнными для мам в Узбекистане'/>
      <meta property='og:type' content='website'/>
      <meta property='og:image' content='/images/logo.png'/>
      <meta name="robots" content="index, follow"/>
      </Head>
    <main className='h-full min-h-screen'>
      <Hero />
      <div className='course-author__wrapper'>
         <AboutAuthor/>
         <Plan/>
      </div>
      <Gallery />
      <Products />
      <Sponsors />
      <Materials />
     
    </main>
    
    </>
  )
}

export default HomePage
