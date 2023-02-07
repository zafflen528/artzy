import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../conf/Api";
import ProductType from "../types/ProductType";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState<ProductType>();
    const navigate = useNavigate();

    const { id } = useParams();

		const goBack = () => {
			navigate(-1)
		}

    const getProductByID = async () => {
        Api.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.data)
            .then((res) => {
                setProductData(res);
                setLoading(false);
                console.log(productData);
            })
            .catch((e) => alert(e));
    };

    useEffect(() => {
        getProductByID();
    }, []);

    return (
        <>
					<header className="product-header">
						<div onClick={goBack} className="back-button">&#60;</div>
						<div>Product</div>
					</header>
            {loading ? (
                <>Getting product info...</>
            ) : (
                <div className="product-detail">
                    <h1>{productData?.title}</h1>
                    <img src={productData?.image} />
                    <h2> {productData?.category} </h2>
                    <h2> ${productData?.price} </h2>
                    <p> {productData?.description} </p>
                    <button>Add to Cart</button>
                </div>
            )}
        </>
    );
};

export default ProductDetail;
