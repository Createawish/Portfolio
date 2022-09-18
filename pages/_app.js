import '../styles/globals.css'
import NavBar from "../components/NavBar/NavBar";
import {data} from '/data';
function MyApp({ Component, pageProps }) {
  return  <>
      <NavBar data={data}/>
      <Component {...pageProps} />
      </>
}

export default MyApp
