import React from 'react';
import { Container } from 'react-bootstrap';
import resume from "../../files/Rifat's_Resume.pdf";

const Resume = () => {
    return (
        <Container className="mt-3">
            <h2 className="pb-2 text-center" style={{borderBottom:'2px solid cyan', color:'cyan'}}>My Resume</h2>
            <embed src={resume} width="100%" height="2100px" frameBorder="0" />
        </Container>
    );
};

export default Resume;