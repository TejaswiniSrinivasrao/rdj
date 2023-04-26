import React from 'react';
import './App.css';
import {
  BrowserRouter as Switch,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Benefit from './components/Benefit';
import Careers from './components/Careers';
import Admin from './components/Admin';
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import AddJob from './components/AddJob';
import EditPost from './components/EditPost';
import UserDash from './components/UserDash';
import Dashboard from './components/Dashboard';
import Reset from './components/ResetComponent';
import FeedbackView from './components/FeedbackView';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import logo from './assets/logo.png';

function App() {
  const isLoggedIn = window.localStorage.getItem('loggedin');
  const admin = window.localStorage.getItem('admin');
  const [loggedIn, setLoggedIn] = React.useState(isLoggedIn === 'true');
  const UserPath = () => {
    if (isLoggedIn == 'true' && admin == 'true') {
      return (
        <Route
          path='/user'
          element={
            isLoggedIn == 'true' ? (
              <Dashboard />
            ) : (
              <Navigate replace to={'/login'} />
            )
          }
        />
      );
    } else if (isLoggedIn == 'true' && admin == 'false') {
      return (
        <Route
          path='/user'
          element={
            isLoggedIn == 'true' ? (
              <UserDash />
            ) : (
              <Navigate replace to={'/login'} />
            )
          }
        />
      );
    }
  };

  return (
    <Switch>
      <div className='App'>
        <nav className='navbar navbar-expand-lg navbar-light custom-bg bg-color fixed-top'>
          <div className='container-fluid order-lg-0'>
            <Link className='header-fixed' to='/'>
              <img src={logo} alt='logoImage' />
            </Link>
            <button
              className='navbar-toggler ms-auto'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='true'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon '></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/about'>
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/products'>
                    Products
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/benefit'>
                    Benefit Plan
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/careers'>
                    Careers
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/contact'>
                    Contact
                  </Link>
                </li>
                {loggedIn && (
                  <>
                    {admin === 'true' ? (
                      <>
                        <li className='nav-item'>
                          <Link className='nav-link' to='/admin'>
                            Hello, Admin{' '}
                            {window.localStorage.getItem('username')}
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link
                            className='nav-link'
                            to='/login'
                            onClick={() => {
                              window.localStorage.removeItem('loggedin');
                              setLoggedIn(false);
                            }}
                          >
                            Logout
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className='nav-item'>
                          <Link className='nav-link' to='/user'>
                            Hello, {window.localStorage.getItem('username')}
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link
                            className='nav-link'
                            to='/login'
                            onClick={() => {
                              window.localStorage.removeItem('loggedin');
                              setLoggedIn(false);
                            }}
                          >
                            Logout
                          </Link>
                        </li>
                      </>
                    )}
                  </>
                )}
                {!loggedIn && (
                  <li className='nav-item'>
                    <Link className='nav-link' to='/login'>
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div className='content-wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/benefit' element={<Benefit />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/products' element={<Products />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/add' element={<AddJob />} />
            <Route path='/edit/:id' element={<EditPost />} />
            <Route path='/register' element={<Register />} />
            <Route path='/reset' element={<Reset></Reset>} />
            <Route path='/feedbackview' element={<FeedbackView />} />
            <Route
              path='/login'
              element={
                isLoggedIn !== 'true' ? (
                  <Login />
                ) : (
                  <Navigate replace to={'/admin'} />
                )
              }
            />
            <Route path='/register' element={<Register />} />
            {/* <Route path='/user' element={UserPath} /> */}
            {UserPath()}
          </Routes>
        </div>
      </div>
    </Switch>
  );
}

export default App;
