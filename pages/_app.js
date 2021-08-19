import {Provider} from 'next-auth/client'
import '../styles/globals.css'

export function reportWebVitals(metric) {
  console.log(metric)
}


function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
    
  )
}

export default MyApp
