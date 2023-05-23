import { BrowserRouter as Router, Link, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home/Home'
import PokeDetails from './assets/pages/PokeDetails/PokeDetails'
import Search from './assets/components/Search/Search'

function App() {

  return (
    <Router>

      <Link to='/'>
        <h1>Pokemon</h1>
      </Link>

      <Search />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon/:pokemonName' element={<PokeDetails />} />
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
      </main>

    </Router>
  )
}

export default App
