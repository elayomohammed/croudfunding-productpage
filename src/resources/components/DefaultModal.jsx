import React from 'react';
import '../stylesheets/defaultModal.css';
import logo from '../images/logo-mastercraft.svg';
import bookmark from '../images/icon-bookmark.svg';
import StatsCard from './StatsCard';
import ProductDetails from './ProductDetails';

const DefaultModal = () =>{
    
    const handleSelectRewardAndBackThisProjectBtn = (event) =>{
        if(event){
            document.getElementById('back-this-project').style.display = 'block';
            document.getElementById('default-modal').style.backgroundColor = '#f1f1ee';
            document.getElementById('product-details-modal').style.backgroundColor = '#f1f1ee';
            document.getElementById('product-page').style.backgroundColor = '#f1f1ee';
        }
    }
    return(
        <div id='default-modal'>
            <div id='product-header'>
                <img id='logo' src={logo} alt=''></img><br />
                <h2 style={{textAlign: 'center', marginTop: -19}}>Mastercraft Bamboo Monitor Riser</h2>
                <p style={{textAlign: 'center', marginTop: -8, color: 'rgb(106, 104, 104)'}}>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <div id='support-and-bookmark'>
                    <button id='support-project' type='button' onClick={handleSelectRewardAndBackThisProjectBtn}>Back this project</button>
                    <li id='bookmark'><img src={bookmark} alt=''></img></li>
                </div>
            </div>
            <StatsCard />
            <ProductDetails />
        </div>
    )
}

export default DefaultModal;