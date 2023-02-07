import React from 'react'
import ProductGallery from './components/ProductGallery'
import StoreBanner from './components/StoreBanner'
import "./styles/Store.css"

const Store = () => {
  return (
    <section className='store'>
        <StoreBanner />
        <ProductGallery />
    </section>
  )
}

export default Store