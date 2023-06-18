import React from "react";
import '../stylesheets/backthisProject.css';

const BackthisProject = (props) =>{

    const handleBackThisProject1 = (event) =>{
        if(event){
            if(document.getElementById('selectedBackThisProject1').style.display ==='flex'){
                document.getElementById('selectedBackThisProject1').style.display = 'none';
                document.getElementById('radio1').style.backgroundColor = 'white';
                document.getElementById('backThisProject1').style.border = 'solid rgba(226, 229, 231, 0.917) 0.5px';   
            }else{
                document.getElementById('selectedBackThisProject1').style.display = 'flex';
                document.getElementById('backThisProject1').style.border = 'solid #06b4c0 0.5px';
                document.getElementById('radio1').style.backgroundColor = '#06b4c0';
            }
        }
    }
    const handleBackThisProject2 = (event) =>{
        if(event){
            if(document.getElementById('selectedBackThisProject2').style.display ==='flex'){
                document.getElementById('selectedBackThisProject2').style.display = 'none';
                document.getElementById('radio2').style.backgroundColor = 'white';
                document.getElementById('backThisProject2').style.border = 'solid rgba(226, 229, 231, 0.917) 0.5px';   
            }else{
                document.getElementById('selectedBackThisProject2').style.display = 'flex';
                document.getElementById('backThisProject2').style.border = 'solid #06b4c0 0.5px';
                document.getElementById('radio2').style.backgroundColor = '#06b4c0';
            }
        }
    }
    const handleBackThisProject3 = (event) =>{
        if(event){
            if(document.getElementById('selectedBackThisProject3').style.display ==='flex'){
                document.getElementById('selectedBackThisProject3').style.display = 'none';
                document.getElementById('radio3').style.backgroundColor = 'white';
                document.getElementById('backThisProject3').style.border = 'solid rgba(226, 229, 231, 0.917) 0.5px';   
            }else{
                document.getElementById('selectedBackThisProject3').style.display = 'flex';
                document.getElementById('backThisProject3').style.border = 'solid #06b4c0 0.5px';
                document.getElementById('radio3').style.backgroundColor = '#06b4c0';
            }
        }
    }
    const handleBackThisProject4 = (event) =>{
        if(event){
            if(document.getElementById('selectedBackThisProject4').style.display ==='flex'){
                document.getElementById('selectedBackThisProject4').style.display = 'none';
                document.getElementById('radio4').style.backgroundColor = 'white';
                document.getElementById('backThisProject4').style.border = 'solid rgba(226, 229, 231, 0.917) 0.5px';   
            }else{
                document.getElementById('selectedBackThisProject4').style.display = 'flex';
                document.getElementById('backThisProject4').style.border = 'solid #06b4c0 0.5px';
                document.getElementById('radio4').style.backgroundColor = '#06b4c0';
            }
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
        <>
        <div className='backThisProject' id='backThisProject1'>
            <div className='productInfo'>
                <div className='productNamePledgeAndCount'>
                    <p id='radio1' className='radio' onClick={handleBackThisProject1}></p>
                    <div className='productNameAndPledgeThreshold'>
                        <p style={{fontWeight: 700}}>{props.data1.name}</p>
                        <p className='productPledgeThreshold' style={{fontWeight: 700}}>{props.data1.threshold}</p>
                    </div>
                    <p className='productCount'><span className='productCountSpan' style={{fontWeight: 700}}>{props.data1.count}</span> left</p>
                </div>
                <p className='product-details' style={{color: 'rgb(106, 104, 104)'}}>{props.data1.details}</p>
            </div>
            <div className='selectedBackThisProject' id='selectedBackThisProject1'>
                <p style={{marginLeft: '10px', width: '170px', color: 'rgb(106, 104, 104)'}}>Enter your pledge</p>
                <div className='pledgeAmountInputAndContinueBtn'>
                    <lebel className='pledgeAmountLabel'>$</lebel><input type='text' className='pledgeAmountInput' style={{textAlign: 'center'}} />
                    <button type='button' className='continuePledge' onClick={handleContinuePledgeBtn}>Continue</button>
                </div>
            </div>
        </div>

        <div className='backThisProject' id='backThisProject2'>
            <div className='productInfo'>
                <div className='productNamePledgeAndCount'>
                    <p id='radio2' className='radio' onClick={handleBackThisProject2}></p>
                    <div className='productNameAndPledgeThreshold'>
                        <p style={{fontWeight: 700}}>{props.data2.name}</p>
                        <p className='productPledgeThreshold' style={{fontWeight: 700}}>{props.data2.threshold}</p>
                    </div>
                    <p className='productCount'><span className='productCountSpan' style={{fontWeight: 700}}>{props.data2.count}</span> left</p>
                </div>
                <p className='product-details' style={{color: 'rgb(106, 104, 104)'}}>{props.data2.details}</p>
            </div>
            <div className='selectedBackThisProject' id='selectedBackThisProject2'>
                <p style={{marginLeft: '10px', width: '170px', color: 'rgb(106, 104, 104)'}}>Enter your pledge</p>
                <div className='pledgeAmountInputAndContinueBtn'>
                    <lebel className='pledgeAmountLabel'>$</lebel><input type='text' className='pledgeAmountInput' style={{textAlign: 'center'}} />
                    <button type='button' className='continuePledge' onClick={handleContinuePledgeBtn}>Continue</button>
                </div>
            </div>
        </div>

        <div className='backThisProject' id='backThisProject3'>
            <div className='productInfo'>
                <div className='productNamePledgeAndCount'>
                    <p id='radio3' className='radio' onClick={handleBackThisProject3}></p>
                    <div className='productNameAndPledgeThreshold'>
                        <p style={{fontWeight: 700}}>{props.data3.name}</p>
                        <p className='productPledgeThreshold' style={{fontWeight: 700}}>{props.data3.threshold}</p>
                    </div>
                    <p className='productCount'><span className='productCountSpan' style={{fontWeight: 700}}>{props.data3.count}</span> left</p>
                </div>
                <p className='product-details' style={{color: 'rgb(106, 104, 104)'}}>{props.data3.details}</p>
            </div>
            <div className='selectedBackThisProject' id='selectedBackThisProject3'>
                <p style={{marginLeft: '10px', width: '170px', color: 'rgb(106, 104, 104)'}}>Enter your pledge</p>
                <div className='pledgeAmountInputAndContinueBtn'>
                    <lebel className='pledgeAmountLabel'>$</lebel><input type='text' className='pledgeAmountInput' style={{textAlign: 'center'}} />
                    <button type='button' className='continuePledge' onClick={handleContinuePledgeBtn}>Continue</button>
                </div>
            </div>
        </div>

        <div className='backThisProject' id='backThisProject4'>
            <div className='productInfo'>
                <div className='productNamePledgeAndCount'>
                    <p id='radio4' className='radio' onClick={handleBackThisProject4}></p>
                    <div className='productNameAndPledgeThreshold'>
                        <p style={{fontWeight: 700}}>{props.data4.name}</p>
                        <p className='productPledgeThreshold' style={{fontWeight: 700}}>{props.data4.threshold}</p>
                    </div>
                    <p className='productCount'><span className='productCountSpan' style={{fontWeight: 700}}>{props.data4.count}</span> left</p>
                </div>
                <p className='product-details' style={{color: 'rgb(106, 104, 104)'}}>{props.data4.details}</p>
            </div>
            <div className='selectedBackThisProject' id='selectedBackThisProject4'>
                <p style={{marginLeft: '10px', width: '170px', color: 'rgb(106, 104, 104)'}}>Enter your pledge</p>
                <div className='pledgeAmountInputAndContinueBtn'>
                    <lebel className='pledgeAmountLabel'>$</lebel><input type='text' className='pledgeAmountInput' style={{textAlign: 'center'}} />
                    <button type='button' className='continuePledge' onClick={handleContinuePledgeBtn}>Continue</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default BackthisProject;