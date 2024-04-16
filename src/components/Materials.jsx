'use client';
import React from 'react'
import pregnancyBag from '../../public/images/pregnancy-bag.jpg'
import Vakcina from '../../public/images/vaksina.jpg'
import MaterialCard from './MaterialCard';
import doroga from '../../public/images/doroga.png'
const materials = [
    {
        id: 1,
        title: 'Сумка в роддом',
        image: pregnancyBag,
        fileName: 'roddom-sumka.png',
        link: 'material1.PNG'
    },
    {
        id: 2,
        title: 'Прививки',
        image: Vakcina,
        fileName: 'privivki.PNG',
        link: 'vakcina1.png',
    },
    {
        id: 3,
        title: 'Что брать в дорогу с детьми?',
        image: doroga,
        fileName: 'doroga.pdf',
        link: 'combine.pdf'
    },
];
const Materials = () => {
    return (
        <section className='materials md:mt-[200px] mt-[100px] md:mb-[90px] pb-[121px]' id='материалы'>
            <div className="container">
                <div className="py-[62px] md:py-[75px] px-8 md:px-[60px] bg-white inner-container border-[3px] border-solid rounded-[30px] border-[#F1DBDA]">
                    <h3 className='mb-[26px] alexandra text-[70px] leading-[50px] lg:text-[100px] lg:leading-[100%] text-secondaryDark text-center'>Бесплатные материалы</h3>

                    <div className="flex flex-wrap items-end justify-center gap-4 md:justify-around roboto cards-wrapper ">
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