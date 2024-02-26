import React from 'react'
import Image from 'next/image'
import UnBorderedButton from './common/UnBorderedButton'
import certificate from '../../public/images/certificate.jpg'
import quote from '../../public/images/quote.svg'
import author from '../../public/images/author.jpg'

const AboutAuthor = () => {
  return (
    <section className="aboutAuthor my-[75px]">
      <div className='container'>
        <h3 className='mb-[26px] alexandra text-[70px] leading-[50px] lg:text-[100px] lg:leading-[150%] text-secondaryDark text-center'>Об авторе</h3>
        <div className='relative flex flex-wrap justify-between px-4 md:px-8'>
          <div className='flex flex-col lg:items-start items-center gap-[16px] max-w-full xl:max-w-[49%] w-full text-dark  xl:mb-0 mb-12'>
            <p className=''>Хамзаева Нигора является спикером и организатором первых курсов для будущих мам в Узбекистане. Счастливая жена и мама одного сыночка.
              В 2022 году отучилась в Cradle Coach Academy (США). После успешной сдачи экзамена получила сертификат и является  специалистом по уходу за новорождёнными.</p>

            <blockquote className='italic'>
              <Image className="inline" width={16} alt="quote" src={quote} />
              &nbsp;На данный момент я являюсь спикером курса для будущих мам .
              После родов как и множество девушек, я столкнулась с различными вопросами, которые касались как меня, так и моего ребёнка. </blockquote>
            <blockquote className='italic'>Пройдя этот путь и отучившись на специалиста по уходу за новорождённым во Флориде, я поняла, что нужно открывать курс для будущих мам, где создана специальная программа, которая облегчит жизнь новоиспеченной мамы. &nbsp;
              <Image className='inline' width={16} alt="quote" src={quote} /></blockquote>
            <blockquote className='mb-8 italic font-semibold'>Я хочу пригласить вас в мир счастливого материнства вместе со мной! Чтобы стать частью нашего клуба пишите в директ. </blockquote>

            <UnBorderedButton className='mx-auto mt-8 xl:mr-auto'>Присоединиться</UnBorderedButton>
          </div>

          <div className='max-w-full xl:max-w-[49%] gap-4 w-full flex justify-around xl:justify-start '>
            <Image className="relative z-10 xl:self-end shadow-picShadow  max-w-[340px] max-h-[340px]  w-full h-auto " src={certificate} alt='certificate' width={340} height={320} />
            <Image className="relative z-0 xl:left-[-100px] hidden md:inline-block shadow-picShadow max-w-[340px] w-full max-h-[320px] h-auto" src={author} alt='author' width={340} height={320} />
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutAuthor