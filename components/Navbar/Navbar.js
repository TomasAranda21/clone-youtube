import React from 'react'
import Li from '../Li/Li'
import icons from '../Icons/Icons'
import styles from './navbar.module.css'
import Card from '../CardVideo/Card'
import { subscriptions } from '../../pages/api/apiMovies'
import LiSubs from '../Li/LiSubs'
import { navExplore, navigation, navigationTwo, navSettings } from '../../routes'

const Navbar = ({children}) => {

  return (

<div className={styles.container_navbar}>
        <div className={styles.navbar}>
                <ul className={styles.list_container}>

                <div className={styles.container_icons}>
                        {navigation.map(nav => (
                        <Li text={nav.text} icon={nav.icon}/>
                        ))}

                        <hr className={styles.section_separator}/>

                        {navigationTwo.map(nav => (
                        <Li text={nav.text} icon={nav.icon}/>

                        ))}

                        <hr className={styles.section_separator}/>

                        <Li text="SUBSCRIPTIONS" type={'text'}/>
                        {subscriptions.map(subs => (
                        <LiSubs text={subs.name} img={subs.img}/>
                        ))}
                
                
                        <hr className={styles.section_separator}/>
                        <Li text="EXPLORE" type={'text'}/>

                        {navExplore.map(nav => (
                        <Li text={nav.text} icon={nav.icon}/>

                        ))}
                        
                        <hr className={styles.section_separator}/>
                        
                        {navSettings.map(nav => (
                        <Li text={nav.text} icon={nav.icon}/>

                        ))}
                        <p>
                        AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
                        TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
                        © 2022 Google LLC
                        </p>

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