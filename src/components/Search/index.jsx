import React from 'react'
import SearchBar from './SearchBar'
import { restaurants } from '../../utils/Utils'

const Search = () => {
  return (
    <div>
      <SearchBar restaurants={restaurants}/>
    </div>
  )
}

export default Search
