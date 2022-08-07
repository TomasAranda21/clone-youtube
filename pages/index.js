import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/CardVideo/Card'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Homelayout from '../layout/Homelayout'
import styles from './pages.module.css'

export default function Home() {

  return (

      <Homelayout>

          <Header searchCarousel={false}/>

          <Navbar>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </Navbar>


      </Homelayout>
    
    
  )

}
