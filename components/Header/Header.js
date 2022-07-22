import React from 'react'
import CardSearch from '../CardSearch/CardSearch'
import icons from '../Icons/Icons'
import Navbar from '../Navbar/Navbar'
import styles from './header.module.css'

const Header = () => {
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
              <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" width="30" />
          </div>



      <div className={styles.navbar_container}>
        <Navbar/>
      </div>

      </div>
        <div className={styles.searchWords}>
          <CardSearch/>
        </div>
    </div>

  )
}

export default Header