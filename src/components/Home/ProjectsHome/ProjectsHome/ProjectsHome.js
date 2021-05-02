import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import projectsData from '../../../ProjectsData/ProjectsData.json';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const ProjectsHome = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(projectsData);
    }, [])

    const history = useHistory();
    const handleViewBtn = () => {
        history.push('/projects');
    }
    return (
        <Container className="mt-5 pt-4">
            <h2 className="text-center mb-4" style={{color:'cyan'}}>Featured Projects</h2>
            <Row>
                {
                    projects.slice(0, 4).map(project => <ProjectDetail project={project} key={project.id}></ProjectDetail>)
                }
            </Row>
            <div className="text-center mb-2">
                <button className="btn btn-outline-light mt-3" onClick={handleViewBtn}>View all projects</button>
            </div>
        </Container>
    );
};

export default ProjectsHome;