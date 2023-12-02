import { JoinLayout } from "@/layouts"
import styles from './signup.module.css'
import { Image } from "semantic-ui-react"
import Link from "next/link"
import { RegisterForm } from "@/components/Auth/RegisterForm"



export default function Signup() {
  return (
    
    <JoinLayout>
      
      <div className={styles.containerSignin}>
        <div className={styles.boxSignin}>
          <Image src='/img/adduser.png' />
          <h1>Crear cuenta</h1>
          
          <RegisterForm />

          <Link href='signin'>
          Iniciar sesión
          </Link>
        </div>
      </div>

    </JoinLayout>

  )
}
