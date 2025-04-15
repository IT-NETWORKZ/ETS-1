import React from 'react';
import { Container, Row, Col,Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { ArrowLeft } from 'react-bootstrap-icons'; // Importing the back (left arrow) icon


const AddNew = ({isOpen}) => {
   

    return(
        <>
     
        <div className="">
          

        <Container style={{paddingTop:'3%',paddingBottom:'3%',paddingLeft:'3%', display:'block'}}>
        {/* <Row style={{backgroundColor:'#f6f6f6', padding:'1%'}}>

            <Col sm={4} style={{fontSize:24 , fontWeight:'bold'}}>
            Add New Candidate By ID
            </Col>
            
          
        </Row> */}
         <Row style={{
          backgroundColor: '#f6f6f6',
          padding: '2%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}>
          <Col sm={8}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
            }}>
              Add New Candidate By ID
            </h3>
          </Col>

          {/* Back Icon on the right side */}
          <Col sm={2} style={{ textAlign: 'right' }}>
            <Button variant="link" style={{ fontSize: '24px', color: '#007bff', padding: '0' }}>
              <ArrowLeft /> {/* The back icon */}
            </Button>
          </Col>
        </Row>

        <Row style={{padding:'1%',backgroundColor:'#ffffff'}}>
            <Col sm={4}> 
  
    <Form >
            <Form.Group className="mb-3 " controlId="formBasicName">
              <Form.Label >Candidate ID</Form.Label>
              <Form.Control
  type="text"
  placeholder="Enter Candidate ID"
  required
  style={{
    // borderRadius: '50px',  // Rounded corners
    // boxShadow: 'inset 0px 0px 25px 0px #b9b3b3', // Inner shadow
    // border: 'none',  // Remove default border
    // outline: 'none',  // Remove outline when focused
    backgroundColor: '#fff',  // White background
    padding: '12px 20px', // Adding some padding for better visual appearance
    fontSize: '14px' // Font size for better readability
  }}
/>

            </Form.Group>
            <Button  variant="primary" type="submit">
              Go
            </Button>
          </Form>
   
    
    </Col>
        </Row>


   
     </Container> 
    
     </div>
     
     </>
    );
};

export default AddNew;
