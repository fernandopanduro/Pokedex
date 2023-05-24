import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useContextPokemon } from "../../hooks/useContextPokemon";
import styles from './PokeCard.module.css'
import Spinner from "../Spinner/Spinner";
import { Fade } from "react-reveal";

export default function PokeCard({ pokemon }) {
  const url = pokemon.url
  const { data } = useFetch(url)
  const { addFavorite, removeFromFavorites, favorites, loading } = useContextPokemon()

  const checkPokemonInFavorite = () => favorites.some(item => item.name === pokemon.name)
  const isPokemonInFavorite = checkPokemonInFavorite()

  return (
    <li className={styles.cardContainer}>
      {loading && <Spinner />}
      <Fade bottom>
        <Link to={'/pokemon/' + data?.name} className={styles.card}>
          <img className={styles.img} src={data?.sprites.other.home.front_default} alt={data?.name} />
          <span className={styles.id}>N° {data?.id}</span>
          <h3 className={styles.name}>{data?.name.toUpperCase()}</h3>
          <div className={styles.types}>
            {
              data?.types.map(type => (
                <span key={type.type.name} className={`${styles.type} ${type.type.name}`}>{type.type.name.toUpperCase()}</span>
              ))
            }
          </div>
        </Link>
          <button className={styles.btn} onClick={() => {
            isPokemonInFavorite
            ? removeFromFavorites(pokemon)
            : addFavorite(pokemon)
          }}>
            {
              isPokemonInFavorite
              ? <AiFillHeart color="red" size={30} />
              : <AiOutlineHeart color="red" size={30}/>
            } 
          </button>
        </Fade>
    </li>
  )
}