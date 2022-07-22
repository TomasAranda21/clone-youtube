import React from 'react'
import Li from '../Li/Li'
import icons from '../Icons/Icons'
import styles from './navbar.module.css'

const Navbar = () => {
  return (

        // <div className={styles.navbar}>
                <ul className={styles.list_container}>

                {/* <li className={styles.iconNavbar}>{icons.navIcon}
                
                <img src="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658366305/fondoPremium_lug99w.png" width="120"/>
                </li> */}
                

            <div className={styles.container_icons}>
                    <Li text="Home" icon={icons.homeIcon}/>
                    <Li text="Explore" icon={icons.exploreIcon}/>
                    <Li text="Shorts" icon={icons.shortIcon}/>
                    <Li text="Subscriptions" icon={icons.subscriptionsIcon}/>
                    <Li text="Originals" icon={icons.originalsIcon}/>
                    <Li text="YouTube Music" icon={icons.musicIcon}/>
                    <Li text="Library" icon={icons.libraryIcon}/>
                    <Li text="History" icon={icons.historyIcon}/>
                    <Li text="Your Videos" icon={icons.videosIcon}/>
                    <Li text="Watch later" icon={icons.clockIcon}/>
                    <Li text="Download" icon={icons.downloadIcon}/>
                    <Li text="Liked videos" icon={icons.likedIcon}/>
                    <Li text="Show more" icon={icons.arrowDownIcon}/>
                    <Li text="Show more" icon={icons.homeIcon}/>
                    <Li text="Show more" icon={icons.homeIcon}/>
                    <Li text="Show more" icon={icons.homeIcon}/>
                    <Li text="Show more" icon={icons.homeIcon}/>
                    <Li text="Show more" icon={icons.homeIcon}/>
                    <Li text="Show more" icon={icons.homeIcon}/>
                    <Li text="Show more" icon={icons.homeIcon}/>
                    <Li text="Show more" icon={icons.homeIcon}/>
                    <Li text="Show more" icon={icons.homeIcon}/>
                    <Li text="Show more" icon={icons.homeIcon}/>
            </div>

                </ul>

          // </div>




  )
}

export default Navbar