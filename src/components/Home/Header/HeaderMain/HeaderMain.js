import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './HeaderMain.css';
import profileImage from '../../../../images/profile.png';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Typical from 'react-typical'

const HeaderMain = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/contact');
    }
    return (
        <>
            <Row className="text-white mt-5 pt-4">
                <Col md={{ span: 5, offset: 1, order: 'last' }} className="mb-4">
                    <Image src={profileImage} alt="" fluid style={{width: '90%', height: '98%', marginLeft: '10px'}} />
                </Col>
                <Col md={{ span: 6, order: 'first' }}>
                    <p className="t-color">Hello, I'm</p>

                    {/* used for typing animation of text */}
                    <Typical
                        steps={['M', 1000, 'Muhammad Rifat', 500]}
                        loop={1}
                        wrapper="h2"
                    />
                    <ul type="square" className="d-flex mr-4">
                        <li className="t-color">React Developer | JavaScript Developer | Full Stack Developer</li>
                    </ul>
                    <p>I'm a full-stack developer with a vast array of knowledge in many different front-end and back-end
                    languages, responsive frameworks, databases, and best code practices. My objective is simply to be
                    the best developer that I can be and to contribute to the technology industry all that I know and can do.
                    </p>
                    <button className="btn btn-outline-light mt-3" onClick={handleClick}>Contact me</button>
                    <a className="btn btn-outline-light mt-3 ml-3" href="https://drive.google.com/uc?export=download&id=10kwb3yUSWT5EwEbTHq5JFWUzQHmf_v1C"><FontAwesomeIcon icon={faDownload} /> Download resume</a>
                </Col>
            </Row>
        </>
    );
};

export default HeaderMain;