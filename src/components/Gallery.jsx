"use client";
import React, { useState } from 'react'
// import Video from 'next-video';
import Image from 'next/image'
import Image1 from '../../public/gallery/org1.jpg'
import Image2 from '../../public/gallery/org2.jpg'
import Review1 from '../../public/images/testimonials/review1.jpg'
import Review2 from '../../public/images/testimonials/review2.jpg'
import Review3 from '../../public/images/testimonials/review3.jpg'
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
                // url: require('../../public/videos/brilliant-video.mp4')
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
                url: Review3,
            },
            {
                id: 3,
                url: Review2,
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
        <section className='mt-[150px]'>
            <div className="container">
                <div className="grid grid-cols-12 items-center">
                    <ul className=' col-span-3'>
                        {gallery.map((tab, index) => (
                            <li
                                key={index}
                                className={`py-[10px] font-bold text-xl lg:rounded-t-[10px] tracking-[0.2px] min-h-[50px] text-[#333]  cursor-pointer !leading-[57px] hover:text-white duration-300 transition-all`}
                                onClick={() => handleTabClick(index)}>
                                <UnBorderedButton customClass={activeTab === index ? ' bg-white !text-secondary !border-secondary border-[3px] border-solid' : ''}>{tab.tabName}</UnBorderedButton>
                            </li>
                        ))}
                    </ul>
                    <div className=' col-span-7'>
                        <div className="grid grid-cols-3 gap-36 items-center">
                            {
                                activeTab == 0 ? gallery[activeTab].images?.map((item, index) => (
                                    <div key={item.id} className="rounded-[30px] border-[10px] border-solid border-[#F1DBDA] overflow-hidden bg-[#fbf3f0]">
                                        <Image className='object-cover object-center w-full ' src={item.url} height={200} />
                                    </div>
                                ))
                                    : activeTab == 1 ? 'Bu yerda videolar boladi'
                                        // gallery[activeTab].videos?.map((item, index) => (
                                        //     <div key={item.id} className="rounded-[30px] border-[10px] border-solid border-[#F1DBDA] overflow-hidden bg-white">
                                        //         <video src={item.url} />
                                        //     </div>
                                        // ))
                                        : gallery[activeTab].reviews?.map((item, index) => (
                                            <div key={item.id} className="rounded-[30px] border-[10px] border-solid border-[#F1DBDA] overflow-hidden bg-[#fbf3f0] w-[240px] h-[300px] flex items-center justify-center">
                                                <Image className='object-cover object-center' src={item.url} />
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