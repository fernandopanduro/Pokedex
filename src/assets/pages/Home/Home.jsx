import PokeGrid from "../../components/PokeGrid/PokeGrid";
import Search from "../../components/Search/Search";

export default function Home() {
  window.scrollTo(0,0);
  return (
    <section className='container'>
        <PokeGrid />
    </section>
  )
}
