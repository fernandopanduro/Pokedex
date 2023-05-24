import PokeCard from "../../components/PokeCard/PokeCard"
import { useContextPokemon } from "../../hooks/useContextPokemon"
import styles from './FavoritePage.module.css'

export default function FavoritePage() {

  const { favorites, clearFavorite } = useContextPokemon()

  return (
    <>
      <div>
        <h1>Favorite Pokemons</h1>
        <button onClick={() => clearFavorite()}>Remove All Favorite</button>
      </div>

      <p className={styles.results}>There are {favorites?.length} favorite:</p>

        <ul className={`container ${styles.pokeGrid}`}>
          {
            favorites.map((favorite, index) => (
              <PokeCard pokemon={favorite} key={index} />
            ))
          }
        </ul>
    </>
  )
}
