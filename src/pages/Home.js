import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product-list/components/ProductList'
function Home() {
  return (
    <Navbar children={<ProductList/>} />
  )
}

export default Home