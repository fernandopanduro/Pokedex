import { useParams } from 'react-router-dom'
import styles from './PokeDetails.module.css'
import { useFetch } from '../../hooks/useFetch'

export default function PokeDetails() {

    const params = useParams()
    const { data } = useFetch('https://pokeapi.co/api/v2/pokemon/' + params.pokemonName)


  return (
    <div className={styles.pokeDetails}>
        <h3 className={styles.name}>{data?.name.toUpperCase()}</h3>
        <p>Weight: {data?.weight}</p>
        <p>ID: {data?.id}</p>
        <p>Types:</p>
        <ul>
            {
                data?.types.map((element, index) => <li key={index}>{element.type.name}</li>)
            }
        </ul>
        <img className={styles.img} src={data?.sprites?.other?.home?.front_default} alt={data?.name} />
    </div>
  )
}
