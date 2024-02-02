import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="mt-5 mb-0 ft">
    <Container>
      <Row>
        <Col>
          <p className='foot-p'>&copy; 2024 Future Profilez ©</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}