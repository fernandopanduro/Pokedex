import { FaSearch } from "react-icons/fa";
import { useQuery } from '../../hooks/useQuery';
import { useNavigate } from 'react-router-dom';

import styles from './Search.module.css'


export default function Search() {
  const query = useQuery();
  const search = query.get("search");
  const navigate = useNavigate();

  const handleSumit = e => {
    e.preventDefault()
  }
  const handleInput = e => {
    const value = e.target.value;
    navigate("/?search=" + value);
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSumit}>
      <div className={styles.searchBox}>
        <input 
          type="text" 
          className={styles.searchInput}
          autoFocus
          value={search ?? ''}
          name='search'
          aria-label='Search Pokemons'
          placeholder='Pikachu'
          onChange={handleInput}
        />
        <button><FaSearch className={styles.searchButton} size={20} /></button>  
      </div>
    </form>
  )
}