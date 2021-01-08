import React, {useState} from 'react'
import {useRouter} from 'next/router'

export default function SearchBox(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  function search() {
    router.push('/' + searchTerm.replace(' ', '-'))
  }

  return (
    <div style={{margin: '2rem'}} {...props}>
      <input
        type='text'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && search()}
      />
      <button onClick={search}>Search!</button>
    </div>
  )
}
