import { useEffect, useState } from 'react'
import { Image } from 'semantic-ui-react'
import styles from './AddSong.module.css'
import { Loading } from '../Loading'

export function AddSong(props) {

  const {noUser, add} = props

  return (
    
    <>
      {add ? (
        <Loading loadingStyle={false}/>
      ) : (
        <div className={styles.add} onClick={noUser}>
          <Image src='/img/add.png' />
        </div>
      )}
    </>

  )
}
