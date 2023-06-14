import checkIcon from '../images/icon-check.svg';
import '../stylesheets/pledgeSuccess.css';

const PledgeSucess = () =>{
    const handlePledgeSuccessMSGConfirmBtn = (event) =>{
        if(event){
            document.getElementById('back-this-project').style.backgroundColor = 'white';
            document.getElementById('pledgeSuccess').style.display = 'none';
            document.getElementById('default-modal').style.backgroundColor = 'white';
            document.getElementById('product-details-modal').style.backgroundColor = 'white';
            document.getElementById('stats-card').style.backgroundColor = 'white';
            document.getElementById('product-header').style.backgroundColor = 'white';
            document.getElementById('product-page').style.backgroundColor = 'hsla(0, 20%, 94%, 0.992)';
        }
    }
    return(
        <div id='pledgeSuccess'>
            <img id='successCheckIcon' alt='' src={checkIcon} /> <br />
            <h4 id='pledgeSuccessMSGHeader'>Thanks for your support!</h4>
            <p id='pledgeSuccessMSG'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <button type='button' id='pledgeSuccessMSGConfirmBtn' onClick={handlePledgeSuccessMSGConfirmBtn}>Got it!</button>
        </div>
    )
}

export default PledgeSucess;