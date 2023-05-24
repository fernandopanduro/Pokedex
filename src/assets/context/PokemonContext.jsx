import { createContext, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { useForm } from "../hooks/useForm"

export const PokemonContext = createContext()

export function PokemonProvaider({children}) {

    const [offset, setOffset] =useState(0)
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
    const { data } = useFetch(url) 
    
    


    const { valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: ''
    })

  return (
    <PokemonContext.Provider 
     value={{
        valueSearch,
        onInputChange,
        onResetForm,
        data: data
     }}
     >
        {children}
    </PokemonContext.Provider>
  )
}
