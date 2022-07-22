import React from 'react'
import { api } from '../../pages/api/apiMovies'
import styles from './card.module.css'

const Card = () => {
  return (
    <>
        {api.map(video => (
            <div className={styles.card_container} key={video.img}>
                    <div className={styles.img_card}>
                        <img src={video.img}/>
                        <p>{video.time} </p>
                    </div>
                    <div className={styles.icon_account_title}> 

                        <div className={styles.icon_img_container}>
                            <img src={video.icon} width={36}/>
                        </div>

                        <div className={styles.time_name_channel_container}>
                            <p>{video.name}</p>
                            <div className={styles.views_time_name_container}>
                                <p>{video.nameChannel}</p>

                                <div className={styles.views_and_time}>
                                    <p>3.7k views</p>
                                    <p>•</p>
                                    <p>{video.date} ago</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        ))}
    </>

  )
}

export default Card


