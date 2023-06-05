import '@/styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {AuthContext, AuthProvider} from "@/_context/AuthContext";
import {theme} from "@/_themes/ThemeProvider";
import {ThemeProvider} from "@mui/material";
import MiniDrawer from "@/_components/Navigation/Navigation";
import {useContext} from "react";
import {useRouter} from "next/router";


export default function App({Component, pageProps}) {

  return (
    <AuthProvider>
      <AppRoot {...{ Component, pageProps }} />
    </AuthProvider>

  )
}

function AppRoot({ Component, pageProps }) {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();
  const isLoginPage = router.pathname === "/login";

  return (
    <ThemeProvider theme={theme}>
      {isLoggedIn && !isLoginPage && <MiniDrawer />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
