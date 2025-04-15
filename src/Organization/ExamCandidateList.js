import React from 'react';
import { Container, Row, Col,Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {  Outlet } from 'react-router-dom';
// import Content from "../SubHeader/Content";

const ExamCandidateList = ({isOpen}) => {
    // const navigate = useNavigate();

    return(
        <>
        
        <div className={isOpen ? "reponsive-content" : "remcontent"}>
            <Outlet/>

        <Container style={{paddingTop:'4%',paddingBottom:'30%',display:'block'}}>
        <Row style={{backgroundColor:'#f6f6f6', padding:'1%'}}>

            <Col sm={6} style={{fontSize:24 , fontWeight:'bold'}}>
            Exam Candidate List
            </Col>
            <Col sm={4}>          
              {/* <Button variant="primary" onClick={() => navigate('/ReExamCandidateList')}  style={{float:'right'}}>Re-Exam Candidates</Button>{' '} */}
            </Col>
            <Col sm={2}>          
              {/* <Button variant="primary" onClick={() => navigate('/ReExamCandidateList')} style={{float:'right'}}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
 
 </Button> {' '} */}
            </Col>
        </Row>
        <Row style={{padding:'1%',backgroundColor:'#ffffff'}}>
            <Col sm={8}>
    <Form.Select aria-label="Default select example">
      <option>Select Exam Name</option>
      <option value="1">Intern Assessment</option>
    </Form.Select>
    </Col>
    <Col sm={4}>
    <Button variant="primary">Search</Button>{' '}
    </Col>
        </Row>
     </Container>
     </div>
     </>
    );
};

export default ExamCandidateList;
