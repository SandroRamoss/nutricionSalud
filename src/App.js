import React, { useState } from 'react'
import shortid from 'shortid'
import Normalize from 'react-normalize'
import styled, { createGlobalStyle } from 'styled-components'
import {
  faHome,
  faCookieBite,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Contacto from './components/Contacto'
import './App.css'
import Productos from './components/Productos'
import store from './store'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Source Sans Pro', sans-serif;
  }

  body {
    background-image: repeating-radial-gradient(circle at center center, transparent 0px, transparent 14px,rgba(0,0,0,0.04) 14px, rgba(0,0,0,0.04) 15px,transparent 15px, transparent 29px,rgba(0,0,0,0.04) 29px, rgba(0,0,0,0.04) 42px),repeating-radial-gradient(circle at center center, rgb(255,255,255) 0px, rgb(255,255,255) 4px,rgb(255,255,255) 4px, rgb(255,255,255) 7px,rgb(255,255,255) 7px, rgb(255,255,255) 12px,rgb(255,255,255) 12px, rgb(255,255,255) 13px); background-size: 52px 52px;
  }
  `

const StretchDiv = styled.div`
  flex: 1;
`

const lista = [
  {
    name: 'Inicio',
    icon: faHome,
    path: '/',
    render: () => <Menu />,
  },
  {
    name: 'Productos',
    icon: faCookieBite,
    path: '/productos',
    render: () => <Productos />,
  },
  {
    name: 'Contactenos',
    icon: faPhone,
    path: '/contacto',
    render: () => <Contacto />,
  },
]

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  return (
    <Provider store={store}>
      <Normalize />
      <GlobalStyle />
      <Router>
        <NavBar
          title="Productos N&S"
          lista={lista}
          isOpen={navIsOpen}
          setOpen={setNavIsOpen}
        />
        <MainContainer move={navIsOpen}>
          <StretchDiv>
            <Switch>
              {lista.map(({ path, render }) => (
                <Route
                  key={shortid.generate()}
                  exact
                  path={path}
                  render={render}
                />
              ))}
              <Route path="/*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </StretchDiv>
          <Footer>
            Todos los derechos reservados 2023 | Productos N&S S.A.C. Lima-Perú
          </Footer>
        </MainContainer>
      </Router>
    </Provider>
  )
}

export default App
