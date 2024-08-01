import React, { useState } from 'react';
import { Button, Form, Row, Col, Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    email: '',
    phone: '',
    address: ''
  });
  const [submittedDetails, setSubmittedDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = validateEmail(formDetails.email);
    const isValidPhone = validatePhone(formDetails.phone);
    const isValidAddress = validateAddress(formDetails.address);

    if (isValidEmail && isValidPhone && isValidAddress) {
      setSubmittedDetails(formDetails);
      setShowModal(true);
    } else {
      setErrors({
        email: isValidEmail ? '' : 'Please enter a valid email address',
        phone: isValidPhone ? '' : 'Please enter a valid phone number',
        address: isValidAddress ? '' : 'Please enter a valid address'
      });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?(\d[\d\s\-()]*\d$)/;
    return phoneRegex.test(phone);
  };

  const validateAddress = (address) => {
    return address.trim().length > 0;
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <h1 style={{color:"purple"}}>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formDetails.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            className="box-input"
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="phone"
            value={formDetails.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
            className="box-input"
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formAddress" className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            value={formDetails.address}
            onChange={handleChange}
            isInvalid={!!errors.address}
            className="box-input"
          />
          <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>

      {submittedDetails && (
        <Row className="mt-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Email</Card.Title>
                <Card.Text>{submittedDetails.email}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Phone Number</Card.Title>
                <Card.Text>{submittedDetails.phone}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Address</Card.Title>
                <Card.Text>{submittedDetails.address}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Submitted Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submittedDetails && (
            <>
              <p><strong>Email:</strong> {submittedDetails.email}</p>
              <p><strong>Phone Number:</strong> {submittedDetails.phone}</p>
              <p><strong>Address:</strong> {submittedDetails.address}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
