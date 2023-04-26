import React from 'react';
import BannerSlider from './BannerSlider';
import about5 from '../assets/about5.png';
import about2 from '../assets/about2.jpg';
import about4 from '../assets/about4.png';
import { useLocation } from 'react-router-dom';

const pageImages = {
  about: [
    { id: 1, url: about5, alt: 'About Image 1' },
    { id: 2, url: about2, alt: 'About Image 2' },
    { id: 3, url: about4, alt: 'About Image 3' },
  ],
  product: [
    { id: 1, url: about2, alt: 'Product Image 1' },
    { id: 2, url: about4, alt: 'Product Image 2' },
    { id: 3, url: about5, alt: 'Product Image 3' },
  ],
  contact: [
    { id: 1, url: about2, alt: 'Contact Image 1' },
    { id: 2, url: about5, alt: 'Contact Image 2' },
  ],
};

const Layout = ({ children, height }) => {
  const location = useLocation();
  const page = location.pathname.split('/')[1];
  const images = pageImages[page] || pageImages.about;

  return (
    <div>
      <BannerSlider images={images} height={height} />
      {children}
    </div>
  );
};

export default Layout;
