import PokeCard from "../../components/PokeCard/PokeCard"
import { useContextPokemon } from "../../hooks/useContextPokemon"
import styles from './FavoritePage.module.css'

export default function FavoritePage() {

  const { favorites, clearFavorite } = useContextPokemon()

  return (
    <>
      <div className={styles.favoriteHeader}>
        <h2 className={styles.title}>Favorite Pokemons</h2>
        <button className={styles.btn} onClick={() => clearFavorite()}>Remove All From Favorites</button>
      </div>

      <p className={styles.results}>There are <strong>{favorites?.length}</strong> favorite:</p>

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
