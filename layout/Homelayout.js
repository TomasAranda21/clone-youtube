import React from 'react'
import styles from './Homelayout.module.css'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'


const Homelayout = ({children}) => {

  return (

    <>
    
      <Head>
            <title> Clone Youtube</title>
            <link rel="icon" href=''/>

      </Head>



      <div className={styles.container}>

          {children}


        <Footer/>

      </div>

    </>


  )
}

export default Homelayout