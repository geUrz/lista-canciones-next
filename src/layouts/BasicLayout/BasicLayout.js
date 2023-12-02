import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { AddSong, SongForm, TopBar } from '@/components/Layout'
import { useAuth } from '@/hooks'
import { BasicModal } from '../BasicModal'
import styles from './BasicLayout.module.css'


export function BasicLayout(props) {

  const {
    children,
    relative= false,
    title,
    onReload,
  } = props
  
  const {user} = useAuth()

  const router = new useRouter()

  const [show, setShow] = useState(false)
  
  const onOpenClose = () => setShow((prevState) => !prevState)

  const noUser = () => {

    if(!user){
      router.push('join/signin')
      return null
    } else {
      onOpenClose()
    }

  }

  const [add, setAdd] = useState(false)

  const addStatus = () => setAdd((prevState) => !prevState)

  return (
    <>
      <TopBar title={title} />
        <div className={classNames({[styles.relative]: relative})}>
          {children}
        </div>
      
      {user ? (
        <AddSong noUser={noUser} add={add} />
      ) : (
        <div />
      )}

      <BasicModal show={show} onClose={onOpenClose}>
        <SongForm className='form' onClose={onOpenClose} onReload={onReload} addStatus={addStatus} />
      </BasicModal>
    </>
  )
}
