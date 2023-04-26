import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [datePosted, setdatePosted] = useState('');

  const addPost = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5001/add-job`, {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        title,
        description,
        location,
        datePosted,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.status);
        window.location.replace('/admin');
        //toast(data.status);
      });

    console.log('posted');
  };

  return (
    <div className='about-container'>
      {
        <div className='addstyle'>
          <form
            onSubmit={addPost}
            encType='multipart/form-data'
            className='form-outline mb-4'
          >
            <div class='form-group'>
              <Form.Label htmlFor='title' className='form-label mt-4'>
                Title
              </Form.Label>{' '}
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div class='form-group'>
              <Form.Label htmlFor='posttype' className='form-label mt-4'>
                Description:
              </Form.Label>
              <textarea
                type='text'
                className='form-control'
                cols='50'
                rows='6'
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div class='form-group'>
              <Form.Label htmlFor='location' className='form-label mt-4'>
                Location
              </Form.Label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </div>
            <div class='form-group'>
              <Form.Label htmlFor='datePosted' className='form-label mt-4'>
                DatePosted:
              </Form.Label>
              <input
                type='date'
                className='form-control'
                onChange={(e) => {
                  setdatePosted(e.target.value);
                }}
              />
            </div>

            <div class='form-check d-flex justify-content-center mb-4'>
              <button type='submit' className='btn btn-primary'>
                Add Job
              </button>
            </div>
          </form>
        </div>
      }
    </div>
  );
}

export default Add;
