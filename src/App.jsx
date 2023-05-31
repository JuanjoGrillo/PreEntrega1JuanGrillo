import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBar from './components/navBar/navBar';
import ListItemContainer from './components/listItemContainer/listItemContainer'
import './styles/styles.scss'
function App() {

  return (
    <>
      <NavBar/>
      <ListItemContainer texto="Contenedor de items"/>
    </>
  )
}

export default App

