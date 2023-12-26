import React from 'react';
import './scss/_base.scss';
import authImg from './assets/dragon.png';
import { Header } from './components/Header';
import Form from './components/Form';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="container">
      <div className="auth">
        <div className="auth-info">
          <Header />
          <Form />
          <Footer />
          <div className="auth-indicator"></div>
        </div>

        <div className="auth-img">
          <img src={authImg} alt="bg" />
        </div>
        <a href="/" className="auth-indicator"></a>
      </div>
      
    </div>
  );
}

export default App;
