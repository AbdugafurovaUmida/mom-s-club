import React from 'react'
import Image from 'next/image'
import BorderedButton from './common/BorderedButton'
const MaterialCard = ({item}) => {
  return (
    <div className='flex flex-col justify-between w-[259px] max-h-[371px] items-center mb-8'>
    <h5 className='mb-6 font-semibold text-dark'>
        {item.title}
    </h5>
    <Image className='rotate-90 shadow-box-sh5' src={item.image} alt={item.image} width={183} height={257} />
    <BorderedButton
        fileName={item.fileName}
        customLink={item.link}
        className='font-semibold'
    >Скачать</BorderedButton>
</div>
  )
}

export default MaterialCard