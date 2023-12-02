import { AuthProvider } from '@/contexts'
import '@/styles/globals.css'
import 'semantic-ui-css/semantic.min.css'

export default function App(props) {

  const { Component, pageProps } = props

  return(
  
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>

  ) 
}
