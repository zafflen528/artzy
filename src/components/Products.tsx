import React from 'react'
import ProductType from '../types/ProductType'
import "../styles/Products.css"

const Products = (props:ProductType) => {
	const handleProductClick = () => {
		// TODO
	}
  return (
    <div className='product-view' onClick={handleProductClick}>
        <img src={props.image}/>
        <p>{props.title}</p>
        <p>{props.category}</p>
        <p>${props.price}</p>
    </div>
  )
}

export default Products