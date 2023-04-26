import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Chatbutton from '../components/Chat';
import gmo from '../assets/GMO.jpg';
import brc from '../assets/BRC.jpg';
import ifs from '../assets/IFS.jpg';
import kosher from '../assets/Kosher.jpg';
import nutfree from '../assets/nutfree.jpg';
import organic from '../assets/Organic.jpg';

const About = () => {
  return (
    <div>
      <div className='topcontainer'>
        <Layout></Layout>
        <div className='about-container'>
          <h1>About Us</h1>
          <section id='about-us'>
            <div className='container'>
              <h2>About RDJ Bakeries Ltd.</h2>
              <ul className='aboutlist'>
                <li>
                  <i className='fas fa-star'></i>
                  <p>Driven by quality and innovation</p>
                </li>
                <li>
                  <i className='fas fa-users'></i>
                  <p>Hyper focused on our customers and associates</p>
                </li>
                <li>
                  <i className='fas fa-cog'></i>
                  <p>Built for flexibility, efficiency, and speed to market</p>
                </li>
                <li>
                  <i className='fas fa-birthday-cake'></i>
                  <p>Positioned to craft a variety of delicious baked goods</p>
                </li>
              </ul>
            </div>
          </section>

          <section id='facility'>
            <div className='container'>
              <h2>Our Facility</h2>
              <ul className='aboutlist'>
                <li>
                  <div className='image'>
                    <img src={brc} alt='BRC Accreditation' />
                  </div>
                  <div className='description'>
                    <h3>BRC Accredited</h3>
                    <p>
                      We're proud to have achieved BRC accreditation, which
                      recognizes our commitment to producing safe, high-quality
                      food products. This certification is a testament to our
                      dedication to quality and safety.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='image'>
                    <img src={ifs} alt='Grade A Certification' />
                  </div>
                  <div className='description'>
                    <h3>Grade A Certified</h3>
                    <p>
                      We've earned a Grade A certification, which is the highest
                      possible rating for food safety and quality. This
                      certification is a reflection of our unwavering commitment
                      to producing top-notch baked goods.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='image'>
                    <img src={nutfree} alt='Nut-Free Facility' />
                  </div>
                  <div className='description'>
                    <h3>Nut-Free</h3>
                    <p>
                      Our facility is completely nut-free, which means you can
                      enjoy our products with confidence, even if you have a nut
                      allergy. We take allergen control seriously and are
                      committed to keeping our products safe for all customers.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='image'>
                    <img src={organic} alt='Organic Certification' />
                  </div>
                  <div className='description'>
                    <h3>Organic-Certified</h3>
                    <p>
                      We're proud to offer a range of organic baked goods that
                      meet the highest standards for organic certification. Our
                      organic ingredients are carefully sourced and our
                      production process is designed to ensure that our products
                      are as healthy and environmentally friendly as possible.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='image'>
                    <img src={gmo} alt='Non-GMO Project Verified' />
                  </div>
                  <div className='description'>
                    <h3>Non-GMO Project Verified (available)</h3>
                    <p>
                      Many of our products are Non-GMO Project Verified, which
                      means they meet the highest standards for GMO avoidance.
                      We believe in transparency and want our customers to know
                      exactly what they're eating, which is why we're committed
                      to providing non-GMO options whenever possible.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='image'>
                    <img src={kosher} alt='Kosher Certification' />
                  </div>
                  <div className='description'>
                    <h3>Certified by the Kosher Orthodox Union as Dairy</h3>
                    <p>
                      We're proud to offer a range of baked goods that are
                      certified kosher by the Orthodox Union. This certification
                      ensures that our products meet the highest standards for
                      purity and quality, and can be enjoyed by customers who
                      follow kosher dietary laws.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className='team'>
            <div className='container'>
              <h2>Our team of experts</h2>
              <p>
                is skilled in{' '}
                <span className='emphasis'>
                  innovation, product development,
                </span>{' '}
                and crafting a wide variety of delicious crackers. We pride
                ourselves on the{' '}
                <span className='advantage'>RDJ advantage</span>, which is our
                focus on research and development, ensuring that we continuously
                make a better cracker.
              </p>
              <p>
                At RDJ Bakeries Ltd., we are{' '}
                <span className='emphasis'>
                  built for flexibility, efficiency, and speed to market.
                </span>{' '}
                Our commitment to{' '}
                <span className='emphasis'>quality and innovation</span> has
                earned us a reputation for being{' '}
                <span className='emphasis'>
                  hyper-focused on our customers and associates.
                </span>{' '}
                We are <span className='emphasis'>passionate</span> about our
                craft and dedicated to delivering{' '}
                <span className='emphasis'>
                  exceptional products that exceed our customers' expectations.
                </span>
              </p>
            </div>
          </section>

          <section className='aboutcontact'>
            <div className='container'>
              <h2>Contact us today</h2>
              <p>
                to learn more about how we can support your business with our
                skills and expertise in the cracker manufacturing industry.
              </p>
              <a href='/contact'>Get in touch</a>
            </div>
          </section>
        </div>
        <Chatbutton></Chatbutton>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default About;
