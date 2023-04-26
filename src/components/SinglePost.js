import React, { useEffect, useState } from 'react';

function SinglePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [datePosted, setdatePosted] = useState('');
  const [jobDetails, setJobDetails] = useState({});
  const path = window.location.pathname;
  const parts = path.split('/');
  const id = parts[parts.length - 1];
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5001/single-post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        setTitle(data.jobs.title);
        setDescription(data.jobs.description);
        // toast(data.status);
      });
    console.log('posted');
  }, []);

  return (
    <>
      <div className='post-details'>
        <div className='post-image'></div>
        <div className='post-content'></div>
      </div>
    </>
  );
}

export default SinglePost;
