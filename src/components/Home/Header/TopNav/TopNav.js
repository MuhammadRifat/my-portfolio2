import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <a href="https://github.com/MuhammadRifat"><FontAwesomeIcon icon={faGithub} className="ml-4 social" /></a>
                    <a href="https://www.linkedin.com/in/muhammad-rifat-7bb833185/"><FontAwesomeIcon icon={faLinkedinIn} className="ml-4 social" /></a>
                    <a href="https://www.medium.com"><FontAwesomeIcon icon={faMedium} className="ml-4 social" /></a>
                    <a href="https://twitter.com/Muhamma62094989"><FontAwesomeIcon icon={faTwitter} className="ml-4 social" /></a>
                    <a href="https://web.facebook.com/profile.php?id=100012091483742"><FontAwesomeIcon icon={faFacebook} className="ml-4 social" /></a>
                </Nav>
                <Nav className="ml-auto">
                    <Link className="link" to="/about">About me </Link>
                    <Link className="link" to="/projects">Projects </Link>
                    <Link className="link" to="/blog">Blog </Link>
                    <Link className="link" to="/contact">Contact </Link>
                    <Link className="link" to="/resume">Resume </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;