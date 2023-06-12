import React from 'react';
import '../stylesheets/productlist.css';
//import { useState } from 'react';

const handleSelectRewardAndBackThisProjectBtn = (event) =>{
    if(event){
        document.getElementById('back-this-project').style.display = 'block';
        document.getElementById('default-modal').style.backgroundColor = '#f1f1ee';
        document.getElementById('product-details').style.backgroundColor = '#f1f1ee';
        document.getElementById('product-page').style.backgroundColor = '#f1f1ee';
    }
}

const ProductList = (props) =>{
    return(
        <div id='product-lists'>
            <div id='list-header-and-threshold'>
                <h3 id='list-header'>{props.data.name}</h3>
                <p id='list-threshold'>{props.data.threshold}</p>
            </div>
            <p id='product-list-details' className='greyText'>{props.data.details}</p>
            <div id='product-count-and-select'>
                <p className='greyText'><span id='bold-count'>{props.data.count}</span> left</p>
                <button id='select-product-btn' type='button' onClick={handleSelectRewardAndBackThisProjectBtn}>Select Reward</button>
            </div>
        </div>
    )
}

export default ProductList;