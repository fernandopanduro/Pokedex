import { createContext, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { useForm } from "../hooks/useForm"

export const PokemonContext = createContext()

export function PokemonProvaider({children}) {

    const [offset, setOffset] =useState(0)
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
    const { data } = useFetch(url)
    
    // Form
    const { valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: ''
    })

    // Favorites
    const [favorites, setFavorites] = useState([])

    const addFavorite = (pokemon) => setFavorites([...favorites, pokemon])
    const clearFavorite = () => {setFavorites([])}
    const removeFromFavorites = (pokemon) => setFavorites(prevState => prevState.filter(item => item.name !== pokemon.name))
    


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
        removeFromFavorites
     }}
     >
        {children}
    </PokemonContext.Provider>
  )
}
