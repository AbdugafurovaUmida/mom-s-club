import React from 'react'
import Image from 'next/image'
import {Bird, Line} from '@/app/svg'
import UnBorderedButton from './common/UnBorderedButton'


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
    {
        id: 8,
        text: 'Сон ребенка'
    },
    
  ]

  const list  = [
    {
      id: 1,
      text: 'Урок 1',
      name:[
        {
            title:"Внешний вид новорожденных и их особенности"
        },
        {
            title:"Иследования проводимые с ним в роддоме",  
        },
        {
            title:"Первые прививки", 
        },
        {
            title:"Рефлексы", 
        },
        {
            title:"Пеленание" 
        }
         
      ]
      
    },
    {
      id: 2,
      text: 'Урок 2',
      name:[
        {
            title:"Первое купание",
        },
        {
            title:"Гигиена мальчиков и девочек",   
        },
        {
            title:"Уход за ногтями, ушками иносом", 
        },
        {
            title:"Полезные покупки", 
        },
        
      ]
    },
    {
      id: 3,
      text: 'Урок 3',
      name:[
        {
            title:"Как вырабатывается молоко",
        },
        {
           
            title:"Полезные покупки", 
        },
        {
            title:"Как наладить грудное вскармливание", 
        },
        {
            title:"Сцеживание", 
        },
        {
            title:"'Диеты' при гв", 
        },
        {
            title:"Полезные покупки", 
        }
      ]
     
    },
    {
        id: 4,
        text: 'Урок 4',
        name:[
            {
                title:"Виды смесей",
            },
            {
                title:"Как подобрать подходящую смес",
            },
            {
                title:"Способ хранения", 
            },
            {      
                title:"Смешанное вскармливание", 
            },
            {
                title:"Полезные покупки", 
            }
       
          ]
      
    },
    {
        id: 5,
        text: 'Урок 5',
        name:[
            {
                title:"Режим сна",
            },
            {
                title:"Мелатанин",
            },
            {
                title:"Почему ребенок не спит?", 
            },
            {
                title:"Как наладить сон ",
            }
          ]
   
    },
    {
        id: 6,
        text: 'Урок 6',
        name:[
            {
                title:"Когда начать первые прикорм",
            },
            {
                title:"Метод BLW",
            },
            {
                title:"Метод BLW",
            },
            {
                title:"Безопасная подача",    
            },
            {  
                title:"Что делать если ребенок подавился? ",    
            },
            {
                title:"Полезные покупки ", 
            }
            
          ]
   
    },
    {
        id: 7,
        text: 'Урок 7',
        name:[
            {
                title:"Внезапная младенческая смерть",
            },
            {
                title:"Синдром встряхнутого ребенка", 
            },
            {
                title:"Как избежать этого",   
            }
          ]
    },
    {
        id: 8,
        text: 'Урок 8',
        name:[
            {
                title:"Прорезывание зубов",
            },
            {
                title:" Массаж",
            },
            {
                title:"Дисплазия",  
            }
           
          ]
      
    },
    
  ]
const Plan = () => {
  return (
    <div>
        <div className="container">
            <div className='pt-[76px] pr-[85px] pb-[46px] pl-[60px] border-[3px] border-solid border-[#F1DBDA] rounded-[30px]'>
                <h3 className='text-secondaryDark alexandra text-[70px] lg:text-[100px] not-italic font-normal leading-[50px] lg:leading-[150px] text-center mb-[20px]'>
                Подробнее о курсе
                </h3>
                <div className='grid justify-center gap-8 lg:grid-cols-2'>
                    <div className='max-w-[586px] w-full'>
                        <ul><p className='text-base not-italic font-bold leading-6 text-dark roboto py-[18px]'>Курс для будущих мам, в которых есть:</p>
                        {plan.map(item =>(
                          <li className='text-base not-italic font-light leading-6 text-dark roboto py-[5px]'><div className='w-[20px] inline-block align-middle mr-[18px]'><Line/></div>{item.text}</li>  
                        

                        ))}</ul>
                        <p className='text-base not-italic font-bold leading-6 text-dark roboto pt-[14px] pb-[33px]'>И многое другое... Оформите предзаказ по самым низким ценам</p>
                        
                        <UnBorderedButton>Оформить</UnBorderedButton>
                    </div>
                    <div className='relative min-h-[320px] h-full'>
                        <Image src="/images/hero-image1.png" width={300} height={300} className='absolute top-0 left-0'/>
                        <Image src="/images/aboutimg.png" width={300} height={300}  className='absolute lg:top-[26%] lg:left-[73%px] md:top-[30%] md:left-[21%] sm:top-[30%] sm:left-[24%] top-[20%] left-[36%]'/>
                    </div>
                </div>
           
                <h3 className='text-secondaryDark alexandra text-[70px] lg:text-[100px] not-italic font-normal leading-[50px] lg:leading-[150px] text-center pt-[82px] lg:pb-[20px] pb-[50px]'>Программа курса</h3>
                    <div className='relative block lg:items-center lg:justify-between lg:flex'>
                                                              
                    <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                    {list.map((data, index) =>(
                        <div>
                            <ul key={index} >
                                <li className='text-lg font-bold leading-7 roboto text-dark pb-2.5'>{data.text}</li>
                                {data.name.map(item=>(
                                    <li className='flex py-[5px] text-base not-italic font-light leading-6 text-dark roboto'><div className='w-[17px] h-[15px] mr-3'><Bird/></div>{item.title}</li>
                                   
                                ))}
                            </ul>
                    
                    </div> 
                    ))}
                   
                    </div>         
                    <div>
                        <Image src="/images/hero-image1.png" width={500} height={500}/>
                    </div>             
                    <Image src="/images/wepik-export-20240129160033amND.jpeg" width={188} height={200} className='absolute top-[-203px] left-[-170px] '/>                               
            </div>
            
            </div>

                
        </div>

    </div>
  )
}

export default Plan