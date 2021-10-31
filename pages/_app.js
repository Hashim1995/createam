import "antd/dist/antd.css";
import "../styles/global.css";
import "../styles/ant-customize.css";
import ContextProvider from "../Context/Context";
function MyApp({ Component, pageProps, router }) {
  return (
    <ContextProvider>
      <Component {...pageProps} key={router.route} />
    </ContextProvider>
  );
}

export default MyApp;
