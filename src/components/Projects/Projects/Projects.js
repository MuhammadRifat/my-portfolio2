import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectDetail from '../../Home/ProjectsHome/ProjectDetail/ProjectDetail';
import projectsData from '../../ProjectsData/ProjectsData.json';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(projectsData);
    }, [])
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4 pb-2" style={{borderBottom:'2px solid cyan', color:'cyan'}}>My Projects</h2>
            <Row>
                {
                    projects.map(project => <ProjectDetail project={project} key={project.id}></ProjectDetail>)
                }
            </Row>
        </Container>
    );
};

export default Projects;