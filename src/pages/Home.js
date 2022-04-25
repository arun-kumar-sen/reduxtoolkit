import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
    <h2 className='heading'>Welcome to Redux Store</h2>
    <section>
      <h3>Products</h3>
      <Products/>
    </section>
    </>
  )
}

export default Home