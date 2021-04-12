import '../styles/globals.css'
import Layout from "../components/Layout";
// import '../pages/_document.js';
 
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>)
}

export default MyApp
