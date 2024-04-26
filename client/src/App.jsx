import React from 'react'
import Header from './components/Header'
import AllProductsSection from './components/AllProductsSection'
import DashBoard from './pages/DashBoard'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Header  />
    <DashBoard />
    <Toaster />
    </>
  )
}

export default App