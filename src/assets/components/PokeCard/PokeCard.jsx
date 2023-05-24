import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import styles from './PokeCard.module.css'

export default function PokeCard({ pokemon }) {
  const url = pokemon.url
  const { data } = useFetch(url)

  return (
    <li className={styles.cardContainer}>
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
    </li>
  )
}