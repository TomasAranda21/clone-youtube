import React from 'react'
import styles from './Homelayout.module.css'

const Homelayout = ({children}) => {

  return (

    <div className={styles.container}>

        {children}


    </div>

  )
}

export default Homelayout