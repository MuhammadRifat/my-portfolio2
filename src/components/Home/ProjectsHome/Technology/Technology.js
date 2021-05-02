import React from 'react';
import { Col } from 'react-bootstrap';

const Technology = ({tech}) => {
    return (
        <small className="m-1 p-1 bg-secondary text-white" style={{borderRadius:'7px'}}>{tech}</small>
    );
};

export default Technology;