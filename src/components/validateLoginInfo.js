export default function validateInfo(values) {
    let errors = {};

    if (!values.email) {
      errors.email = 'Email address is invalid';
    } 
    if (!values.password) {
      errors.password = 'Password is invalid';
    } 
    return errors;
  }