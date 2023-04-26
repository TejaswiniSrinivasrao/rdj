import React from 'react';
import benefit from '../assets/Benefit-Plan-Forms.pdf';
import Chatbutton from '../components/Chat';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const DownloadFile = () => {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = { benefit };
    link.download = { benefit };
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='benefit'>
      <Layout></Layout>
      <div className='benefitcontainer'>
        <div className='description'>
          <h2>RDJ Bakeries Ltd. Employee Benefits</h2>
          <p>
            RDJ Bakeries Ltd. is committed to the well-being of its team and has
            invested in a Chambers Plan for Employee Benefits. This plan will
            cover medical and dental health services for the team and their
            dependents, many of which are not covered by traditional benefit
            plans.
            <br />
            <br />
            <a href={benefit} download>
              Download Benefit Plan Forms
            </a>
          </p>
        </div>
        <div className='frameplan'>
          <iframe
            title='benefit plan'
            src={benefit}
            width='60%'
            height='600px'
            style={{ border: '1' }}
          ></iframe>
        </div>
      </div>
      <Chatbutton></Chatbutton>
      <Footer></Footer>
    </div>
  );
};

export default DownloadFile;
