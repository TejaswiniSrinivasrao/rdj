import React from 'react';

const AllPostTable = (props) => {
  const { _id, title, location, description, datePosted } = props.jobs;

  async function handleDelete(id) {
    //e.preventDefault();

    fetch(`http://localhost:5001/job-delete/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.status);
      });
  }

  return (
    <tr>
      <td>{_id}</td>
      <td>{title}</td>
      <td style={{ maxWidth: '1000px', wordWrap: 'break-word' }}>
        {description}
      </td>
      <td>{location}</td>
      <td>{datePosted}</td>
      <td>
        <button>
          <a className='btn btn-primary' href={`/edit/${_id}`}>
            Edit
          </a>
        </button>
      </td>
      <td>
        <button className='btn btn-danger' onClick={() => handleDelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AllPostTable;
