
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { IssuesProvider } from './context/IssuesContext'


export function App() {
 

  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
        <IssuesProvider>
          <Router />
       
          <GlobalStyle />
        </IssuesProvider>
        </BrowserRouter>

    </ThemeProvider>
  )
}

