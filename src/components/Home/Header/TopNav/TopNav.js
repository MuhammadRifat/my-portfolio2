import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <div className="mr-auto">
                <a href="https://github.com/MuhammadRifat" target="_blank"><FontAwesomeIcon icon={faGithub} className="ml-4 social" /></a>
                <a href="https://www.linkedin.com/in/rifat-mia/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="ml-4 social" /></a>
                <a href="https://hrifat450.medium.com/" target="_blank"><FontAwesomeIcon icon={faMedium} className="ml-4 social" /></a>
                <a href="https://twitter.com/Muhamma62094989" target="_blank"><FontAwesomeIcon icon={faTwitter} className="ml-4 social" /></a>
                <a href="https://web.facebook.com/profile.php?id=100012091483742" target="_blank"><FontAwesomeIcon icon={faFacebook} className="ml-4 social" /></a>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="link" id="home" to="/home">Home </Link>
                    <Link className="link" id="projects" to="/projects">Projects </Link>
                    <Link className="link" id="blog" to="/blog">Blog </Link>
                    <Link className="link" id="contact" to="/contact">Contact </Link>
                    <Link className="link" id="achievement" to="/achievement">Achievement </Link>
                    <Link className="link" id="resume" to="/resume">Resume </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;