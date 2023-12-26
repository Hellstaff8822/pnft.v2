import React, { useState } from 'react';
import authGoogle from '../assets/google.svg';
import { Button } from '../ui/Button';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="auth-form">
      <div className="auth-form__title">NFT Access</div>
      <div className="auth-form__desc">
        Please fill your details to access your account.
      </div>

      <div className="auth-form__inputs">
        <label>Email</label>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="inputField"
            placeholder="debra.holt@example.com"
          />
          <span onClick={() => setEmail('')}>
            <i className="fa-regular fa-circle-xmark"></i>
          </span>
        </div>

        <label>Password</label>
        <div className="form-group">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder=""
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="eyeicon" onClick={toggleShowPassword}>
            <i className={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>
          </span>
        </div>
      </div>

      <div className="auth-form__remember">
        <div className="auth-form__remembers">
          <input
            type="checkbox"
            className="custom-checkbox"
            id="rememberMe"
            name="rememberMe"
            value="yes"
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <a href="/" className="auth-form__forgot">
          Forgot Password?
        </a>
      </div>
      {/* <div className="auth-form__buttons">
         <Button className="btn" text="Sing in" />
        <button className="btn_primary">
          <img src={authGoogle} alt="" />
          Sign in with Google
        </button> 
        
        <div className="auth-form__text">
          Don’t have an account? <a href="/">Sign up</a>
        </div>
      </div> */}
      <div className="auth-form__buttons">
      <Button text="Sign in" />
      <Button text="Sign in with Google"  className="btn_primary">
        <img src={authGoogle} alt="" />
      </Button>
      <div className="auth-form__text">
        Don’t have an account? <a href="/">Sign up</a>
      </div>
    </div>
    </form>
  );
};

export default Form;
