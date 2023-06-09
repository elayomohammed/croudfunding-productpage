import './App.css';
import DefaultModal from './resources/components/DefaultModal';
import desktopHeaderIMG from '../src/resources/images/image-hero-desktop.jpg';
import mobileHeaderIMG from '../src/resources/images/image-hero-mobile.jpg';
import openMenuIcon from './resources/images/icon-hamburger.svg';
import closeMenuIcon from './resources/images/icon-close-menu.svg';

//handling menu button click
const handleOpenMenuClick = (event) =>{
  if(event){
    document.getElementById('navigation').style.display = 'flex';
    document.getElementById('open-menu-icon').style.display = 'none';
    document.getElementById('close-menu-icon').style.display = 'block';
  }
}
const handleCloseMenuClick = (event) =>{
  if(event){
    document.getElementById('navigation').style.display = 'none';
    document.getElementById('close-menu-icon').style.display = 'none';
    document.getElementById('open-menu-icon').style.display = 'block';
  }
}
const App = () => {
  return (
    <div id="product-page">
      <header id="product-page-header">
        <img id='desktopHeaderIMG' src={desktopHeaderIMG} alt='' />
        <img id='mobileHeaderIMG' src={mobileHeaderIMG} alt='' />
        <div id='title-and-menu-btn'>
          <p id='title'>croudfund</p>
          <div id='menu-btn'>
            <li id='open-menu-icon' onClick={handleOpenMenuClick}><img src={openMenuIcon} alt='menu-btn' /></li>
            <li id='close-menu-icon' onClick={handleCloseMenuClick}><img src={closeMenuIcon} alt='menu-btn' /></li>
          </div>
        </div>
      </header>
      <DefaultModal />
      <nav id='navigation'>
          <a href='#incoming'><li className='navigation-links'>About</li><hr className='nav-hr' /></a>
          <a href='#incoming'><li className='navigation-links'>Discover</li><hr className='nav-hr' /></a>
          <a href='#incoming'><li className='navigation-links'>Get Started</li></a>
      </nav>
    </div>
  );
}

export default App;
