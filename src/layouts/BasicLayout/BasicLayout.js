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
 function initialFunction() {
  const tiempoDeEspera = 1;
    let time = localStorage.getItem("countdown")||0;
    if (!time) return;
    time =parseInt(time) / 1000/60;
    let currentTime = Date.now()/1000/60
    let minutos = currentTime - time;
    if (minutos > tiempoDeEspera){
      localStorage.removeItem("countdown");
      return;
    }
    let segundos = 60* (tiempoDeEspera-minutos)
    setAdd(true)
      setTimeout(() => {
        setAdd(false);
      },parseInt(1000*segundos))
  }
  useEffect(() => {
   
  initialFunction();
  }, [])
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
