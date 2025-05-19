'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import styles from '../styles/SearchInput.module.css'

export default function SearchInput() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initial = searchParams.get('name') || ''
  const [query, setQuery] = useState(initial)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/?name=${encodeURIComponent(query.trim())}`)
  }

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Pokémon by name... "
        title="Try typing 'Pikachu', 'Charmander', or 'Bulbasaur'"
        className={styles.searchInput}
      />
       
      <button type="submit" className={styles.searchButton}>
        Search
      </button>

    </form>


  )
}
