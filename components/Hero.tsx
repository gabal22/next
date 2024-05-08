'use client'
import Image from "next/image"
import { CustomBtn } from "./CustomBtn/CustomBtn"

const Hero = () => {

    const handleScroll = () => {
        console.log('scroll')
    }

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">Find, book and rent a new car</h1>
            <p className="herro__subtitle">Streamline your car experience</p>
            <CustomBtn text="Explore Cars" btnType="button" containerStyles="bg-primary-blue text-white rounded-full mt-10 p-3" handleClick={handleScroll} />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain" />
            </div>
            <div className="hero__image-overlay" />
        </div>
    </div>
  )
}

export default Hero