'use client';

import Image from "next/image"
import { MouseEventHandler } from "react";

interface Props {
  text: string,
  containerStyles: string,
  btnType?: "button" | "submit",
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export const CustomBtn = ({text, containerStyles, btnType, handleClick} : Props) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={containerStyles}
      onClick={handleClick}
      >
        <span className={`flex-1`}>{text}</span>
    </button>
  )
}
