import PokeCard from '../PokeCard/PokeCard'
import styles from './PokeGrid.module.css'
import { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'

export default function PokeGrid() {
  
  const { data } = useContext(PokemonContext)

  return (
    <ul className={`content ${styles.pokeGrid}`}>
      {
        data?.results?.map((item, index) => <PokeCard key={index} pokemon={item} />)
      }

    </ul>
  )
}
