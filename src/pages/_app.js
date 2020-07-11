import { PhishProvider } from "../context";
import "../scss/styles.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function MyApp({ Component, pageProps }) {
  return (
    <PhishProvider>
      <Component {...pageProps} />
    </PhishProvider>
  );
}

export default MyApp;
