import { useLocation } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import styles from './SearchPage.module.css'
import PokeCard from "../../components/PokeCard/PokeCard"
import Spinner from "../../components/Spinner/Spinner"

export default function SearchPage() {

  const location = useLocation()


  const { data, loading } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0')
  const filteredPokemons = data?.results.filter(pokemon => pokemon.name.includes(location.state))

  if(loading) {
    return <Spinner />
  }

  return (
    <>
      <p className={styles.results}>There are {filteredPokemons?.length} results:</p>
      <ul className={`container ${styles.pokeGrid}`}>
        {
          filteredPokemons?.map((item, index) => <PokeCard pokemon={item} key={index} />)
        }
      </ul>
    </>
  )
}
