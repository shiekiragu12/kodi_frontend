import React, { useState, useEffect } from 'react';

function HomeCarousel({ images }) {
 //Setting up the image 
const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 50000); //changing after 10 seconds

return () => {
        clearInterval(timer);
      };
    }, [currentImage, images.length]);    
// end of image setup

  return (
    <div>
    <img src={images[currentImage]} alt="Kodi Nyumba" className='imageHome' />
  </div> 
    )
}

export default HomeCarousel