import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import "./AddNewCandidate.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function AddNewCandidate({ isOpen }) {
  return (
    <div className="add-new-candidate-form-container">
      <h5 className="add-new-candidate-form-title">Add New Candidate</h5>
      <Form className="add-new-candidate-form">
        
        {/* First Row - 3 Fields */}
        <Row className="add-new-candidate-form-row">
          <Col sm={12} md={4}>
            <Form.Group className="add-new-candidate-form-group">
              <Form.Label>First Name<span className="required-star">*</span></Form.Label>
              <Form.Control type="text" placeholder=" First Name" className="add-new-candidate-input-field" />
            </Form.Group>
          </Col>

          <Col sm={12} md={4}>
            <Form.Group className="add-new-candidate-form-group">
              <Form.Label>Last Name<span className="required-star">*</span></Form.Label>
              <Form.Control type="text" placeholder=" Last Name" className="add-new-candidate-input-field" />
            </Form.Group>
          </Col>

          <Col sm={12} md={4}>
            <Form.Group className="add-new-candidate-form-group">
              <Form.Label>Date of Birth<span className="required-star">*</span></Form.Label>
              <Form.Control type="date" className="add-new-candidate-input-field" />
            </Form.Group>
          </Col>
        </Row>

        {/* Second Row - 3 Fields */}
        <Row className="add-new-candidate-form-row">
          <Col sm={12} md={4}>
            <Form.Group className="add-new-candidate-form-group">
              <Form.Label>Gender<span className="required-star">*</span></Form.Label>
              <div className="add-new-candidate-gender-div">
                <Form.Check inline label="Male" name="Gender" type="radio" />
                <Form.Check inline label="Female" name="Gender" type="radio" />
                <Form.Check inline label="Other" name="Gender" type="radio" />
              </div>
            </Form.Group>
          </Col>

          <Col sm={12} md={4}>
            <Form.Group className="add-new-candidate-form-group">
              <Form.Label>Contact No.<span className="required-star">*</span></Form.Label>
              <Form.Control type="text" placeholder=" Contact Number" className="add-new-candidate-input-field" />
            </Form.Group>
          </Col>

          <Col sm={12} md={4}>
            <Form.Group className="add-new-candidate-form-group">
              <Form.Label>Email Id<span className="required-star">*</span></Form.Label>
              <Form.Control type="email" placeholder=" Email Address" className="add-new-candidate-input-field" />
            </Form.Group>
          </Col>
        </Row>

        {/* Third Row - 3 Fields */}
        <Row className="add-new-candidate-form-row">
          <Col sm={12} md={4}>
            <Form.Group className="add-new-candidate-form-group">
              <Form.Label>City<span className="required-star">*</span></Form.Label>
              <Form.Control type="text" placeholder=" City" className="add-new-candidate-input-field" />
            </Form.Group>
          </Col>

          <Col sm={12} md={4}>
            <Form.Group className="add-new-candidate-form-group">
              <Form.Label>Address<span className="required-star">*</span></Form.Label>
              <Form.Control type="text" placeholder=" Address" className="add-new-candidate-input-field" />
            </Form.Group>
          </Col>

          <Col sm={12} md={4}>
            <Form.Group className="add-new-candidate-form-group">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" className="add-new-candidate-input-field" />
            </Form.Group>
          </Col>
        </Row>

        {/* Fourth Row - 2 Fields */}
        <Row className="add-new-candidate-form-row">
          <Col sm={12} md={4}>
            <Form.Group className="add-new-candidate-form-group">
              <Form.Label> Password<span className="required-star">*</span></Form.Label>
              <Form.Control type="password" placeholder=" Password" className="add-new-candidate-input-field" />
            </Form.Group>
          </Col>

          <Col sm={12} md={4}>
            <Form.Group className="add-new-candidate-form-group">
              <Form.Label>Confirm Password<span className="required-star">*</span></Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" className="add-new-candidate-input-field" />
            </Form.Group>
          </Col>
        </Row>

        {/* Submit Button */}
        <div className="add-new-candidate-button-container">
          <Button variant="primary" type="submit" className="add-new-candidate-submit-btn btn-sm">Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default AddNewCandidate;
