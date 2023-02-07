import React, { useState, useEffect } from "react";
import Api from "../conf/Api";
import ProductType from "../types/ProductType";
import Products from "./Products";
import "../styles/ProductGallery.css"

const ProductGallery = () => {
    // an array of products
    const [isFetching, setIsFetching] = useState(true);
    const [products, setProducts] = useState<Array<ProductType>>([]);

    const getProducts = async () => {
        Api.get("https://fakestoreapi.com/products?limit=6")
            .then((res) => res.data)
            .then((res) => {
                console.log(res);
                setProducts(res);
                setIsFetching(false);
            })
            .catch((e) => {
                alert(e);
            });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <section className="product-gallery">
            {isFetching ? (
                <>Please wait while we get your products</>
            ) : (
                products.map((product) => (
                    <Products
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        category={product.category}
                        key={product.id}
                    />
                ))
            )}
        </section>
    );
};

export default ProductGallery;
