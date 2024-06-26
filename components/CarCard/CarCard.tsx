'use client'
import { calculateCarRent } from '@/utils'
import { CustomBtn } from '../CustomBtn/CustomBtn'
import CardDetails from '../CardDetails/CardDetails'
import { useState } from 'react'
import Image from 'next/image'

interface carCardProps {
  car: carProps
}

interface carProps {
  city_mpg: number,
  class: string,
  combination_mpg: number,
  cylinders: number,
  displacement: number,
  drive: string,
  fuel_type: string,
  highway_mpg: number,
  make: string,
  model: string,
  transmission: string,
  year: number
}

export const CarCard = ({car}:carCardProps) => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false)
  const carRent = calculateCarRent(car.city_mpg, car.year)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={'/hero.png'} fill priority className='object-contain' alt='car image' />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]'>
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{car.drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{car.city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomBtn 
            text='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            handleClick={() => setIsOpen(true)}
              />
        </div>
      </div>
      <CardDetails isOpen={isOpen} close={() => setIsOpen(!open)} car={car} />
    </div>
  )
}
