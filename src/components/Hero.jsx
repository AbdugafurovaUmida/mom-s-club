import React from 'react'
import Image from 'next/image'
import BorderedButton from './common/BorderedButton'
import UnBorderedButton from './common/UnBorderedButton'
import HeroImageFirst from '../../public/images/hero-image1.png'
import HeroImageSecond from '../../public/images/hero-image2.png'

const Hero = () => {
  return (
<>
      <section className='bg-hero-dark-pattern bg-no-repeat bg-contain pt-[127px] bg-right'>
        <div className='container'>
          <div className='flex items-center'>
            <div className='pt-[118px] '>
              <h1>
                <span className='block font-regular mb-4 text-lg'>Mom&#x2019;s</span>
                <span className='alexandra text-2xl leading-[100px] my-4 inline-block'>Club and Course</span>
              </h1>
              <p className=''>Первый курс по уходу за новорождёнными для будущих мам в Узбекистане</p>
              <div className='mt-11 flex gap-5'>
                <UnBorderedButton>Оформить курс</UnBorderedButton>
                <BorderedButton>Прочитать подробнее</BorderedButton>
              </div>
            </div>
            <div className='flex items-center relative'>
             <Image
                src={HeroImageFirst} 
                width={400}
                height={400}
                alt="Picture of the author"
                />
               <div className='absolute bottom-[-26%] right-[-45%]'>
                <Image
                  src={HeroImageSecond}
                  width={400}
                  height={400}
                  alt="Picture of the author"
                />
               </div>
            </div>
          </div>
        </div>
      </section>
</>
  )
}

export default Hero