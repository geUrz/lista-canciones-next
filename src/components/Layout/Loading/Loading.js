import { SkewLoader } from "react-spinners"
import styles from "./Loading.module.css"

export function Loading(props) {

  const {loadingStyle=true} = props

  return (
    <div className={loadingStyle ? styles.loading : styles.loading2}>
      <SkewLoader
        color='darkcyan'
        speedMultiplier={1.5}
      />
    </div>
  )
}
