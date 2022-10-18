import Head from "next/head";
// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "../src/layouts/Navbar/Navbar";
import Footer from "../src/layouts/Footer/Footer";
import { SSRProvider } from "react-bootstrap";
import "../src/styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <SSRProvider>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </SSRProvider>
  </>
  );
  }

export default MyApp
