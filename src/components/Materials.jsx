'use client';
import React from 'react'
import calendar from '../../public/images/calendar.png'
import tracker from '../../public/images/tracker.png'
import daily from '../../public/images/daily.png'
import MaterialCard from './MaterialCard';
// import material1 from '../../public/download/material1.PNG'
const materials = [
    {
        id: 1,
        title: 'Сумка в роддом',
        image: calendar,
        fileName: 'roddom-sumka.png',
        link: '/download/material1.PNG'
    },
    {
        id: 2,
        title: 'Сумка в роддом',
        image: tracker,
        fileName: 'roddom-sumka.png',
        link: '/download/material1.PNG'
    },
    {
        id: 3,
        title: 'Сумка в роддом',
        image: daily,
        fileName: 'roddom-sumka.png',
        link: '/download/material1.PNG'
    },
];

const Materials = () => {

    return (
        <section className='md:mt-[200px] mt-[100px] md:mb-[90px] mb-[121px]'>
            <div className="container">
                <div className="pt-[62px] md:pt-[75px] px-8 md:px-[60px] bg-white inner-container border-[3px] border-solid rounded-[30px] border-[#F1DBDA]">
                    <h3 className='mb-[26px] alexandra text-[70px] leading-[50px] lg:text-[100px] lg:leading-[100%] text-secondaryDark text-center'>Бесплатные материалы</h3>

                    <div className="flex flex-wrap items-end  justify-center md:justify-between roboto cards-wrapper mb-[60px] lg:mb-[98px]">
                        {
                            materials.map((item) => (
                                <MaterialCard item={item} key={item.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Materials