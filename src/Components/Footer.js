import React from 'react';
import "../sass/css/Footer.css";

const Footer = () => {
    let date = new Date().getFullYear();

    return ( 
        <div className="foot-container">
            Shaun Elam {date}
        </div>
     );
}
 
export default Footer;