import React from 'react'
import ProductsCard from './ProductCard'
import Product1 from '../../public/images/product1.jpg'
import Product2 from '../../public/images/products2.jpg'
import Product3 from '../../public/images/products3.jpg'


const products = [
  {
    id: 1,
    title: 'Кровь с молоком',
    image: Product1,
    file: 1,
    elLink: 'https://www.instagram.com/p/Cmb-2vLNqAG/?img_index=1'
  },
  {
    id: 2,
    title: 'Польза грудного вскармливания',
    image: Product2,
    file: 2,
    elLink: 'https://www.instagram.com/p/CguLH1gN2Vl/?img_index=2'
  },
  {
    id: 3,
    title: 'Вы готовы стать мамой ?',
    image: Product3,
    file: 3,
    elLink: 'https://www.instagram.com/p/Cic86lwtLk-/'
  }
];

const Products = () => {
  return (
    <section className='md:mt-[120px] mt-[100px] products'>
        <div className="container">
        <h3 className='mb-[45px] alexandra text-[70px] leading-[50px] lg:text-[100px] lg:leading-[100%] text-secondaryDark text-center'>Наши посты в инстаграме</h3>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[38px] justify-center'>
          {
            products.map((item) => (
              <ProductsCard item={item} key={item.id} />
            ))
          }
        </div>
      
        </div>
    </section>
  )
}

export default Products