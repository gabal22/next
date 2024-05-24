'use client';

import Image from "next/image"
import { MouseEventHandler } from "react";

interface Props {
  text: string,
  containerStyles: string,
  btnType?: "button" | "submit",
  rightIcon?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export const CustomBtn = ({text, containerStyles, btnType, rightIcon, handleClick} : Props) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={containerStyles}
      onClick={handleClick}
      >
        <span className={`flex-1`}>{text}</span>
        {rightIcon &&
          <div className="relative w-6 h-6">
            <Image src={rightIcon} alt="icon btn" fill className="object-contain" />
          </div>
        }
    </button>
  )
}
