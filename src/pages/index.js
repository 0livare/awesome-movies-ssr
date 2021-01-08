import Head from 'next/head'

import {Movie} from '../components'
import styles from '../styles/home.module.css'

export default function Home({data}) {
  console.log('data', data)

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

export async function getServerSideProps() {
  let url = addQuery('http://www.omdbapi.com', {
    // i: 'tt3896198',
    s: 'Die Hard',
    apikey: 'f66b96d0',
  })

  let res = await fetch(url)
  const data = await res.json()

  // Pass data to the page via props
  return {props: {data}}
}

function addQuery(urlStr, paramsObj) {
  let url = new URL(urlStr)

  Object.keys(paramsObj).forEach(key =>
    url.searchParams.append(key, paramsObj[key])
  )

  return url
}
