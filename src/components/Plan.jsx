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
            title:"Внешний вид новорожденных и их особенности",
            title:"Иследования проводимые с ним в роддоме",
            title:"Первые прививки", 
            title:"Рефлексы", 
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
            title:"Гигиена мальчиков и девочек",
            title:"Уход за ногтями, ушками иносом",
            title:"Полезные покупки",      
        }
      ]
    },
    {
      id: 3,
      text: 'Урок 3',
      name:[
        {
            title:"Как вырабатывается молоко",
            title:"Как наладить грудное вскармливание",
            title:"Сцеживание",   
            title:"'Диеты' при гв",
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
                title:"Как подобрать подходящую смес",
                title:"Способ хранения",   
                title:"Смешанное вскармливание",
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
                title:"Мелатанин",
                title:"Почему ребенок не спит?",   
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
                title:"Метод BLW",
                title:"Безопасная подача",   
                title:"Что делать если ребенок подавился? ",
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
                title:"Синдром встряхнутого ребенка",
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
                title:" Массаж",
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
                <h3 className='text-secondaryDark alexandra text-[100px] not-italic font-normal leading-[150px] text-center'>
                Подробнее о курсе
                </h3>
                <div className='lg:relative relative flex justify-center lg:flex items-center lg:justify-between pb-[82px]'>
                    <div className='w-[586px]'>
                        <p className='text-base not-italic font-bold leading-6 text-dark roboto py-[18px]'>Курс для будущих мам, в которых есть:</p>
                        {plan.map(item =>(
                          <p className='text-base not-italic font-light leading-6 text-dark roboto py-[5px]'><span className='inline-block align-middle mr-[18px]'><Line/></span>{item.text}</p>  
                        ))}
                        <p className='text-base not-italic font-bold leading-6 text-dark roboto pt-[14px] pb-[33px]'>И многое другое... Оформите предзаказ по самым низким ценам</p>
                        
                        <UnBorderedButton>Оформить</UnBorderedButton>
                    </div>
                    <div className=''>
                        <Image src="/images/hero-image1.png" width={300} height={300} className='lg:absolute lg:top-[-13px] lg:left-[572px] lg:right-0 lg:bottom-0 absolute right-[71px] bottom-[-268px]'/>
                        <Image src="/images/aboutimg.png" width={300} height={300}  className='lg:absolute lg:top-[101px] lg:left-[677px] lg:right-0 lg:bottom-0 absolute right-[-42px] bottom-[-377px]'/>
                    </div>
                </div>
            
                <h3 className='text-secondaryDark alexandra text-[100px] not-italic font-normal leading-[150px] text-center'>Программа курса</h3>
                    <div className='relative flex items-center justify-between'>
                                                              
                    <div className='grid grid-cols-4 gap-8'>
                    {list.map((data, index) =>(
                        <div>
                            <ul key={index} >
                                <li className='text-lg font-bold leading-7 roboto text-dark pb-2.5'>{data.text}</li>
                                {data.name.map(item=>(
                                    <li className='flex py-[5px] text-base not-italic font-light leading-6 text-dark roboto'><Bird/>{item.title}</li>
                                   
                                ))}
                            </ul>
                    
                    </div> 
                    ))}
                   
                    </div>         
                    <div>
                        <Image src="/images/hero-image1.png" width={400} height={400}/>
                    </div>             
                    <Image src="/images/wepik-export-20240129160033amND.jpeg" width={188} height={200} className='lg:absolute hidden   left-[-144px] right-0 bottom-[347px]'/>                               
            </div>
            
            </div>

                
        </div>

    </div>
  )
}

export default Plan