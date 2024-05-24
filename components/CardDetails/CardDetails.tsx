import React, { SetStateAction, Fragment } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import Image from 'next/image';

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

interface DetailsProps {
  isOpen: boolean,
  close: (value: SetStateAction<boolean>) => void,
  car: carProps
}

const CardDetails = ({ isOpen, close, car } : DetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={close}>
        <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-out duration-300'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                    <span className="close-btn" onClick={() => close}>Close</span>
                    <div className="modalContent">
                      {Object.keys(car).map((key, value) => (
                        <div key={key}>
                          {/* <Image src={'/hero.png'} fill priority className='object-contain' alt='car image' /> */}
                          <p>{key} {value}</p>
                        </div>
                      ))}
                    </div>
                </DialogPanel>
              </TransitionChild>

            </div>
          </div>
      </Dialog>
    </Transition>
  )
}

export default CardDetails