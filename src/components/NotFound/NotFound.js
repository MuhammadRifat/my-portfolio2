import React from 'react';
import TopNav from '../Home/Header/TopNav/TopNav';

const NotFound = () => {
    return (
        <>
            <TopNav></TopNav>
            <hr/>
            <h3 className="text-center mt-4">404! Page Not Found.</h3>
        </>
    );
};

export default NotFound;