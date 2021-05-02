import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

const InterestedToTalk = () => {
    const history = useHistory();
    const handleTalkBtn = () => {
        history.push('/contact');
    }
    return (
        <Container className="text-center mt-5 pt-3">
            <h3 style={{color:'cyan'}}>Are you interested in talking me?</h3>
            <p className="text-white">Feel free to send a message. I will try to reply as soon as possible.</p>
            <button className="btn btn-outline-light mt-4" onClick={handleTalkBtn}>Let's Talk</button>
        </Container>
    );
};

export default InterestedToTalk;