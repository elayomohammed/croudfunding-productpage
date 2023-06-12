import '../stylesheets/productdetails.css';
import closeModalIcon from '../images/icon-close-modal.svg';
import ProductList from './ProductList';
import BackthisProject from './BackthisProject';
import PledgeSucess from './PledgeSucces';

const ProductDetails = () =>{
    const blackEditionStand = {
        name: 'Black Edition Stand',
        threshold: 'Pledge $75 or more',
        details: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        count: 64
    };
    const mahoganySpecialEdition = {
        name: 'Mahogany Special Edition',
        threshold: 'Pledge $200 or more',
        details: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        count: 0
    };
    const bambooStand = {
        name: 'Bamboo Stand',
        threshold: 'Pledge $25 or more',
        details: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        count: 101
    };
    const noReward = {
        name: 'Pledge with no reward',
        threshold: '',
        details: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        count: ''
    };

    const handleModalCloseBtn = (event) =>{
        if(event){
            document.getElementById('back-this-project').style.display = 'none';
            document.getElementById('default-modal').style.backgroundColor = 'white';
            document.getElementById('product-details').style.backgroundColor = 'white';
            document.getElementById('product-page').style.backgroundColor = 'hsla(0, 20%, 94%, 0.992)';
        }
    }
    return(
        <>
        <div id='product-details'>
            <h2 id='about-project-header'>About this project</h2>
            <p id='about-project-details' className='greyText'>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                <br /><br />
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <ProductList data={bambooStand} />
            <ProductList data={blackEditionStand} />
            <ProductList data={mahoganySpecialEdition} />
        </div>
        <div id='back-this-project'>
            <div id='title-and-closemodal-btn'>
                <h3 id='titlee' style={{marginBottom: '10px'}}>Back this project</h3>
                <img id='close-modal-icon' onClick={handleModalCloseBtn} src={closeModalIcon} alt='' />
            </div>
            <p style={{marginTop: '0px'}} className='greyText'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            <BackthisProject data={noReward} />
            <BackthisProject data={bambooStand} />
            <BackthisProject data={mahoganySpecialEdition} />
            <BackthisProject data={blackEditionStand} />
        </div>
            <PledgeSucess />
        </>
    )
}

export default ProductDetails;