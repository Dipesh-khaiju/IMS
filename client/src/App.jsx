import React,{useState} from 'react'
import Header from './components/Header'
import DashBoard from './components/DashBoard'
import { Toaster } from 'react-hot-toast'
import  Footer  from './components/Footer.jsx'

const App = () => {
  const [products, setProducts] = useState([]);
  return (
    <>
    <Header setProducts={setProducts}  />
    <DashBoard products={products} />
    <Footer />
    <Toaster />
    </>
  )
}

export default App