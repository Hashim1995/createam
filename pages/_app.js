import "antd/dist/antd.css";
import "../styles/global.css";
import "../styles/ant-customize.css";
import ContextProvider from "../Context/Context";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <ContextProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ContextProvider>
  );
}

export default MyApp;
