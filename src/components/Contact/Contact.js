import React from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Row } from 'react-bootstrap';
import ApiKeys from '../../ApiKeys';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(ApiKeys.Service_ID, ApiKeys.TEMPLATE_ID, 'contactForm', ApiKeys.USER_ID)
        .then(result =>{
            alert('Message Sent');
        }, err => {
            console.log("failed", err);
        })
    }
    return (
        <Container className="mt-5 pt-5">
            <Row className="justify-content-md-center">
                <Col md={6} className="p-4 rounded" style={{backgroundColor:'rgb(0, 60, 0)'}}>
                    <h2 className="text-center mb-3" style={{color:'cyan'}}>Get In Touch</h2>
                    <form onSubmit={handleSubmit} id='contactForm'>
                        <input type="text" name="name" className="form-control" placeholder="Enter your name"/><br/>
                        <input type="email" name="email" className="form-control" placeholder="Enter your email"/><br/>
                        <textarea name="message" className="form-control" rows="5" placeholder="Enter your message"/><br/>
                        <button className="btn btn-outline-light btn-block" type="submit">Send</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;