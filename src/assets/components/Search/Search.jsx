import { FaSearch } from "react-icons/fa";

import styles from './Search.module.css'
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { useNavigate } from "react-router-dom";


export default function Search() {

  const {onInputChange, valueSearch, onResetForm} = useContext(PokemonContext)

  const navigate = useNavigate()

  const onSearchSubmit = e => {
    e.preventDefault()
    navigate('/search', {
      state: valueSearch
    })
    onResetForm()
  }

  return (
    <form className={styles.searchContainer} onSubmit={onSearchSubmit}>
      <div className={styles.searchBox}>
        <input 
          type="search" 
          className={styles.searchInput}
          autoFocus
          value={valueSearch}
          onChange={onInputChange}
          name='valueSearch'
          aria-label='Search Pokemons'
          placeholder='Pikachu'
        />
        <button><FaSearch className={styles.searchButton} size={20} /></button>  
      </div>
    </form>
  )
}