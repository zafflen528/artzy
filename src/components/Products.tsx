import React from 'react'
import ProductType from '../types/ProductType'
import "../styles/Products.css"
import { useNavigate } from 'react-router-dom'

const Products = (props:ProductType) => {
	const navigate = useNavigate();

	/* go to product detail page */
	const handleProductClick = () => {
		navigate(`/product/${props.id}`)
	}
  return (
    <div className='product-view' onClick={handleProductClick}>
        <img src={props.image}/>
        <div className='product-title'>{props.title}</div>
        <div className='product-category'>{props.category}</div>
        <div className='product-price'>${props.price}</div>
    </div>
  )
}

export default Products