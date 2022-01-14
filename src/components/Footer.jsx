// Importing Libraries
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import footer_logo from '../assets/img/logo2.png';


const Footer= () => {
  return (
      <Fragment>
    
    <div className="forma footer">
            <div className="forma t_center mar_t_3 mar_b_3"><img src={footer_logo} className="logo_footer" /></div>        
        </div>
</Fragment>
  );
 }


// Exporting component
export default Footer;
