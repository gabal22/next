'use client'
import { SearchManufacter } from "./SearchManufacter"
import { useState } from "react"

const SearchBar = () => {
    const [ manufactor, setManufactor ] = useState('')
    const handleSearch = () =>{}

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacter
          manufactor={manufactor}
          setManufactor={setManufactor}
        />
      </div>
    </form>
  )
}

export default SearchBar