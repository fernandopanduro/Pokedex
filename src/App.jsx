import { BrowserRouter as Router, Link, Routes, Route, Navigate } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import Home from './assets/pages/Home/Home'
import PokeDetails from './assets/pages/PokeDetails/PokeDetails'
import Search from './assets/components/Search/Search'
import SearchPage from './assets/pages/SearchPage/SearchPage'
import FavoritePage from './assets/pages/FavoritePage/FavoritePage'
import './App.css'

function App() {

  return (
    <Router>

      <div className='background'>
        <div className='bubbles'>
          <span style={{'--i':'11'}}></span>
          <span style={{'--i':'12'}}></span>
          <span style={{'--i':'24'}}></span>
          <span style={{'--i':'10'}}></span>
          <span style={{'--i':'14'}}></span>
          <span style={{'--i':'23'}}></span>
          <span style={{'--i':'18'}}></span>
          <span style={{'--i':'16'}}></span>
          <span style={{'--i':'19'}}></span>
          <span style={{'--i':'20'}}></span>
          <span style={{'--i':'22'}}></span>
          <span style={{'--i':'25'}}></span>
          <span style={{'--i':'18'}}></span>
          <span style={{'--i':'21'}}></span>
          <span style={{'--i':'15'}}></span>
          <span style={{'--i':'13'}}></span>
          <span style={{'--i':'26'}}></span>
          <span style={{'--i':'17'}}></span>
          <span style={{'--i':'13'}}></span>
          <span style={{'--i':'18'}}></span>
          <span style={{'--i':'11'}}></span>
          <span style={{'--i':'12'}}></span>
          <span style={{'--i':'24'}}></span>
          <span style={{'--i':'10'}}></span>
          <span style={{'--i':'14'}}></span>
          <span style={{'--i':'23'}}></span>
          <span style={{'--i':'18'}}></span>
          <span style={{'--i':'16'}}></span>
          <span style={{'--i':'19'}}></span>
          <span style={{'--i':'20'}}></span>
          <span style={{'--i':'22'}}></span>
          <span style={{'--i':'25'}}></span>
          <span style={{'--i':'18'}}></span>
          <span style={{'--i':'21'}}></span>
          <span style={{'--i':'15'}}></span>
          <span style={{'--i':'13'}}></span>
          <span style={{'--i':'26'}}></span>
          <span style={{'--i':'17'}}></span>
          <span style={{'--i':'13'}}></span>
          <span style={{'--i':'18'}}></span>
        </div>
      </div>

      <header className='header'>
        <Link to='/'>
          <h1 className='title'>POKEDEX</h1>
        </Link>

        <div className='container header__nav'>
          <Search />
          <Link name='Favorites' to='/favorite'>
            <AiFillHeart color='red' size={50}/>
          </Link>
        </div>

      </header>


      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon/:pokemonName' element={<PokeDetails />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/favorite' element={<FavoritePage />} />
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
      </main>

    </Router>
  )
}

export default App
