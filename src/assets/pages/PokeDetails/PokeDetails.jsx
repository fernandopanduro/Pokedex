import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useContextPokemon } from '../../hooks/useContextPokemon'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import styles from './PokeDetails.module.css'
import Spinner from '../../components/Spinner/Spinner'

export default function PokeDetails() {

  const params = useParams()
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  const { data, loading } = useFetch(url + params.pokemonName)

  // Favorite
  const { addFavorite, removeFromFavorites, favorites } = useContextPokemon()
  const checkPokemonInFavorite = () => favorites.some(item => item.name === data?.name)
  const isPokemonInFavorite = checkPokemonInFavorite()

  return (
    <div className={`container ${styles.pokeDetails}`}>
        {loading && <Spinner />}
        <div>
          <img className={styles.img} src={data?.sprites.other.home.front_default} alt={data?.name} />
        </div>
        <div className={styles.about}>
          <div className={styles.description}>
            <div className={styles.descriptionHeader}>
              <span className={styles.id}>#{data?.id}</span>
              <h2 className={styles.name}>{data?.name.toUpperCase()}</h2>
              <button className={styles.btn} onClick={() => {
                isPokemonInFavorite
                  ? removeFromFavorites({name: data?.name, url: url + params.pokemonName})
                  : addFavorite({name: data?.name, url: url + params.pokemonName})
              }}>
                {
                  isPokemonInFavorite
                    ? <AiFillHeart color="red" size={45} />
                    : <AiOutlineHeart color="red" size={45}/>
                } 
              </button>
            </div>
            <ul className={styles.types}>
                {
                  data?.types.map((element, index) => <li key={index} className={`${styles.type} ${element.type.name}`}>{element.type.name.toUpperCase()}</li>)
                }
            </ul>
          </div>
          <div className={styles.containerStats}>
                <h3>STATS</h3>
                <div className={styles.stats}>                  
                  {
                    data?.stats.map((element, index) => (
                      <div className={styles.statGroup} key={index}>
                        <span >{element.stat.name.toUpperCase()}:</span>
                        <div className={styles.progressBar}></div>
                        <span className={styles.counterStat}>{element.base_stat}</span>
                      </div>
                      ))
                  }
                </div>
          </div>
        </div>
    </div>
  )
}
