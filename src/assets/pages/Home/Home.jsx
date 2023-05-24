import PokeGrid from "../../components/PokeGrid/PokeGrid";
import styles from './Home.module.css'

export default function Home() {
  window.scrollTo(0,0);
  return (
    <section className={`container ${styles.home}`}>
        <h2 className={styles.title}>POKEMON</h2>
        <PokeGrid />
    </section>
  )
}
