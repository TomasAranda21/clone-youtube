import React from 'react'
import styles from './li.module.css'

const Li = ({text, icon}) => {
  return (
    <div className={styles.div}>
        <li className={styles.li}>
            {icon}
            <p>{text}</p>
        </li>
    </div>

  )
}

export default Li