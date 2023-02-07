import React from "react";
import { useNavigate } from "react-router-dom";

const StoreBanner = () => {
    const navigate = useNavigate()
    return (
        <div className="banner" onClick={() =>{navigate(-1)}}>
            <div className="title">Cool Merch</div>
            <div className="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, rerum!
            </div>
        </div>
    );
};

export default StoreBanner;