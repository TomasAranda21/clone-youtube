import React from 'react'
import icons from '../Icons/Icons'
import Li from '../Li/Li'
import LiAccount from '../Li/LiAccount'
import styles from './navAccount.module.css'

const NavAccount = () => {
  return (

    <div className={styles.nav_account_container}>

        <ul className={styles.nav_account}>
            <li className={styles.account_name_img}>
                <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" width="40" height="40" />
                <div className={styles.account_name}>
                    <h3>Tomás Aranda</h3>
                    <a href="#">Manage yout Google Account</a>
                </div>
            </li>
            <hr/>
                <LiAccount text='Your channel' icon={icons.userIcon}/>
                <LiAccount text='Youtube Studio' icon={icons.userIcon}/>
                <LiAccount text='Switch account' icon={icons.accountIcon}/>
                <LiAccount text='Sign out' icon={icons.signOutIcon}/>
            <hr/>
                <LiAccount text='Purchases and memberships' icon={icons.membershipsIcon}/>
                <LiAccount text='Your data in Youtube' icon={icons.yourDataIcon}/>
            <hr/>
                <LiAccount text='Appearance: Dark' icon={icons.darkIcon}/>
                <LiAccount text='Language: English' icon={icons.languageIcon}/>
                <LiAccount text='Restricted Mode: off' icon={icons.restrictedIcon}/>
                <LiAccount text='Location: Argentina' icon={icons.locationIcon}/>
                <LiAccount text='Keyboard shortcuts' icon={icons.keyboardIcon}/>
            <hr/>
                <LiAccount text='Settings' icon={icons.settingsIcon}/>
            <hr/>
                <LiAccount text='Help' icon={icons.helpIcon}/>
                <LiAccount text='Send feedback' icon={icons.exclamationIcon}/>
            
        </ul>

    </div>

  )
}

export default NavAccount