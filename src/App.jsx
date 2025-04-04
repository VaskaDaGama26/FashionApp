import { useState } from 'react'
import Header from './comps/Header'
import MainPage from './comps/MainPage'
import NewCollection from './comps/NewCollection'
import Catalog from './comps/Catalog'

function App() {

  return (
    <>
      <Header />
      <MainPage />
      <NewCollection />
      <Catalog />
    </>
  )
}

export default App
