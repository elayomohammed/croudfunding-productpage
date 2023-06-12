import React from "react";
import '../stylesheets/backthisProject.css';

const BackthisProject = (props) =>{

    const handleBackThisProject = (event) =>{
        if(event){
            document.getElementById('selectedBackThisProject').style.display = 'flex';
            document.getElementById('backThisProject').style.border = 'solid #06b4c0 0.5px';
        }
    }

    const handleContinuePledgeBtn = (event) =>{
        if(event){
            document.getElementById('pledgeSuccess').style.display = 'block';
            document.getElementById('back-this-project').style.display = 'none';
            document.getElementById('stats-card').style.backgroundColor = '#f1f1ee';
            document.getElementById('product-header').style.backgroundColor = '#f1f1ee';
        }
    }

    return(
        <div id='backThisProject'>
            <div id='productInfo'>
                <div id='productNamePledgeAndCount'>
                    <input id='radio' type='radio' onClick={handleBackThisProject } />
                    <div id='productNameAndPledgeThreshold'>
                        <p id='productName' className='boldFonts'>{props.data.name}</p>
                        <p id='productPledgeThreshold' className='boldFonts'>{props.data.threshold}</p>
                    </div>
                    <p id='productCount'><span id='productCountSpan' className='boldFonts'>{props.data.count}</span> left</p>
                </div>
                <p id='product-details' className='greyText'>{props.data.details}</p>
            </div>
            <div id='selectedBackThisProject'>
                <p style={{marginLeft: '20px'}} className='greyText'>Enter your pledge</p>
                <div id='pledgeAmountInputAndContinueBtn'>
                    <lebel id='pledgeAmountLabel'>$</lebel><input type='text' id='pledgeAmountInput' style={{textAlign: 'center'}} />
                    <button type='button' id='continuePledge' onClick={handleContinuePledgeBtn}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default BackthisProject;