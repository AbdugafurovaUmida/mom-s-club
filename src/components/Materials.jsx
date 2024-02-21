import React from 'react'
import Image from 'next/image'
import BorderedButton from './common/BorderedButton'
import calendar from '../../public/images/calendar.png'
import tracker from '../../public/images/tracker.png'
import daily from '../../public/images/daily.png'

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
                            <BorderedButton className='font-semibold'>Скачать</BorderedButton>
                        </div>
                        <div className='flex flex-col justify-between w-[259px] max-h-[371px] items-center mb-8'>
                            <h5 className='mb-6 font-semibold text-dark'>Дневник прикорма</h5>
                            <Image className='mb-[30px] shadow-box-sh5' src={tracker} alt="daily image" width={165} height={234} />
                            <BorderedButton >Скачать ...</BorderedButton>
                        </div>
                        <div className='flex flex-col justify-between w-[259px] max-h-[371px] items-center mb-8'>
                            <h5 className='mb-6 font-semibold text-dark'>Трекер привычек на 6 недель</h5>
                            <Image className='rotate-90 shadow-box-sh5' src={daily} alt="tracker" width={183} height={257} />
                            <BorderedButton >Скачать дневник</BorderedButton>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Materials