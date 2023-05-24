import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import styles from './PokeDetails.module.css'
import Spinner from '../../components/Spinner/Spinner'

export default function PokeDetails() {

  const params = useParams()
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  const { data, loading } = useFetch(url + params.pokemonName)

  if (loading) {
    return <Spinner />
  }

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
