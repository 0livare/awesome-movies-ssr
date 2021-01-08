import Head from 'next/head'

import {Movie} from '../components'
import {addQuery} from '../util'
import styles from '../styles/[mid].module.css'

export default function MovieList({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zach's favorite movies</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.movieWrapper}>
        {data.Search.map(movieData => (
          <Movie key={movieData.imdbID} {...movieData} />
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  let searchTerm = context.params.mid.replace('-', ' ')

  let url = addQuery('http://www.omdbapi.com', {
    // i: 'tt3896198',
    s: searchTerm,
    apikey: 'f66b96d0',
  })

  let res = await fetch(url)
  const data = await res.json()

  // Pass data to the page via props
  return {props: {data}}
}
