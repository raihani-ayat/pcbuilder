import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Congratulations, all you have to do now is log in!</h1>
      <img className='form-img-2' src='images/clap.svg' alt='success' />
    </div>
  );
};

export default FormSuccess;