import Link from "next/link"
import { BasicLayout } from "@/layouts"
import { Image } from "semantic-ui-react"
import styles from './repertorio.module.css'

export default function Repertorio() {

  return (

    <BasicLayout title='¿ Que canción quieres ?' relative>

      <div className={styles.boxSong}>
        <Link href='/'>
          <Image src='/img/listsong.png' />
          <h1>Repertorio</h1>
        </Link>
        <Link href='playlist'>
          <Image src='/img/addsong.png' />
          <h1>Playlist</h1>
        </Link>
      </div>

      <div className={styles.mainRepesong}>
        <div className={styles.containerRepesong}>
          <div className={styles.boxTitle}>
            <h1>Baladas</h1>
          </div>
          <div className={styles.boxRepe}>
            <h2>AUTUMS</h2>
            <h2>BESAME MUCHO</h2>
            <h2>STAND BY ME</h2>
            <h2>BAILAR</h2>
            <h2>Y AHORA TU</h2>
            <h2>SWAY</h2>
            <h2>VIVIR ASI ES MORIR DE AMOR</h2>
            <h2>POLOS OPUESTOS</h2>
            <h2>CANTA CORAZON</h2> 
            <h2>TU SOLO TU</h2> 
            <h2>EL TRISTE</h2>
            <h2>WHEN A MAN LOVES</h2>
            <h2>IT’S A MANS WORLD</h2>
            <h2>IF AINT GOT YOU</h2>
            <h2>GRAVITY</h2>
          </div>
        </div>
      </div>

  </BasicLayout>
  )
}
