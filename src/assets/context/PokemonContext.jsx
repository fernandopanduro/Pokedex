import { createContext, useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { useForm } from "../hooks/useForm"

export const PokemonContext = createContext()

export function PokemonProvaider({children}) {

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
    const { data, loading } = useFetch(url)
    
    // Form
    const { valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: ''
    })

    // Favorites
    const [favorites, setFavorites] = useState([])

    const addFavorite = (pokemon) => setFavorites([...favorites, pokemon])
    const clearFavorite = () => {setFavorites([])}
    const removeFromFavorites = (pokemon) => setFavorites(prevState => prevState.filter(item => item.name !== pokemon.name))
    
    // Load More Pokemons
    const nextPage = () => {
      setUrl(data.next)
    }
    const prevPage = () => {
      setUrl(data.previous)
    }

  return (
    <PokemonContext.Provider 
     value={{
        valueSearch,
        onInputChange,
        onResetForm,
        data,
        favorites,
        addFavorite,
        clearFavorite,
        removeFromFavorites,
        nextPage,
        prevPage
     }}
     >
        {children}
    </PokemonContext.Provider>
  )
}
