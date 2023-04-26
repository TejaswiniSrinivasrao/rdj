import '../App.css';
import logo from '../assets/logo.png';
import crackers from '../assets/crackers.jpg';
import Chatbutton from '../components/Chat';
import Footer from '../components/Footer';
import innovation from '../assets/innovation.gif';
import customer from '../assets/creative.gif';
import global from '../assets/global.gif';
import React, { useState, useEffect } from 'react';

function App() {
  const [headerText, setHeaderText] = useState('');
  const text = 'Welcome to RDJ Bakeries Ltd.';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(interval);
        return;
      }

      setHeaderText(text.substring(0, currentIndex + 1));
      currentIndex++;
    }, 50);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='App'>
      <div className='header'>
        <img src={crackers} alt='HeaderImage' />
        <h2 className='headertext'>{headerText}</h2>
        <h3 className='bakers'>We are Bakers First!</h3>
        <button className='btn'>
          <a href='/about' style={{ textDecoration: 'none' }}>
            About Us
          </a>
        </button>
        <a href='#header-container' class='scroll-button'>
          <i class='fa fa-angle-down'></i>
        </a>
      </div>

      <div id='header-container' className='header-down'>
        <div className='divcontainer'>
          <div className='row'>
            <div className='col-lg-6'>
              <h2 className='headerstyle'>{headerText}</h2>
              <p className='lead1'>
                We are passionate about creating high-quality cracker products
                that meet the needs of our customers. As an international leader
                in cracker manufacturing, we have extensive experience working
                with our retail partners to develop innovative private-label
                cracker varieties that offer exceptional value to consumers.
              </p>
            </div>
            <div className='col-lg-6 d-flex align-items-center justify-content-center'>
              <img
                src={innovation}
                alt='Innovation gif'
                className='img-fluid'
              />
            </div>
          </div>
          <div className='divcontainer1'>
            <div className='row'>
              <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <img
                  src={customer}
                  alt='Innovation gif'
                  className='img-fluid'
                />
              </div>
              <div className='col-lg-6'>
                <p className='lead'>
                  Our team of experts in the innovation department closely
                  monitors consumer preferences and trends in the category to
                  ensure that our products are always ahead of the curve. We
                  believe that by collaborating with our partners, we can create
                  the perfect combination of segment, occasion, and flavor to
                  meet the unique needs of our client’s consumers.
                </p>
              </div>
            </div>
          </div>
          <div className='divcontainer'>
            <div className='row'>
              <div className='col-lg-6'>
                <p className='lead2'>
                  Our expertise in cracker manufacturing extends beyond Canada,
                  as we are trusted globally in multiple customer and product
                  segments. We are proud to export our wide range of delicious
                  baked goods to the United States, the United Kingdom, Europe,
                  and Australia.
                </p>
                <p className='lead1'>
                  At RDJ Bakeries Ltd., we are bakers first and foremost. Our
                  product and packaging capabilities allow us to create custom
                  solutions that meet the highest standards of quality and
                  taste. Whether you are looking for a simple cracker or a
                  complex, multi-flavored variety, our team is ready to help you
                  achieve your goals. Contact us today to learn more about how
                  we can help you create the perfect cracker for your needs.
                </p>
              </div>
              <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <img src={global} alt='Innovation gif' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Chatbutton></Chatbutton>
      <Footer></Footer>
    </div>
  );
}

export default App;
