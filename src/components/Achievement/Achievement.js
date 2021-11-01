import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Achievement = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4 pb-2" style={{ borderBottom: '2px solid cyan', color: 'cyan' }}>Achievement</h2>

            {/* achievements */}
            <div className="border">
                <img src="https://i.ibb.co/YBrt1Jy/nasa-certificate.jpg" alt="" className="w-100" />
            </div>
            <div className="border mt-5">
                <img src="https://i.ibb.co/Ryh0Ds2/Rifat-Mia-1.png" alt="" className="w-100" />
            </div>
            <div className="border mt-5">
                <img src="https://i.ibb.co/xJBJvcG/0001.jpg" alt="" className="w-100" />
            </div>
        </Container>
    );
};

export default Achievement;