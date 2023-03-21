// React Components
import React from 'react' 

// styles
import './Home.css';

// importing components
import HomeCarousel from '../../components/HomeCarousel'
import HomeFooter from '../../components/HomeFooter';


function Home() {
  const images = [
        'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1127119/pexels-photo-1127119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ];
  return (
    <>
    <div className="image-container">
    <HomeCarousel images={images} className="imageHome"/>
    <div className="wave"></div>
    </div>
    <div className='main-content p-5'>
    <h2 className='text-capitalize fs-1 fw-bold'>real estate management made easy</h2>
    <p>Kodi is a smart, all-in-one tool built to help you manage your real estate properties wherever you are.</p>

    </div>
    <HomeFooter/>
    </>
  )
}

export default Home