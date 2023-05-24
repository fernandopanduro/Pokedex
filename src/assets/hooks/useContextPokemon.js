import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"

export const useContextPokemon = () => {
    const context = useContext(PokemonContext)

    if(context === undefined) {
        throw new Error('useContextPokemon must be used within a PokemonProvider')
    }

    return context
}