import Head from "next/head";

import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { ThemeContextProvider } from "../context/themeContext";
import { GlobalContextProvider } from "../context/globalContext";
import { MobileProvider } from "../context/mobileContext";
import Layout from "../layouts/main";

const App = ({ Component, pageProps }) => {
  // const [themeType, setThemeType] = useState("light");
  // const switchThemes = () => {
  //   setThemeType((last) => (last === "dark" ? "light" : "dark"));
  // };
  return (
    <ThemeContextProvider>
      <GlobalContextProvider>
        <MobileProvider>
          <GeistProvider>
            <Head>
              <title>Verify and Authenticate</title>
              <link rel="icon" href="/favicon.ico" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
              />
            </Head>
            <CssBaseline />
            {/* <Layout fullscreen>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  minHeight: "100vh",
                  backgroundColor: "yellow",
                }}
              >
                <div
                  style={{
                    maxWidth: 400,
                    width: 400,
                    backgroundColor: "springgreen",
                    // comment here for later use
                  }}
                ></div>
              </div>
              <Component {...pageProps} />
            </Layout> */}
            <Component {...pageProps} />
          </GeistProvider>
        </MobileProvider>
      </GlobalContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
