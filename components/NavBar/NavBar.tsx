import Link from "next/link"
import Image from "next/image"
import { CustomBtn } from "../CustomBtn/CustomBtn"

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link className="flex items-center justify-center" href={'/'}>
                <Image src={"/logo.svg"} alt="logo" className="object-contain" width={118} height={18} />
            </Link>
            <CustomBtn text="Sing in" btnType="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" />
        </nav>
    </header>
  )
}

export default NavBar