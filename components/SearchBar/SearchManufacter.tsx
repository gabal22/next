'use client'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react"
import Image from "next/image"
import { useState, Fragment } from "react"
import { manufacturers } from "@/constanst"

interface ManufactorProps {
    manufactor: string,
    setManufactor: (manufactor:string) => void
}

export const SearchManufacter = ({ manufactor, setManufactor } : ManufactorProps) => {
    const [query, setQuery] = useState('')

    const filterManufacturers = query === "" ?
        manufacturers :
        manufacturers.filter(item =>(
            item.toLowerCase().replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        ))
    
  return (
    <div className="search-manufactor">
        <Combobox value={manufactor} onChange={setManufactor}>
            <div className="relavite w-full">
                <ComboboxButton className='absolute top-[14px]'>
                    <Image src={'/car-logo.svg'} width={20} height={20} alt="car-logo" className="ml-4" />
                </ComboboxButton>
                <ComboboxInput className='search-manufacturer__input' placeholder="Volkswagen"
                    displayValue={(manufactor:string) => manufactor}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Transition as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery("")}
                >
                    <ComboboxOptions>
                        {filterManufacturers.length === 0 && query !== "" ?
                            <ComboboxOption value={query} className='search-manufacturer__option'>
                                Not exist {query}
                            </ComboboxOption>
                            :
                            filterManufacturers.map(m => (
                                <ComboboxOption value={m} key={m}
                                    className={({active}) => `relative search-manufacturer__option ${
                                        active ? "bg-primary-blue text-white" : "text-gray-900"
                                    }`}
                                >
                                    {({ selected, active }) => (
                                    <>
                                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                        {m}
                                        </span>

                                        {/* Show an active blue background color if the option is selected */}
                                        {selected ? (
                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                                        ></span>
                                        ) : null}
                                    </>
                                    )}
                                </ComboboxOption>
                            ))
                        }
                    </ComboboxOptions>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}
