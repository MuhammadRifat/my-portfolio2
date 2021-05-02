import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Technology from '../Technology/Technology';
import './ProjectDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons'

const ProjectDetail = ({ project }) => {
    return (
        <Col lg={6}>
            <div className="bg-white rounded mb-4">
                <div className="border rounded frame">
                    <img src={project.imageUrl} alt="" className="border rounded" />
                    <div className="rounded border details">
                        <p>{project.description}</p>
                    </div>
                </div>
                <div className="p-3">
                    <h4 className="text-center">{project.name}</h4>
                    <Row className="justify-content-center mt-2">
                        {
                            project.technologies.map(technology => <Technology tech={technology}></Technology>)
                        }
                    </Row>
                    <div className="mt-2 d-flex">
                        {project.codeUrl && <a href={project.codeUrl} target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>}
                        <a href={project.projectUrl} target="_blank" className="ml-auto"><b>See project</b></a>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ProjectDetail;