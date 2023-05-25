import PokeCard from '../PokeCard/PokeCard'
import styles from './PokeGrid.module.css'
import { useContext, useEffect } from 'react'
import { PokemonContext } from '../../context/PokemonContext'

export default function PokeGrid() {
  const { data, nextPage, prevPage } = useContext(PokemonContext) 
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [data])
  

  return (
    <div className={styles.containerPokeGrid}>    
      <ul className={`${styles.pokeGrid}`}>
        {
          data?.results?.map((item, index) => <PokeCard key={index} pokemon={item} />)
        }
      </ul>
      <div className={styles.btns}>
        {
          data?.previous && <button name='Previous Page' className={styles.btn} onClick={prevPage}>Previous Page</button>
        }
        {
          data?.next && <button name='Next Page' className={styles.btn} onClick={nextPage}>Next Page</button>
        }
        
      </div>
    </div>
    )
}
