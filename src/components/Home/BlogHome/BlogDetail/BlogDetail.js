import React from 'react';
import { Col } from 'react-bootstrap';
import './BlogDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';

const BlogDetail = ({blog}) => {
    const {name, imageUrl, description, publishingDate, blogUrl} = blog;
    return (
        <Col md={4}>
            <div className="bg-light border rounded mt-4 box">
                {/* id zoomIn used for animation of image */}
                <div className="column" id="zoomIn">
                    <figure>
                        <img src={imageUrl} alt="" className="img-fluid rounded" />
                    </figure>
                </div>
                <div className="p-2">
                    <h5>{name}</h5>
                    <small className="text-secondary"><FontAwesomeIcon icon={faClock} /> {publishingDate}</small>
                    <p>{description}</p>
                    <a href={blogUrl} target="_blank" className="btn btn-outline-secondary mt-2">Read more <FontAwesomeIcon icon={faArrowRight} /></a>
                </div>
            </div>
        </Col>
    );
};

export default BlogDetail;