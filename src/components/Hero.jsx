import React from 'react'
import Image from 'next/image'
import BorderedButton from './common/BorderedButton'
import UnBorderedButton from './common/UnBorderedButton'
import HeroImageFirst from '../../public/images/hero-image1.png'
import HeroImageSecond from '../../public/images/hero-image2.png'

const Hero = () => {
  return (
<>
      <section className='bg-hero-dark-pattern bg-no-repeat bg-contain lg:pt-[127px] pt-16 bg-right'>
        <div className='container'>
          <div className='flex items-center md:flex-row flex-col'>
            <div className='md:pt-[118px] pt-[80px] md:text-left text-center'>
              <h1>
                {/* <span className='block font-regular mb-4 text-lg'>Mom&#x2019;s</span> */}
                <span className='alexandra text-2xl md:leading-[100px] leading-[70px] md:my-4 my-5 inline-block'>Moms Club</span>
              </h1>
              <p className=' text-[24px] !leading-[32px] max-w-[590px] w-full'>Первый курс по уходу за новорождёнными для будущих мам в Узбекистане</p>
              <div className='mt-11 flex md:flex-row flex-col md:items-start items-center gap-5'>
                <UnBorderedButton>Записаться</UnBorderedButton>
                <BorderedButton customLink={'https://www.instagram.com/momsclubuz/'} blank="blank">Прочитать подробнее</BorderedButton>
              </div>
            </div>
            <div className='flex items-center relative'>
             <Image
             className='lg:w-[400px] w-[286px]'
                src={HeroImageFirst} 
                width={400}
                height={400}
                alt="Picture of the author"
                />
               <div className='absolute lg:bottom-[-26%] md:bottom-[-14%] lg:right-[-45%] md:right-[-5%] bottom-[-60px] right-[-22px]'>
                <Image
                  className='lg:w-[400px] w-[200px]'
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