import React from 'react'
import star from '../assets/icons/star.svg';


const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img
            src={imgURL} alt={name}
            className="w-[280px] h-[280px]"
        />
        <div className="mt-8 justify-start gap-2.5">
            <div className="flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />
            <p className='font-montserrat text-slate-gray leading-normal text-xl'>(4.5)</p>
            </div>
            <h3 className="mt-2 text-3xl leading-normal font-semibold font-palanquin">{name}</h3>
            <h3 className="mt-2 text-xl text-coral-red leading-normal font-montserrat">{price}</h3>
        </div>
    </div>
  )
}

export default PopularProductCard
