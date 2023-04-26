import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Chatbutton from '../components/Chat';
import about5 from '../assets/logo.png';
import about4 from '../assets/about4.png';

const Products = () => {
  return (
    <div>
      <div className='topcontainer'>
        <Layout></Layout>
        <div className='productcontainer'>
          <div className='overview'>
            <h2>
              <i class='fas fa-chart-line'></i>Overview
            </h2>
            <p>
              At RDJ Bakeries, we are driven by quality and innovation, with a
              hyper-focus on our customers and associates. We are built for
              flexibility, efficiency, and speed to market, and we are
              positioned to craft a variety of delicious baked goods. Our goal
              is to support our retail partners around the globe in establishing
              a high-value cracker offering that elevates the category for their
              customers through quality and innovation.
            </p>
          </div>
          <div className='facility'>
            <div className='product'>
              <div>
                <h2>
                  <i class='fas fa-building'></i>Facility
                </h2>
                <p>
                  Our 250,000 sq ft facility is BRC accredited, grade A
                  certified, nut-free, organic-certified, and Non-GMO project
                  verified (available). Additionally, our products are certified
                  by the Kosher Orthodox Union as dairy.
                </p>
                <ul class='tick-list'>
                  <li>BRC Accreditation – Grade A Certified</li>
                  <li>Nut-free and organic certified</li>
                  <li>Non-GMO Project Verified</li>
                  <li>Kosher Orthodox Union – Dairy certified</li>
                </ul>

                <p>
                  We offer packaging versatility, the ability to pack any
                  cracker to meet brand standards and deliver consistent quality
                  from the oven to the table. Our assortment packs, smaller
                  portion packs, and re-sealable options provide additional
                  convenience to consumers.
                </p>
              </div>
            </div>
          </div>
          <div className='overview'>
            <h2>
              <i class='fas fa-cogs'></i>Our Skills
            </h2>
            <p>
              Innovation is at the core of our business, and we pride ourselves
              in our research and development capabilities. With over 30 years
              of success in growing cracker categories and global operational
              and market expertise, we have earned the privilege to work with
              top global retail brands. As a "single-source solution provider,"
              we offer consistency in supply, pride ourselves in supporting our
              customer’s success, and provide fast, flexible partnerships in
              development.
            </p>
          </div>
          <div className='overview1'>
            <h2>
              <i class='fas fa-briefcase'></i>
              How We Work
            </h2>
            <p>
              At RDJ Bakeries, we believe in earning our clients’ confidence and
              delivering results. We invest in consumer insight to understand
              where market opportunities are and leverage category data to
              support category management initiatives. Our strong innovation
              pipeline and efficient core business anticipate and invest in
              capabilities to support growth. We work collaboratively to earn
              the confidence of our partners through a 24-month planning
              calendar and are trusted around the globe.
            </p>
          </div>
          <div className='overview'>
            <h2>
              <i class='fas fa-flask'></i>Research &{' '}
              <i class='fas fa-lightbulb'></i>Development
            </h2>
            <p>
              Our dedication to innovation and product development is what sets
              us apart. Our R&D team supports our customers through speed,
              flexibility, and a solid partnership throughout the development
              process. Whatever the vision, our R&D team is always available to
              ensure your product is reaching your goals for success. Through
              collaboration with our R&D team and utilizing our experience in
              cracker baking technologies and techniques, our test kitchen is
              where your ideas and innovations are first tested and brought to
              life.
            </p>
          </div>
        </div>
        <Chatbutton></Chatbutton>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Products;
