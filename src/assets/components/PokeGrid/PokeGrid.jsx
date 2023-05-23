import PokeCard from '../PokeCard/PokeCard'
import styles from './PokeGrid.module.css'
import { useFetch } from '../../hooks/useFetch'

export default function PokeGrid() {

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  const { data } = useFetch(url)

  return (
    <ul className={`content ${styles.pokeGrid}`}>
      {
        data?.results?.map((item, index) => <PokeCard key={index} pokemon={item} />)
      }

    </ul>
  )
}
