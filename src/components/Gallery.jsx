"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Image1 from '../../public/gallery/org1.png'
import Image2 from '../../public/gallery/org2.jpg'
import Review1 from '../../public/images/testimonials/review11.png'
import Review2 from '../../public/images/testimonials/review12.png'
import Review3 from '../../public/images/testimonials/review13.png'
import Review4 from '../../public/images/testimonials/review14.png'
import Review5 from '../../public/images/testimonials/review15.png'
import Review6 from '../../public/images/testimonials/review16.png'
import UnBorderedButton from './common/UnBorderedButton';



const gallery = [
    {
        id: 1,
        tabName: 'Фото',
        images: [
            {
                id: 1,
                url: Image1
            },
            {
                id: 2,
                url: Image2
            }
        ]
    },
    {
        id: 2,
        tabName: 'Видео',
        videos: [
            {
                id: 1,
                url: require('../../public/videos/Video1.mp4')
            },
            {
                id: 2,
                url: require('../../public/videos/Video2.mp4')
            },
            {
                id: 3,
                url: require('../../public/videos/Video3.mp4')
            },
            {
                id: 4,
                url: require('../../public/videos/Video4.mp4')
            },
            {
                id: 5,
                url: require('../../public/videos/Video5.mp4')
            },
        ]
    },
    {
        id: 2,
        tabName: 'Отзывы',
        reviews: [
            {
                id: 1,
                url: Review1,
            },
            {
                id: 2,
                url: Review2,
            },
            {
                id: 3,
                url: Review3,
            },
            {
                id: 4,
                url: Review4,
            },
            {
                id: 5,
                url: Review5,
            },
            {
                id: 6,
                url: Review6,
            },
        ]
    }
]

const Gallery = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [transitioning, setTransitioning] = useState(false);


    const handleTabClick = (index) => {
        if (index !== activeTab) {
            setTransitioning(true);
            setTimeout(() => {
                setActiveTab(index);
                setTransitioning(false);
            }, 300);
        }
    };

    return (
        <section className='gallery mt-[150px]' id='галерея'>
            <div className="container">
                <h3 className='mb-[35px] alexandra text-[70px] leading-[50px] lg:text-[100px] lg:leading-[100%] text-secondaryDark text-center'>Галерея  </h3>
                <div className="grid grid-cols-12 gap-10 items-top md:gap-0">
                    <ul className='flex justify-center col-span-12 gap-5 md:col-span-3 md:inline-block '>
                        {gallery.map((tab, index) => (
                            <li
                                key={index}
                                className={`py-[8px] font-bold text-xl lg:rounded-t-[10px] tracking-[0.2px] min-h-[20px] text-[#333]  cursor-pointer !leading-[35px] hover:text-white duration-300 transition-all w-full`}
                                onClick={() => handleTabClick(index)}>
                                <UnBorderedButton customClass={activeTab === index ? ' max-w-[230px] bg-white !text-secondary !border-secondary border-[3px] border-solid' : ' max-w-[230px]'}>{tab.tabName}</UnBorderedButton>
                            </li>
                        ))}
                    </ul>
                    <div className='col-span-12 md:col-span-9'>
                        <div className="grid items-center justify-center grid-cols-1 gap-6 md:grid-cols-3 md:justify-start">
                            {
                                activeTab == 0 ? gallery[activeTab].images?.map((item, index) => (
                                    <div key={item.id} className="rounded-[30px] border-[10px] border-solid border-[#F1DBDA] overflow-hidden bg-[#fbf3f0] max-w-[350px] w-full max-h-[650px] h-full mx-auto">
                                        <Image className='object-cover object-center h-full' src={item.url}/>
                                    </div>
                                ))
                                    : activeTab == 1 ? 
                                        
                                        gallery[activeTab].videos?.map((item, index) => (
                                            <div key={item.id} className="rounded-[30px] border-[10px] border-solid border-[#F1DBDA] bg-[#F1DBDA] overflow-hidden  w-[250px] h-[350px] mx-auto">
                                                <video controls style={{ width: '100%', height: '100%' }} src={item.url} />
                                            </div>
                                        ))

                                        : gallery[activeTab].reviews?.map((item, index) => (
                                          
                                            <div key={item.id} className="rounded-tl-[20px] rounded-tr-[20px]  max-h-[300px] rounded-br-[20px] rounded-bl-0 border-2 border-solid border-[#F1DBDA] overflow-hidden bg-[#fbf3f0]  flex items-center justify-center">
                                                <Image className='object-cover object-center w-fit  max-h-[300px] h-full' src={item.url} />
                                               
                                            </div>
                                        ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery