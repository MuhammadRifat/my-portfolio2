import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import resume from "../../files/Rifat's_Resume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Resume = () => {
    return (
        <Container className="mt-4">
            <Row className="mb-2">
                <Col>
                <h2 style={{ color: 'cyan' }}>My Resume</h2>
                </Col>
                <Col className="text-right">
                    <a className="btn btn-outline-light" href="https://drive.google.com/uc?export=download&id=1MXJ-r1YErGcYmTYspCAt3cwtM7fRxeh2"><FontAwesomeIcon icon={faDownload} /> Download resume</a>
                </Col>
            </Row>

            {/* viewing pdf file of my resume */}
            <embed src={resume} width="100%" height="2100px" frameBorder="0" />
        </Container>
    );
};

export default Resume;