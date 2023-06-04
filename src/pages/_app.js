import '@/styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {AuthProvider} from "@/_context/AuthContext";
import {theme} from "@/_themes/ThemeProvider";
import {ThemeProvider} from "@mui/material";


export default function App({Component, pageProps}) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>

  )
}
