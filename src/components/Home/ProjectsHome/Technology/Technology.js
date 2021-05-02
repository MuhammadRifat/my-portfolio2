import React from 'react';
import { Col } from 'react-bootstrap';

const Technology = ({tech}) => {
    return (
        <small className="m-1 p-1 bg-dark text-white" style={{borderRadius:'7px'}}>{tech}</small>
    );
};

export default Technology;