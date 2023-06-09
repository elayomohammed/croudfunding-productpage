import '../stylesheets/productdetails.css';
import ProductList from './ProductList';

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
    return(
        <div id='product-details'>
            <h2 id='about-project-header'>About this project</h2>
            <p id='about-project-details'>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                <br /><br />
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <ProductList productdetails={bambooStand} />
            <ProductList productdetails={blackEditionStand} />
            <ProductList productdetails={mahoganySpecialEdition} />
        </div>
    )
}

export default ProductDetails;