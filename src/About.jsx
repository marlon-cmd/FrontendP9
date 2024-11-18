import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import React from 'react';

function About() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const imageContainerStyle = {
    width: '171px',
    height: '180px',
    backgroundImage: 'url(https://via.placeholder.com/171x180)', // Placeholder background
    backgroundSize: 'cover',
    position: 'relative',
    marginBottom: '20px',
    borderRadius: '10px', // Optional: for rounded corners
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px', // Optional: ensures the image is rounded like the container
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '1.2rem',
    color: '#555',
  };
  return (
    <Container>
    <Row className="justify-content-center">
        <Col xs={6} md={4} className="d-flex flex-column align-items-center">
          {/* Image with placeholder background */}
          <div
            style={{
              width: '171px',
              height: '180px',
              backgroundImage: 'url(https://via.placeholder.com/171x180)', // Placeholder background
              marginTop: '80px'
            }}
          >
            <Image
              src="https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/437983327_1489267881932693_2363580711127406988_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGXFlKgqZ3zPqWcJI4Urn8hGpcCQUhl9y4alwJBSGX3LtZZymQ8TVTf_0uDtYLQjiaNx7NBBmMX_Nado4GirBQl&_nc_ohc=lzWrrJYF7YAQ7kNvgHrBwV2&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=A0iRxFaUS5-QUCP5xqVBWKw&oh=00_AYCR6f-U8PAnwhpUEhy4rOtHpd7q-Zd87f0TnqpI9omesw&oe=6739CB5A" // This is the actual image
              fluid
              style={{ width: '50%', height: '40%', marginTop: '70px', objectFit: 'cover', marginLeft: '500px'  }}
            />
          </div>

          <div className="text-center">
            <h1>About Me</h1>
            <p>This is where information about me goes.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;