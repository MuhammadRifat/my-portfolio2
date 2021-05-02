import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import blogData from '../../../BlogData/BlogData.json';
import BlogDetail from '../BlogDetail/BlogDetail';

const BlogHome = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        setBlogs(blogData);
    }, [])

    const history = useHistory();
    const handleViewPosts = () => {
        history.push('/blog');
    }
    return (
        <Container className="mt-5 pt-5">
            <h2 className="text-center mb-4" style={{color:'cyan'}}>Latest blog posts</h2>
            <Row>
                {
                    blogs.slice(0, 3).map(blog => <BlogDetail blog={blog} key={blog.id}></BlogDetail>)
                }
            </Row>
            <div className="text-center mb-2">
                <button className="btn btn-outline-light mt-4" onClick={handleViewPosts}>View all posts</button>
            </div>
        </Container>
    );
};

export default BlogHome;