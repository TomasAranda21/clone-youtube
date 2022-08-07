import React from 'react'
import styles from './li.module.css'

const Li = ({text, icon, type}) => {
  return (
    <div className={styles.div}>
        <li className={type === 'text' ? styles.li_text : styles.li}>
            {icon}
            <p>{text}</p>
        </li>
    </div>

  )
}

export default Li