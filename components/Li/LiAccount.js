import React from 'react'
import styles from './li.module.css'

const LiAccount = ({text, icon, type}) => {
  return (
    <div className={styles.div}>
        <li className={styles.liAccount}>
            {icon}
            <p>{text}</p>
        </li>
    </div>

  )
}

export default LiAccount