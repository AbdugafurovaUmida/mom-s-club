import React from 'react'
import Image from 'next/image'
import BorderedButton from './common/BorderedButton'
const MaterialCard = ({item}) => {
  return (
    <div className='flex flex-col justify-center w-[259px] max-h-[371px] items-center mb-8'>
    <h5 className='mb-6 font-semibold text-dark'>
        {item.title}
    </h5>
    <Image 
    className='mb-8 shadow-box-sh5 w-full rounded-xl min-h-[183px] h-[183px] w-full' 
    src={item.image} 
    alt={item.image} 
    width={257} 
    height={183} 
    />
    <BorderedButton
        fileName={item.fileName}
        customLink={`/assets/${item.link}`}
        className='font-semibold'
        >Скачать
    </BorderedButton>
        {/* customLink={`/assets/${item.link}.PNG`} */}
</div>
  )
}

export default MaterialCard