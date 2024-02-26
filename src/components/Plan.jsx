import React from 'react'
import Image from 'next/image'
import { Bird, Line } from '@/app/svg'
import PregnancyWomen from '../../public/images/pregnancy-women.png'


const plan = [
    {
        id: 1,
        text: 'Шаг к материнству'
    },
    {
        id: 2,
        text: 'Уход за новорожденным.'
    },
    {
        id: 3,
        text: 'Грудное вскармливание'
    },
    {
        id: 4,
        text: 'Искусственное вскармливание'
    },
    {
        id: 5,
        text: 'Сон ребенка'
    },
    {
        id: 6,
        text: 'Первый прикорм'
    },
    {
        id: 7,
        text: 'Внезапная младенческая смерть'
    },


]

const list = [
    {
        id: 1,
        text: 'Урок 1',
        name: [
            {
                title: "Внешний вид новорожденных и их особенности"
            },
            {
                title: "Иследования, проводимые с ним в роддоме",
            },
            {
                title: "Первые прививки",
            },
            {
                title: "Рефлексы",
            },
            {
                title: "Пеленание"
            }

        ]

    },
    {
        id: 2,
        text: 'Урок 2',
        name: [
            {
                title: "Первое купание",
            },
            {
                title: "Гигиена мальчиков и девочек",
            },
            {
                title: "Уход за ногтями, ушками и носом",
            },
            {
                title: "Полезные покупки",
            },

        ]
    },
    {
        id: 3,
        text: 'Урок 3',
        name: [
            {
                title: "Как вырабатывается молоко",
            },
            {
                title: "Как наладить грудное вскармливание",
            },
            {
                title: "Сцеживание",
            },
            {
                title: "'Диеты' при гв",
            },
            {
                title: "Полезные покупки",
            }
        ]

    },
    {
        id: 4,
        text: 'Урок 4',
        name: [
            {
                title: "Виды смесь",
            },
            {
                title: "Как подобрать подходящую смес",
            },
            {
                title: "Способ хранения",
            },
            {
                title: "Смешанное вскармливание",
            },
            {
                title: "Полезные покупки",
            }

        ]

    },
    {
        id: 5,
        text: 'Урок 5',
        name: [
            {
                title: "Режим сна",
            },
            {
                title: "Мелатoнин",
            },
            {
                title: "Почему ребенок не спит?",
            },
            {
                title: "Как наладить сон ",
            }
        ]

    },
    {
        id: 6,
        text: 'Урок 6',
        name: [
            {
                title: "Когда начать первые прикорм",
            },
            {
                title: "Метод BLW",
            },
            {
                title: "Безопасная подача",
            },
            {
                title: "Что делать если ребенок подавился? ",
            },
            {
                title: "Полезные покупки ",
            }

        ]

    },
    {
        id: 7,
        text: 'Урок 7',
        name: [
            {
                title: "Внезапная младенческая смерть",
            },
            {
                title: "Синдром встряхнутого ребенка",
            },
            {
                title: "Как избежать этого",
            }
        ]
    },
    {
        id: 8,
        text: 'Урок 8',
        name: [
            {
                title: "Прорезывание зубов",
            },
            {
                title: " Массаж",
            },
            {
                title: "Дисплазия",
            }

        ]

    },

]
const Plan = () => {
    return (
        <div>
            <div className="container">
                <div className='pl-[32px] pr-[42px] pt-[62px] lg:pt-[76px]  pb-[46px] lg:pr-[85px] lg:pl-[60px] border-[3px] border-solid border-[#F1DBDA] rounded-[30px]'>
                    <h3 className='text-secondaryDark alexandra text-[70px] lg:text-[100px] not-italic font-normal leading-[50px] lg:leading-[150px] text-center mb-[20px]'>
                        Подробнее о курсе
                    </h3>
                    <div className='grid justify-center gap-8 lg:grid-cols-2'>
                        <div className='max-w-[586px] w-full'>
                            <ul><p className='text-base not-italic font-bold leading-6 text-dark roboto py-[18px]'>Курс для будущих мам, в которых есть:</p>
                                {plan.map(item => (
                                    <li key={item.id} className='text-base not-italic font-light leading-6 text-dark roboto py-[5px]'><div className='w-[20px] inline-block align-middle mr-[18px]'><Line /></div>{item.text}</li>


                                ))}</ul>
                            <p className='text-base not-italic font-bold leading-6 text-dark roboto pt-[14px] pb-[33px]'>И многое другое... Оформите предзаказ по самым низким ценам</p>

                        </div>
                        <div className='relative min-h-[400px] h-full'>
                            <Image src={PregnancyWomen} width={300} height={300} className='absolute top-0 left-[30%]' />
                        </div>
                    </div>

                    <h3 className='text-secondaryDark alexandra text-[70px] lg:text-[100px] not-italic font-normal leading-[50px] lg:leading-[150px] text-center lg:pt-[82px] pt-0 lg:pb-[20px] pb-[50px]'>Программа курса</h3>
                    <div className='relative block lg:items-center lg:justify-between lg:flex'>

                        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
                            {list.map((data, index) => (
                                <div key={index}>
                                    <ul>
                                        <li key={data.id} className='pb-3 text-lg font-bold leading-7 roboto text-dark'>{data.text}</li>
                                        {data.name.map((item, index) => (
                                            <li key={index} className='flex py-[5px] text-base not-italic font-light leading-6 text-dark roboto'><div className='w-[17px] h-[15px] mr-3'><Bird /></div>{item.title}</li>

                                        ))}
                                    </ul>

                                </div>
                            ))}

                        </div>
                        <div>
                            <Image src="/images/photo_2024-02-21_16-53-32.jpg" width={500} height={500} />
                        </div>
                        <Image src="/images/wepik-export-20240129160033amND.jpeg" width={188} height={200} className='lg:flex  absolute top-[-203px] left-[-170px] hidden' />
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Plan