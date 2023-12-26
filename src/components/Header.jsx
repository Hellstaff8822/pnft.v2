import React from 'react'
import authLogo from '../assets/logo.svg'

export const Header = () => {
  return (
    <a routerLink="/" className="auth-header">
    <div lassName="auth-header__logo">
        <img src={authLogo} alt="Logo"/>
    </div>
    <div lassName="auth-header__text">PNFT Market</div>
  </a>
  )
}
