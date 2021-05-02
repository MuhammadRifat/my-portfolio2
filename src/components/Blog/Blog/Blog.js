import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import blogData from '../../BlogData/BlogData.json';
import BlogDetail from '../../Home/BlogHome/BlogDetail/BlogDetail';
import image from '../../../images/profile11.jpg';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setBlogs(blogData);
    }, [])
    return (
        <Container fluid>
            <Row className="justify-content-md-center mt-3" style={{backgroundColor:'rgb(0, 58, 14)'}}>
                <Col md={8}>
                    <div className="d-flex p-2">
                        <Image src={image} alt="" roundedCircle  className="mr-3" style={{width:'20%'}}/>
                        <div className="ml-3 mt-5" style={{color:'cyan'}}>
                            <h2>Muhammad Rifat's Blog</h2>
                            <p>I write about web development and life as a developer.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Container className="mt-5 pt-4">
                <Row>
                    {
                        blogs.map(blog => <BlogDetail blog={blog} key={blog.id}></BlogDetail>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default Blog;