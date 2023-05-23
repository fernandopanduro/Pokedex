import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home/Home'

function App() {

  return (
    <Router>

      <Link to='/'>
        <h1>Pokemon</h1>
      </Link>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>

    </Router>
  )
}

export default App
