import React from 'react';
import logo from './logoImage/logo_size.jpg'; // Tell webpack this JS file uses this image
import './logoImage/logoImage.css'

console.log(logo); // /logo.84287d09.png

function ImgLogo() {
  
  return <a href="/"><img className='imgLogo' src={logo} alt="Logo" /></a> ;
}
export default ImgLogo;

