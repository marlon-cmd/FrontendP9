import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Home.css';
import './Contacts'

function Home() {
  return (
    <div className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Hi! I'm Marlon</h1>
            <h2>I'M A COMPUTER SCIENCE STUDENT</h2>
            <p>A mediocre student who loves doing average stuff.</p>
            <Button variant="primary" className="ms-2" as={Link} to="/Contacts">Get in Touch</Button>
            <div className="social-icons mt-3">
              <a href="https://github.com/marlon-cmd" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="mr-3" />
              </a>
              <a href="https://web.facebook.com/marlon.alba.758" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="mr-3" />
              </a>
              <a href="https://www.instagram.com/prec8.marlon/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
          <Col md={6}>
            <img src="https://lh3.googleusercontent.com/a/ACg8ocIatKlTZz9e4by1usyEOmA6ABIfKpxns5_0WZKqTx5mTJL5pJI=s309-c-no" 
            alt="Marlon Alba" 
            className="profile-img" 
            style={{ width: '85%', height: '40%', marginTop: '70px', marginRight: '500px'  }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;