import React from 'react'
import ProductType from '../types/ProductType'
import "../styles/Products.css"
import { useNavigate } from 'react-router-dom'

const Products = (props:ProductType) => {
	const navigate = useNavigate();

	/* go to product detail page */
	const handleProductClick = () => {
		// alert(`You clicked the product of id ${props.id}`)
		navigate(`/product/${props.id}`)
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