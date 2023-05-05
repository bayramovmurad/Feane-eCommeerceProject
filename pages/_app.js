import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/layout/Layout";
import { Provider } from "react-redux";
import store from "@/redux/store";

import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
   <Provider store={store}>
     <Layout>
      <Component {...pageProps} />
    </Layout>
   </Provider>
  );
}
