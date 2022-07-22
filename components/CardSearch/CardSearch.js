import React from 'react'
import { apiBusquedas } from '../../pages/api/apiMovies'
import styles from './cardSearch.module.css'

const CardSearch = () => {
  return (
    <>
        {apiBusquedas.map(search => (
            <div className={styles.cards_search} key={search}>
                <p>{search}</p>
            </div>
        ))}
    
    </>
  )
}

export default CardSearch