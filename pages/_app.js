import "antd/dist/antd.css";
import "../styles/global.css";
import "../styles/ant-customize.css";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
