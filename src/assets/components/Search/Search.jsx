import styles from './Search.module.css'

import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContextPokemon } from '../../hooks/useContextPokemon';


export default function Search() {

  const {onInputChange, valueSearch, onResetForm} = useContextPokemon()

  const navigate = useNavigate()

  const onSearchSubmit = e => {
    e.preventDefault()
    if (valueSearch === null) {
      navigate('/search', {
        state: 'null'
      })
    } else {
      navigate('/search', {
        state: valueSearch.toLowerCase().trim()
      })
    }
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