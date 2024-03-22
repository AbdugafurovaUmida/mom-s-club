import Image from "next/image"
import sponsor1 from '../../public/images/sponsor-1.PNG'
import sponsor2 from '../../public/images/sponsor-2.PNG'
import sponsor3 from '../../public/images/sponsor-3.PNG'
// import sponsor4 from '../../public/images/sponsor-4.PNG'
import sponsor5 from '../../public/images/sponsor-5.PNG'
import sponsor6 from '../../public/images/sponsor-6.png'
import Marquee from "react-fast-marquee";

const sponsors = [
    {
        id: 1,
        image: sponsor1,
        name: 'sponsor'
    },
    {
        id: 2,
        image: sponsor2,
        name: 'sponsor'
    },
    {
        id: 3,
        image: sponsor3,
        name: 'sponsor'
    },

    {
        id: 5,
        image: sponsor5,
        name: 'sponsor'
    },
    {
        id: 6,
        image: sponsor6,
        name: 'sponsor'
    },

];


const Sponsors = () => {

    return (
        <section className=' mt-[100px] mb-[90px] '>
            <div className="container">
                <div className="py-[30px] md:py-[75px] px-8  bg-white inner-container border-[3px] border-solid rounded-[30px] border-[#F1DBDA]">
                    <h3 className='mb-[26px] alexandra text-[70px] leading-[50px] lg:text-[100px] lg:leading-[100%] text-secondaryDark text-center'>Наши спонсоры</h3>

                    <div className="cards-wrapper">
                        <Marquee speed={30}>
                            <div className="flex md:gap-8 gap-1 justify-items-center">
                                {
                                    sponsors.map((item) => (
                                        <Image 
                                        className="h-[150px] lg:h-[200px] mb-8 xl:mb-0 object-contain " 
                                        key={item.id} 
                                        src={item.image} 
                                        alt={item.name} 
                                        width={250} 
                                        height={200} />
                                    ))
                                }</div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors