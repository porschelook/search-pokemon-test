import { gql } from '@apollo/client'

export const GET_POKEMON_BY_NAME = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) {
      id
      number
      name
      types
      image
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        name
        image
      }
    }
  }
`
