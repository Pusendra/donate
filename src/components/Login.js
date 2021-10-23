import React, { useState } from 'react';
import '../css/login.css';
import { login, registerUser } from '../services/Services';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { setLocalStorageItem } from '../utils/localStorage';
import useLocalStorage from '../customHooks/useLocalStorage';
import { useLoginContext } from '../Contexts/loginContext';

const Login = () => {
  let history = useHistory();
  const { loginValues, setLoginValues, setData } = useLoginContext();
  const [isSignIn, setIsSign] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
    password: '',
    userTypeId: 1
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleChangeSignIn = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formValues)
      .then((res) => {
        console.log('🚀 ~ file: Login.js ~ line 31 ~ .then ~ res', res);
        if (res.data.statusMessage) {
          toast.error(res.data.statusMessage, {
            position: toast.POSITION.TOP_RIGHT
          });
        }
        if (res.data.id) {
          toast.success('User Registered Successfully. Go to login page.', {
            position: toast.POSITION.TOP_RIGHT
          });
          setFormValues(initialValues);
          setIsSignUp(false);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT
        });
      });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    login(loginValues)
      .then((res) => {
        if (res.data.statusMessage) {
          toast.error(res.data.statusMessage, {
            position: toast.POSITION.TOP_RIGHT
          });
        }
        if (res.data.id) {
          // setLocalStorageItem('user_details', {
          //   id: res.data.id,
          //   typeName: res.data.typeName
          // });
          setData({
            id: res.data.id,
            typeName: res.data.typeName
          });

          toast.success('User Successfully Logged In', {
            position: toast.POSITION.TOP_RIGHT
          });
          setLoginValues({ email: '', password: '' });
          history.push('/profile');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT
        });
      });
  };

  return (
    <div className="login-body ">
      <div
        className={`login-container ${isSignUp ? 'right-panel-active' : ''}`}
        id="login-container"
      >
        <div className="form-login-container sing-up-login-container">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={formValues.firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={formValues.lastName}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formValues.email}
            />
            <input
              type="number"
              placeholder="Mobile"
              name="mobile"
              onChange={handleChange}
              value={formValues.mobile}
              minlength="10"
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleChange}
              value={formValues.address}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={formValues.password}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-login-container sing-in-login-container">
          <form onSubmit={handleSignInSubmit}>
            <h1>Sign In</h1>
            <input
              type="email"
              placeholder="Email"
              value={loginValues?.email}
              name="email"
              onChange={handleChangeSignIn}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginValues?.password}
              name="password"
              onChange={handleChangeSignIn}
            />
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="overlay-login-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connectied with up please login with your personal info
              </p>
              <button
                className="devingine"
                id="signIn"
                onClick={() => {
                  setIsSign(true);
                  setIsSignUp(false);
                }}
              >
                Sign In
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us.</p>
              <button
                className="devingine"
                id="signUp"
                onClick={() => {
                  setIsSign(false);
                  setIsSignUp(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
