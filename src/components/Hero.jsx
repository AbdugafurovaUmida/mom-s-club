import React from 'react'
import Image from 'next/image'
import BorderedButton from './common/BorderedButton'
import UnBorderedButton from './common/UnBorderedButton'
import HeroImageOne from '../../public/images/hero-image1.png'

const Hero = () => {
  return (
<>
      <section>
        <div className='container'>
          <div className='flex items-center'>
            <div className='pt-[118px] '>
              <h1>
                <span className='block font-regular mb-4 text-lg'>Mom&#x2019;s</span>
                <span className='alexandra text-[100px] leading-[100px] my-4 inline-block'>Club and Course</span>
              </h1>
              <p className=''>Первый курс по уходу за новорождёнными для будущих мам в Узбекистане</p>
              <div className='mt-11 flex gap-5'>
                <UnBorderedButton>Оформить курс</UnBorderedButton>
                <BorderedButton>Прочитать подробнее</BorderedButton>
              </div>
            </div>
            <div className=''>
             <Image
                src={HeroImageOne} 
                width={500}
                height={500}
                alt="Picture of the author"
                />
            </div>
          </div>
        </div>
      </section>
</>
  )
}

export default Hero