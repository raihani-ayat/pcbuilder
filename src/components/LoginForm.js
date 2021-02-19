import React, { useState } from 'react';
import './Form.css';
import Login from './Login';
import { Redirect } from 'react-router';

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? (      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='images/circuit-board.svg' alt='circuit' />
        </div>
        <Login submitForm={submitForm} />
      </div> ) : (
          <Redirect to="/HomeSigned" />
      )}
    </>
  );
};

export default LoginForm;