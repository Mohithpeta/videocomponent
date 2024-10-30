import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle email/password login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', formData);
      console.log('Response:', response.data);

      // Store the access token and navigate to homepage
      localStorage.setItem('accessToken', response.data.accessToken);
      navigate('/HomePage');
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  // Handle Google login success
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post('http://localhost:5000/auth/google/callback', {
        idToken: credentialResponse.credential, // Send idToken to backend
      });

      // Store JWT token from backend and navigate to homepage
      const { accessToken } = res.data;
      localStorage.setItem('accessToken', accessToken);
      navigate('/HomePage'); // Adjusted navigation
    } catch (error) {
      console.error('Google Sign-in Error:', error.response?.data || error.message);
      alert('Google sign-in failed. Please try again.');
    }
  };

  // Handle Google login error
  const handleGoogleError = (error) => {
    console.error('Google Sign-in Error:', error);
    alert('Google Sign-in failed. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId='890897044907-mbdfr89gjjk8jv2firng89p7bn7vf7hn.apps.googleusercontent.com'>
      <StyledWrapper>
        <div className='container'>
          <div className='hero'>
            <form onSubmit={handleSubmit} className='form'>
              <div className='logo'>DeepVital</div>
              <input
                type='email'
                name='email'
                id='email'
                required
                className='input'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type='password'
                name='password'
                id='password'
                required
                className='input'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
              />
              <input type='submit' value='Log in' className='input submit' />
              <div className='or'>or</div>
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap // This enables Google One Tap sign-in, optional
                auto_select={false}
                style={{ marginTop: '20px' }}
              />
              <div className='footer'>
                <p>Dont have an account?</p>
                <Link to='/signup' className='signup-link'>Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </StyledWrapper>
    </GoogleOAuthProvider>
  );
};

// Styled components for layout and styling
const StyledWrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f4f4;
  }

  .hero {
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }

  .logo {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  .input.submit {
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .input.submit:hover {
    background-color: #0056b3;
  }

  .or {
    margin: 20px 0;
    font-size: 14px;
    color: #666;
  }

  .footer {
    margin-top: 20px;
    font-size: 14px;
  }

  .signup-link {
    color: #007BFF;
    text-decoration: none;
  }
`;

export default GoogleLoginButton;
