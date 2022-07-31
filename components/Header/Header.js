import React, { useState } from 'react'
import CardSearch from '../CardSearch/CardSearch'
import icons from '../Icons/Icons'
import NavAccount from '../NavAccount/NavAccount'
import Navbar from '../Navbar/Navbar'
import styles from './header.module.css'

const Header = ({searchCarousel}) => {

  const [navAccount, setNavAccount] = useState(false)

  return (

    <div className={styles.header_container}>
        <div className={styles.search_and_account}>

        <div className={styles.logo_and_menu}>
            {icons.navIcon}
            <img src="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658415358/fondoPremium_ufik6m.png" width="120"/>

        </div>

          <div className={styles.search_container}>
            <div className={styles.search}>
              <input type="text" className={styles.searchInput} placeholder="Search"/>
              <p className={styles.searchIcon}>{icons.searchIcon}</p>
            </div>

              <p className={styles.micIcon}>{icons.micIcon}</p>
          </div>

          <div className={styles.infoAccount}>
              <p className={styles.icon_account}>{icons.addVideoIcon}</p>
              <p className={styles.icon_account}>{icons.bellIcon}</p>
              <img style={{cursor: 'pointer'}}
              src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" width="30" onClick={() => setNavAccount(!navAccount)} />

              {navAccount && 
                <div className={styles.nav_account}>
                  <NavAccount/>
                </div>
              }
          </div>




      </div>
      { searchCarousel && 

        <div >
          <CardSearch/>
        </div>

      }
    </div>

  )
}

export default Header