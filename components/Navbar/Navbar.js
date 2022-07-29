import React from 'react'
import Li from '../Li/Li'
import icons from '../Icons/Icons'
import styles from './navbar.module.css'
import Card from '../CardVideo/Card'
import { subscriptions } from '../../pages/api/apiMovies'
import LiSubs from '../Li/LiSubs'

const Navbar = ({children}) => {
  return (

<div className={styles.container_navbar}>
        <div className={styles.navbar}>
                <ul className={styles.list_container}>

                <div className={styles.container_icons}>
                        <Li text="Home" icon={icons.homeIcon}/>
                        <Li text="Explore" icon={icons.exploreIcon}/>
                        <Li text="Shorts" icon={icons.shortIcon}/>
                        <Li text="Subscriptions" icon={icons.subscriptionsIcon}/>
                        <Li text="Originals" icon={icons.originalsIcon}/>
                        <Li text="YouTube Music" icon={icons.musicIcon}/>
                        <hr className={styles.section_separator}/>

                        <Li text="Library" icon={icons.libraryIcon}/>
                        <Li text="History" icon={icons.historyIcon}/>
                        <Li text="Your Videos" icon={icons.videosIcon}/>
                        <Li text="Watch later" icon={icons.clockIcon}/>
                        <Li text="Download" icon={icons.downloadIcon}/>
                        <Li text="Liked videos" icon={icons.likedIcon}/>
                        <Li text="Show more" icon={icons.arrowDownIcon}/>

                        <hr className={styles.section_separator}/>
                        <Li text="SUBSCRIPTIONS" type={'text'}/>
                                {subscriptions.map(subs => (
                                <LiSubs text={subs.name} img={subs.img}/>
                                ))}
                

                        <hr className={styles.section_separator}/>
                        <Li text="EXPLORE" type={'text'}/>
                        <Li text="Movies" icon={icons.moviesIcon}/>
                        <Li text="Gaming" icon={icons.gamingIcon}/>
                        <Li text="Live" icon={icons.liveIcon}/>
                        <Li text="Learning" icon={icons.lightIcon}/>
                        <Li text="Sports" icon={icons.trophyIcon}/>
                        <hr className={styles.section_separator}/>
                        <Li text="Settings" icon={icons.settingsIcon}/>
                        <Li text="Report history" icon={icons.flagIcon}/>
                        <Li text="Help" icon={icons.helpIcon}/>
                        <Li text="Send feedback" icon={icons.exclamationIcon}/>
                        <hr className={styles.section_separator}/>

                </div>
                </ul>
        </div>

        <div className={styles.container_card}>

                {children}
                
        </div>

</div>


  )
}

export default Navbar