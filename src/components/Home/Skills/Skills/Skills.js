import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faServer, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <Container className="mt-5 pt-4">
            <h2 className="text-center" style={{color:'cyan'}}>Skills Overview</h2>
            <Row className="justify-content-md-center text-white">
                <Col md={8}>
                    <p>
                    Below is a quick overview of my 
                    main technical skill sets and tools I use. Want to find out more about my experience? 
                    <Link to='/resume' style={{color:'cyan'}}> Check out my resume.</Link>
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4}>
                    <div className="bg-white p-2 mb-3 border rounded box">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faLaptopCode} size="4x" />
                            <h3 className="mt-3">Frontend</h3>
                        </div>
                        <div className="pl-5">
                            <p>
                                &#10004; React<br/>
                                &#10004; Javascript<br/>
                                &#10004; ES6<br/>
                                &#10004; Bootstrap/Tailwind CSS<br/>
                                &#10004; HTML5/CSS3/SASS<br/>
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="bg-white p-2 mb-3 border rounded box">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faServer} size="4x"  />
                            <h3 className="mt-3">Backend</h3>
                        </div>
                        <div className="pl-5">
                            <p>
                                &#10004; NodeJS<br/>
                                &#10004; ExpressJS<br/>
                                &#10004; PHP<br/>
                                &#10004; MongoDB<br/>
                                &#10004; MySQL/PostgreSQL<br/>
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="bg-white p-2 mb-3 border rounded box">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faAngleDoubleDown} size="4x" />
                            <h3 className="mt-3">Others</h3>
                        </div>
                        <div className="pl-5">
                            <p>
                                &#10004; Git<br/>
                                &#10004; Firebase<br/>
                                &#10004; Netlify<br/>
                                &#10004; Heroku<br/>
                                &#10004; Chrome Dev Tool<br/>
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;