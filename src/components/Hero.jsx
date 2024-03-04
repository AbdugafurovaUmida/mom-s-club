'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import BorderedButton from './common/BorderedButton'
import UnBorderedButton from './common/UnBorderedButton'
import HeroImageFirst from '../../public/images/hero2.png'
import HeroImageSecond from '../../public/images/hero1.png'
import Modal from "../components/modal/Modal"

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const renderBackdrop = showModal ? ' fixed top-0 bottom-0 left-0 right-0 bg-[#d2c3c5] w-full h-full z-10' : "";
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
<>

      <section className='hero pb-[150px] lg:pt-[127px] pt-16 bg-right'>
        <div className='container'>
          <div className='flex flex-col items-center md:flex-row'>
            <div className='md:pt-[118px] pt-[80px] md:text-left text-center'>
              <h1>
                <span className='alexandra text-2xl md:leading-[100px] leading-[70px] md:my-4 my-5 inline-block'>Moms Club</span>
              </h1>
              <p className=' text-[24px] !leading-[32px] max-w-[590px] w-full'>Первый курс по уходу за новорождёнными для будущих мам в Узбекистане</p>
              <div className='flex flex-col items-center gap-5 mt-11 md:flex-row md:items-start'>
                <button className='min-w-[250px] inline-block' onClick={toggleModal}><UnBorderedButton>Записаться</UnBorderedButton></button>
                {showModal && <Modal toggleModal={toggleModal}  renderBackdrop={renderBackdrop}/>}
                <BorderedButton customLink={'https://www.instagram.com/momsclubuz/'} blank="blank">Прочитать подробнее</BorderedButton>
              </div>
            </div>
            <div className='relative flex items-center'>
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