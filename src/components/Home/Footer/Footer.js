import React from 'react';

const Footer = () => {
    return (
        <div className="text-center p-2 mt-5" style={{backgroundColor:"rgb(0, 40, 0)"}}>
            <p className="mt-1 text-white">Designed & Developed by <a href="https://www.linkedin.com/in/rifat-mia/" target="_blank" style={{color:'cyan'}}>Muhammad Rifat</a> | {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;