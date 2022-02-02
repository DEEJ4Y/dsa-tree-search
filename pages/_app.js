import ParagraphContextProvider from "../components/providers/paragraph";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import QueryContextProvider from "../components/providers/query";

function MyApp({ Component, pageProps }) {
  return (
    <ParagraphContextProvider>
      <QueryContextProvider>
        <Component {...pageProps} />
      </QueryContextProvider>
    </ParagraphContextProvider>
  );
}

export default MyApp;
