import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

function UserDash() {
  const history = useNavigate();
  const [userData, setUserData] = useState({});
  const logout = () => {
    window.localStorage.clear();
    window.location.href = '/login';
  };

  useEffect(() => {
    fetch('http://localhost:5001/user-details', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        token: window.localStorage.getItem('token'),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data);
        console.log(data.data);
      });
  }, []);

  return (
    <>
      <div className='container user-dashboard'>
        <div className='row'>
          <h1 className='text-center'>Welcome to Dashboard</h1>
          <h5>User Details</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userData.fname}</td>
                <td>{userData.lname}</td>
                <td>{userData.email}</td>
                <td>
                  <button onClick={logout} className='btn btn-primary'>
                    Log Out
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default UserDash;
