
import React, { useState } from 'react';
import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Sale() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="d-lg-none">
        Toggle Sidebar
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="bg-light" responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            <li><a href="#" className="nav-link"><FontAwesomeIcon icon="bell" /></a></li>
            <li><a href="#" className="nav-link"><FontAwesomeIcon icon="inbox" /></a></li>
            <li><a href="#" className="nav-link"><FontAwesomeIcon icon="square" /></a></li>
            
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Container fluid>
        <Row>
          <Col lg={3} className="d-none d-lg-block bg-light">
            <div className="p-3">
              <h3>Logo</h3>
              <h3>Login Details</h3>
              <ul className="list-unstyled">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="#" className="nav-link">Profile</a></li>
                <li><a href="#" className="nav-link">My Add</a></li>
                <li><a href="#" className="nav-link">Favourite</a></li>
                <li><a href="#" className="nav-link">Inbox</a></li>
                <li><a href="#" className="nav-link">Billing</a></li>
                <li><a href="#" className="nav-link">Password</a></li>
                <li><a href="#" className="nav-link">Logout</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={9}>
            <div className="p-3">
              <h2>Content Area</h2>
              <p>This is the main content area.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sale;
