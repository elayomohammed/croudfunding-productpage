import React from 'react';
import '../stylesheets/productlist.css';
//import { useState } from 'react';

const ProductList = (props) =>{
    return(
        <div id='product-lists'>
            <div id='list-header-and-threshold'>
                <h3 id='list-header'>{props.productdetails.name}</h3>
                <p id='list-threshold'>{props.productdetails.threshold}</p>
            </div>
            <p id='product-list-details'>{props.productdetails.details}</p>
            <div id='product-count-and-select'>
                <p><span id='bold-count'>{props.productdetails.count}</span> left</p>
                <button id='select-product-btn' type='button'>Select Reward</button>
            </div>
        </div>
    )
}

export default ProductList;