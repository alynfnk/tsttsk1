import '../styles/global.scss'
import '../helpers/intercept'
import UIkit from 'uikit';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}