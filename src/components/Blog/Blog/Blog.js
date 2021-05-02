import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import blogData from '../../BlogData/BlogData.json';
import BlogDetail from '../../Home/BlogHome/BlogDetail/BlogDetail';
import image from '../../../images/profile11.jpg';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    // Load blogs data from blogData.json
    useEffect(() => {
        setBlogs(blogData);
    }, [])
    return (
        <Container fluid>
            <Row className="justify-content-md-center mt-4" style={{ backgroundColor: 'rgb(0, 58, 14)' }}>
                <Col md={8}>
                    <Row className="p-2">
                        <Col md={4} className="text-center">
                            <Image src={image} alt="" roundedCircle style={{ width: '60%' }} />
                        </Col>
                        <Col md={8}>
                            <div className="mt-5" style={{ color: 'cyan' }}>
                                <h2>Muhammad Rifat's Blog</h2>
                                <p>I write about web development and life as a developer.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Container className="mt-4">
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