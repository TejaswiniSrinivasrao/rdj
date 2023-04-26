import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Chatbutton from '../components/Chat';
import CompanyInfo from '../components/CompanyInfo';
import CareerInfo from '../components/CareerInfo';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/all-feedback`)
      .then((res) => res.json())
      .then((data) => setFeedbacks(data.feedbacks));
  }, [feedbacks]);

  return (
    <div className='topcontainer'>
      <Layout></Layout>

      <h1>Feedbacks</h1>
      <Button className='btn btn-primary'>
        <Link to='/admin' className='text-white text-decoration-none'>
          Back to admin
        </Link>
      </Button>
      {feedbacks.map((feedback) => (
        <div key={feedback.id} className='feedback-container'>
          <div className='feedback-title'>
            <h2>{feedback.name}</h2>
          </div>
          <p className='feedback-message'>{feedback.message}</p>
          <p className='feedback-email'>{feedback.email}</p>
        </div>
      ))}

      <Chatbutton></Chatbutton>
      <Footer></Footer>
    </div>
  );
};

export default Feedback;
