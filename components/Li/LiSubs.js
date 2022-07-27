import styles from './li.module.css'
import React from 'react'

const LiSubs = ({text, img}) => {
  return (
    <div className={styles.div}>
        <li className={styles.li}>
            <div className={styles.container_img}>
                <img src={img} />
            </div>
            <p>{text}</p>
        </li>
    </div>
  )
}

export default LiSubs