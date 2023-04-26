import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Chatbutton from '../components/Chat';
import CompanyInfo from '../components/CompanyInfo';
import CareerInfo from '../components/CareerInfo';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [showEmail, setShowEmail] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleClick = () => {
    setShowEmail(true);
  };

  const handleTitleClick = (job) => {
    setSelectedJob(job);
    setShowDescription(!showDescription);
  };

  useEffect(() => {
    fetch(`http://localhost:5001/all-job`)
      .then((res) => res.json())
      .then((data) => setJobs(data.jobs));
  }, []);

  return (
    <div className='topcontainer'>
      <Layout></Layout>
      <h1>Job Postings</h1>

      {jobs.map((job) => (
        <div key={job.id} className='job-container'>
          <div className='job-title' onClick={() => handleTitleClick(job)}>
            <h2>{job.title}</h2>
            <button className='apply-button' onClick={handleClick}>
              Apply Now
            </button>
            {showEmail && (
              <div className='ribbon-notification'>
                <p>Email: {`talentacquistion@rdjbakeries.ca`}</p>
                <button
                  className='apply-button'
                  onClick={() => setShowEmail(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
          {showDescription && job === selectedJob && (
            <p className='job-description'>{job.description}</p>
          )}
          <p className='job-location'>Location: {job.location}</p>
        </div>
      ))}
      <div>
        <CompanyInfo></CompanyInfo>
      </div>
      <div>
        <CareerInfo></CareerInfo>
      </div>

      <Chatbutton></Chatbutton>
      <Footer></Footer>
    </div>
  );
};

export default Careers;
