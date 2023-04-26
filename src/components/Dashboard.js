import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllPostTable from '../components/AllPostTable';

function PostTable() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/all-job')
      .then((res) => res.json())
      .then((data) => setJobs(data.jobs));
  }, [jobs]);

  async function handleLogout() {
    window.localStorage.clear();
    window.location.href = '/login';
  }

  return (
    <div className='topcontainer'>
      <Container>
        <Row>
          <Col>
            <Button className='btn btn-success'>
              <Link to='/add' className='text-white text-decoration-none'>
                Add
              </Link>
            </Button>
            <Button className='btn btn-primary'>
              <Link
                to='/feedbackview'
                className='text-white text-decoration-none'
              >
                Feedback
              </Link>
            </Button>
            <Button className='btn btn-danger' onClick={handleLogout}>
              Logout
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table className='table' striped hover variant='primary'>
              <thead>
                <th scope='col'>ID</th>
                <th scope='col'>Title</th>
                <th scope='col'>Description</th>
                <th scope='col'>Location</th>
                <th scope='col'>DatePosted</th>
                <th scope='col'>Action</th>
                <th scope='col'></th>
              </thead>
              <tbody>
                {jobs.map((singlePost) => (
                  <AllPostTable jobs={singlePost}></AllPostTable>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PostTable;
