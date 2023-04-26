import React from 'react';

const Delete = ({ jobs, deleteJob }) => {
  return (
    <ul className='list-group'>
      {jobs.map((job) => (
        <li className='list-group-item' key={job.id}>
          <h5>{job.jobTitle}</h5>
          <p>{job.jobDescription}</p>
          <button
            type='button'
            className='btn btn-danger btn-sm float-right'
            onClick={() => deleteJob(job.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Delete;
