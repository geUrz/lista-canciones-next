import Link from "next/link"
import { useState } from "react"
import { BasicLayout } from "@/layouts"
import { Image } from "semantic-ui-react"
import styles from './playlist.module.css'
import { ListSongs } from "@/components/Layout"


export default function Signin() {
  
  const [reload, setReload] = useState(false)

  const onReload = () => setReload((prevState) => !prevState)

  return (

    <BasicLayout title='Playlist' relative onReload={onReload}>

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

      
      <ListSongs reload={reload} onReload={onReload} />
      

  </BasicLayout>
  )
}
