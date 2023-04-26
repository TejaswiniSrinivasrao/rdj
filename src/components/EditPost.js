import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [datePosted, setdatePosted] = useState('');
  const path = window.location.pathname;
  const parts = path.split('/');
  const id = parts[parts.length - 1];
  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5001/job/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.jobs);
        setJobDetails(data.jobs);
        // toast(data.status);
      });

    console.log('posted');
  }, []);

  const editPost = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5001/edit/${id}`, {
      method: 'PUT',
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
        console.log(data.status);
        console.log(data.posts);
        window.location.replace('/admin');
        // toadata.status);
      });

    console.log('posted');
  };

  return (
    <div className='about-container'>
      {
        <div className='addstyle'>
          <form onSubmit={editPost} className='round'>
            <div class='form-group'>
              <Form.Label htmlFor='dateofpost' className='form-label mt-4'>
                Title
              </Form.Label>{' '}
              <input
                type='text'
                className='form-control'
                placeholder={jobDetails.title}
                onChange={(e) => setTitle(e.target.value)}
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
                placeholder={jobDetails.description}
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
                placeholder={jobDetails.location}
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
                placeholder={jobDetails.datePosted}
                onChange={(e) => {
                  setdatePosted(e.target.value);
                }}
              />
            </div>
            <div class='full-width'>
              <button type='submit' className='btn btn-primary'>
                Edit Post
              </button>
            </div>
          </form>
        </div>
      }
    </div>
  );
}

export default Add;
