import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Chatbutton from '../components/Chat';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    fetch('http://localhost:5001/login', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        }
        if (data.status == 'ok') {
          alert('Login Successful');

          window.localStorage.setItem('token', data.data);
          window.localStorage.setItem('loggedin', 'true');
          window.localStorage.setItem('admin', data.admin);
          window.location.href = '/user';
        }
      });
  }

  return (
    <div>
      <Layout></Layout>
      <section className='loginForm '>
        <div className='container py-10 my-7 mx-7'>
          <div className='row no-gutters'>
            <div className='col-lg-8 px-6 pt-6'>
              <h1 className='font-weight-bold py-3'> Welcome Back!</h1>
              <h2>Login into your account</h2>
              <form>
                <div className='form-row'>
                  <div className='col-lg-10'>
                    <input
                      name='email'
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                      type={'email'}
                      placeholder='Enter your email'
                      className='form-control my-3 p-2'
                    ></input>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='col-lg-10'>
                    <input
                      name='password'
                      value={password}
                      type={'password'}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder='Enter your Password'
                      className='form-control my-3 p-2'
                    ></input>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='col-lg-10'>
                    <button
                      type='submit'
                      className='btn1 mt-3 mb-3'
                      onClick={submit}
                    >
                      Login
                    </button>
                  </div>
                </div>
                <a href='/reset'>Forgot Password</a>
                <p>
                  New user? <a href='/register'>Register here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <Chatbutton></Chatbutton>
      </section>
      <Footer></Footer>
    </div>
  );
}
export default Login;
