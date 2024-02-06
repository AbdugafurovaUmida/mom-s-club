import React from 'react'
import Image from 'next/image'
import BorderedButton from './common/BorderedButton'
import calendar from '../../public/images/calendar.png'
import tracker from '../../public/images/tracker.png'
import daily from '../../public/images/daily.png'
import UnBorderedButton from './common/UnBorderedButton'
import girl from './../../public/images/girl.png'
const Materials = () => {
    return (
        <section className='md:mt-[200px] mt-[100px] md:mb-[90px] mb-[121px]'>
            <div className="container">
                <div className="pt-[62px] md:pt-[75px] px-8 md:px-[60px] bg-white inner-container border-[3px] border-solid rounded-[30px] border-[#F1DBDA]">
                    <h3 className='mb-[26px] alexandra text-[70px] leading-[50px] lg:text-[100px] lg:leading-[100%] text-secondaryDark text-center'>Бесплатные материалы</h3>

                    <div className="flex flex-wrap items-end  justify-center md:justify-between roboto cards-wrapper mb-[60px] lg:mb-[98px]">
                        <div className='flex flex-col justify-between w-[259px] max-h-[371px] items-center mb-8'>
                            <h5 className='mb-6 font-semibold text-dark'>Календарь на 2 месяца</h5>
                            <Image className='rotate-90 shadow-box-sh5' src={calendar} alt="calendar" width={183} height={257} />
                            <BorderedButton className='font-semibold'>Скачать календарь</BorderedButton>
                        </div>
                        <div className='flex flex-col justify-between w-[259px] max-h-[371px] items-center mb-8'>
                            <h5 className='mb-6 font-semibold text-dark'>Дневник прикорма</h5>
                            <Image className='mb-[30px] shadow-box-sh5' src={tracker} alt="daily image" width={165} height={234} />
                            <BorderedButton >Скачать трекер</BorderedButton>
                        </div>
                        <div className='flex flex-col justify-between w-[259px] max-h-[371px] items-center mb-8'>
                            <h5 className='mb-6 font-semibold text-dark'>Трекер привычек на 6 недель</h5>
                            <Image className='rotate-90 shadow-box-sh5' src={daily} alt="tracker" width={183} height={257} />
                            <BorderedButton >Скачать дневник</BorderedButton>
                        </div>
                    </div>

                    <h3 className='mb-[26px] alexandra text-[70px] leading-[50px] lg:text-[100px] lg:leading-[150%] text-secondaryDark text-center'>Об авторе</h3>
                    <div className='relative flex flex-wrap justify-start'>
                        <div className='flex flex-col  gap-[16px] max-w-[570px] w-full text-dark xl:pb-[100px]'>
                            <p className=''>Всю жизнь я жила с установками о материнстве! Слышала страшилки о недосыпаниях, усталости, капризных детях, дне сурка и поняла, что хочу по-другому, хочу быть счастливой с ребёнком!   </p>
                            <p>Начала искать информацию, выстраивать ее, чтобы взглянуть на вещи по-новому! Я открыла для себя прекрасный огромный мир гармоничной жизни с ребёнком с первых месяцев его жизни!</p>
                            <p>Благодаря моим знаниям и планированию, жизнь, на протяжении взросления Саши, интересна и полноценна! Я провожу вечера с мужем, с собой, друзьями, занимаюсь проектами, читаю книги и путешествую </p>
                            <p className='mb-8 font-semibold'>Я хочу пригласить тебя в мир счастливого материнства вместе со мной! </p>

                            <UnBorderedButton className='mt-8'>Присоединиться</UnBorderedButton>
                        </div>

                        <div className='xl:absolute relative bottom-[-23px] xl:right-[-80px]'>
                            <Image src={girl} alt='girl' width={547} height={612} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Materials