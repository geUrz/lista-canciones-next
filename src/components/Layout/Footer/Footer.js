import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.containerSiguenos}>
        <div className={styles.titleSiguenos}>
          <h4>¡ Síguenos en nuestras redes sociales !</h4>
        </div>
        <div className={styles.boxSiguenos}>
          <Link target='blank' href='https://facebook.com/vocalcoachescueladecanto/'>
            <Image src='/img/facebook.svg' alt='facebook' />
          </Link>
          <Image src='/img/instagram.svg' alt='instagram' />
        </div>
      </div>
      <div className={styles.copy}>
        <h4>&copy; 2023 VOCAL COACH</h4>
      </div>
    </div>
  )
}
