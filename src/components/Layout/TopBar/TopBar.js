import { useAuth } from "@/hooks"
import { useRouter } from "next/router"
import { Image } from 'semantic-ui-react'
import styles from './TopBar.module.css'

export function TopBar(props) {

  const {user, logout} = useAuth()
  const router = useRouter()

  const {title} = props

  const logoutSignin = () => {
    router.push('join/signin')
    logout()
  }

  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>
        <Image src='/img/basslogo.png' />
        <h1>{title}</h1>
      </div>

      {user ? (
        <div className={styles.logout} onClick={logoutSignin}>
          <Image src='/img/logout.png' />
        </div>
      ) : (
        <div className={styles.logout} onClick={logoutSignin}>
          <Image src='/img/signin.png' />
        </div>
      )}

    </div>
  )
}
