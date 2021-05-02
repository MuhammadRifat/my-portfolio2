import React from 'react';
import BlogHome from '../BlogHome/BlogHome/BlogHome';
import Header from '../Header/Header/Header';
import InterestedToTalk from '../InterestedToTalk/InterestedToTalk';
import ProjectsHome from '../ProjectsHome/ProjectsHome/ProjectsHome';
import Skills from '../Skills/Skills/Skills';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Skills></Skills>
            <ProjectsHome></ProjectsHome>
            <BlogHome></BlogHome>
            <InterestedToTalk></InterestedToTalk>
        </>
    );
};

export default Home;