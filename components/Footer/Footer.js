import React from 'react'
import icons from '../Icons/Icons'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
            <div className={styles.container_icon}>
                <a href="https://github.com/TomasAranda21" target="_blank">{icons.githubIcon}</a>
                <a href="https://www.linkedin.com/in/tomas--aranda/" target="_blank">{icons.linkedinIcon}</a>
                <a href="https://tomasaranda.com" target="_blank">{icons.webIcon}</a>
            </div>

            <div className={styles.container_footer}>
                <p>Construido por Tomás Aranda</p>
                <p>© copyright 2022 Todos los derechos reservados</p>
            </div>

    </footer>
  )
}

export default Footer