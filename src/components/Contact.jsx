import React, { useState } from 'react';
import '../index.css';
import Footer from '../components/Footer';
import ChatButton from '../components/Chat';
import Accordian from '../components/Accordian';
import Feedback from '../components/Feedback';
import Layout from '../components/Layout';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle successful email send
    } else {
      // Handle error sending email
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className='iconcontainer'>
      <Layout></Layout>
      <h1>Contact Us</h1>
      <div className='icons-container'>
        <div className='icon-wrapper'>
          <div className='icons'>
            <i className='fas fa-envelope'></i>
            <h3>Our Email</h3>
            <a href='mailto:info@rdjbakeries.ca'>
              <p>info@rdjbakeries.ca</p>
            </a>
          </div>
        </div>

        <div className='icon-wrapper'>
          <div className='icons'>
            <i className='fas fa-phone'></i>
            <h3>Our Number</h3>
            <a href='tel:+15196234964'>+1 (519) 623-4964</a>
          </div>
        </div>

        <div className='icon-wrapper'>
          <div className='icons'>
            <i className='fas fa-map-marker-alt'></i>
            <h3>Our Address</h3>
            <p>50 HighRidge Court Cambridge, Ontario N1R 7L3</p>
          </div>
        </div>
      </div>
      <div class='container-wrapper'>
        <div className='contact'>
          <div className='contact-container'>
            <form onSubmit={handleSubmit}>
              <h1>Contact Us</h1>
              <label htmlFor='sender-name'>Sender Name:</label>
              <input
                id='sender-name'
                name='senderName'
                type='text'
                value={formData.senderName}
                onChange={handleChange}
              />

              <label htmlFor='sender-email'>Sender Email:</label>
              <input
                id='sender-email'
                name='senderEmail'
                type='email'
                value={formData.senderEmail}
                onChange={handleChange}
              />

              <label htmlFor='message'>Message:</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
              />

              <button type='submit'>Send Email</button>
            </form>
          </div>
        </div>
        <Feedback></Feedback>
      </div>

      <div className='accordian-container'>
        <Accordian></Accordian>
      </div>
      <ChatButton></ChatButton>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
