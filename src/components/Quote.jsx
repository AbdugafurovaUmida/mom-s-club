import React from 'react'
import { Point } from '@/app/svg'
import Image from 'next/image'

const Quote = () => {
  return (
    <div className='pt-[75px]'>
        <div className="container">
            <div className='items-center block lg:justify-between lg:flex'>
                <div className='  mx-auto  my-0 max-w-[662px]  px-[69px] py-[61px] border-[3px] border-solid border-[#F1DBDA] rounded-[30px]'>
                   <Point/>
                    <p className=' not-italic  text-dark pl-[14px]'>Тайм-менеджмент для всех и тайм-менеджмент для мам - 2 разные вещи! Я желаю счастья каждой девушке. Любите, цените себя, развивайтесь , мечтайте вместе с ребенком.</p><br/>
                    <p  className=' not-italic    text-dark pl-[14px]'>Благодаря книге-планеру каждая из Вас откроет в себе энергию,  которая дана в материнстве, с помощью лёгкого планирования личного времени и организации дня ребёнка. Узнайте информацию из планера до рождения малыша, чтобы успеть подготовиться заранее! </p>
                </div>
                <div>
                   <Image className='mx-auto mb-0 mt-[-40px] z-[-1] relative'  src="/images/wepik-export-202401281943575vI5.jpeg" width={535} height={542} alt='Picture of the author '/>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Quote