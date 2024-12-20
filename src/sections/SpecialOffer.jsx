import React from 'react'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
import Button from '../Components/Button'
const SpecialOffer = () => {
  return (
    <section className="flex justif-wrap items-center max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1 w-full">
        <img src={offer} alt="" width={773} height={687} className='object-contain'/>
      </div>
        <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Special </span>
          {/* <span className='text-coral-red'>Offer </span>  */}
          Offer
        </h2>
          
          <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.

          </p>
          <p className='mt-4 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop now" iconURL={arrowRight}/>
            <Button label="Learn More" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
          </div>
         
      </div>
    </section>
  )
}

export default SpecialOffer
