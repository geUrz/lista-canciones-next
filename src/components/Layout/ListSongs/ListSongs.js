import { useState, useEffect } from "react"
import { Image } from "semantic-ui-react"
import { map, size } from "lodash"
import { Listsong } from "@/api"
import { Song } from "./Song"
import { Loading } from "../Loading"
import styles from "./ListSongs.module.css"
import {io} from "socket.io-client"

const listSongCtrl = new Listsong()

const socket = io("http://localhost:1337", {path: "/"})
export function ListSongs(props) {

  useEffect(() => {
    socket.on('mensaje', (data) => console.log(data))
  }, [])
console.log(socket)
  const { reload, onReload } = props

  const [listsong, setListsong] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await listSongCtrl.getAll()
        setListsong(response.data)

      } catch (error) {
        console.error(error)
      }
      
    })()
    
  }, [reload])


  //if(!listsong) return null

  return (
    <>
      {!listsong  ? (
        <Loading />
      ) :
      size(listsong) === 0 ? (
        <div className={styles.listEmpty}>
          <Image src='/img/hidelist.png' />
          <h1>¡ Playlist vacio !</h1>
        </div>
      ) : (
        <div className={styles.mainListsong}>
          {map(listsong, (listsong) => (
            <Song
              key={listsong.id} 
              songId={listsong.id}
              song={listsong.attributes}  
              onReload={onReload}
            />
          ))}
        </div>
      )} 
    </>
  )
}
