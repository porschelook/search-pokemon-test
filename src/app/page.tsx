import SearchInput from '@/components/SearchInput'
import PokemonResult from '@/components/PokemonResult'

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6" style={{
        display: 'flex',
        justifyContent: 'center',
      }}>Search Pokémon</h1>
      <SearchInput />
      <PokemonResult />
    </main>
  )
}
