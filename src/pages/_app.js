import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}
