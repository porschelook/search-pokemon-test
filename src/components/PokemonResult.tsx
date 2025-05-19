'use client'
import styles from '../styles/PokemonResult.module.css'
import { useQuery } from '@apollo/client'
import { useSearchParams, useRouter } from 'next/navigation'
import { GET_POKEMON_BY_NAME } from '@/graphql/queries'
import client from '@/lib/apollo-client'

export default function PokemonResult() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const name = searchParams.get('name')  

  const { data, loading, error } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name },
    client,
    skip: !name,
  })

  const messageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px', // or use '100%' or any fixed height you prefer
    fontSize: '1.2rem',
    fontWeight: '500',
    color: 'white',
  }

  if (!name) return <p style={messageStyle}>Search a Pokémon to see results.</p>
  if (loading) return <p style={messageStyle}>Loading...</p>
  if (error || !data?.pokemon) return <p style={messageStyle}>Pokémon not found.</p>

  const pokemon = data.pokemon

  return (
    <div className={styles.pokemonContainer}>
      <div className={styles.header}>
        <img src={pokemon.image} alt={pokemon.name} className={styles.pokemonImage} />
        <div>
          <h2 className={styles.title}>{pokemon.name} #{pokemon.number}</h2>
          <p className={styles.subTitle}>{pokemon.types.join(', ')}</p>

        </div>
      </div>

      <h3 className={styles.sectionTitle}>Attacks</h3>
      <div className={styles.attackGrid}>
        <div>
          <h4 className={styles.attackCategory}>Fast</h4>
          <ul>
            {pokemon.attacks.fast.map((attack: { name: string; type: string; damage: number }) => (
              <li key={`${attack.name}-${attack.type}`}>{attack.name} ({attack.type}) - {attack.damage}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={styles.attackCategory}>Special</h4>
          <ul>
            {pokemon.attacks.special.map((attack: { name: string; type: string; damage: number }) => (


              <li key={`${attack.name}-${attack.type}`}>{attack.name} ({attack.type}) - {attack.damage}  </li>

            ))}
          </ul>
        </div>
      </div>

      {pokemon.evolutions?.length > 0 && (
        <div className={styles.evolutions}>
          <h3 className={styles.sectionTitle}>Evolutions</h3>
          <div className={styles.evolutionList}>
            {pokemon.evolutions.map((evo: { id: string; name: string; image: string }) => (
              <div
                key={evo.id}
                className={styles.evolutionItem}
                onClick={() => router.push(`/?name=${encodeURIComponent(evo.name)}`)}
              >
                <img src={evo.image} alt={evo.name} className={styles.evolutionImage} />
                <p>{evo.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
