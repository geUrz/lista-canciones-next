import { JoinLayout } from "@/layouts"
import { Image } from "semantic-ui-react"
import styles from './signin.module.css'
import { LoginForm } from "@/components/Auth/LoginForm/LoginForm"

export default function Signin() {

  return (
    
    <JoinLayout>
      
      <div className={styles.containerSignin}>
        <div className={styles.boxSignin}>
          <Image src='/img/user.png' />
          <h1>Iniciar sesión</h1>
          
          <LoginForm />

        </div>
      </div>

    </JoinLayout>

  )
}
