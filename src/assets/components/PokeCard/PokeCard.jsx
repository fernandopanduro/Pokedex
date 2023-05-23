import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import styles from './PokeCard.module.css'

export default function PokeCard({ pokemon }) {

  const url = pokemon.url

  const { data } = useFetch(url)

  
  return (
    <li>
        <Link className={styles.card}>
          <img className={styles.img} src={data?.sprites?.other?.home?.front_default} alt={data?.name} />
          <h3 className={styles.name}>{data?.name}</h3>
        </Link>
    </li>
  )
}