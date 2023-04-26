import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='address'>
        <p>50 HighRidge Court</p>
        <p>Cambridge, Ontario N1R 7L3</p>
        <p>Phone: +1 (519) 623-4964</p>
        <p>Email: info@rdjbakeries.ca</p>
      </div>
      <div class='links'>
        <ul className='footer-links'>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
          <li>
            <a href='/careers'>Careers</a>
          </li>
        </ul>
      </div>
      <div className='copy-right'>© 2023 All rights reserved</div>
    </footer>
  );
}

export default Footer;
