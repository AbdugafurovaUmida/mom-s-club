import Image from 'next/image'
import React from 'react'
import UnBorderedButton from './common/UnBorderedButton'

const ProductsCard = ({item}) => {
  return (
    <div className='rounded-[30px] border-[3px] border-solid border-[#F1DBDA] md:pt-[56px] py-[50px] md:pb-[58px] flex justify-start items-center flex-col gap-10'>
      <h2 className='text-dark !font-semibold text-lg !leading-7'>{item.title}</h2>
      <div className=' rounded-3xl overflow-hidden w-[250px] h-[250px]'><Image src={item.image} alt={item.title} width={250} height={250} /></div>
      <UnBorderedButton customLink={item.elLink} blank="blank">Подробнее</UnBorderedButton>
    </div>
  )
}

export default ProductsCard