import React, { useState } from 'react';
import { Container, Row, Col, Table, Dropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
// import Content from "../SubHeader/Content";


const ExamResultList = ({isOpen}) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

 
  const options = [

    { value:"10", label: "10"},
    { value: "25 ", label: "25" },
    { value:"50", label: "50" },
    { value:"100", label: "100" },
    ]
  
    
      const [selectedOption, setSelectedOption] = useState(null);
      const handleChange = (selectedOption) => {
          setSelectedOption(selectedOption);
      };
  

  // Sample data for the table
  const tableData = [
    { id: 1, examDate: '01-02-2024', examName: 'Intern Assessment', subjectName: 'Aptitude Questions Internship', totalParticipants: 2 },
    { id: 2, examDate: '10-02-2021', examName: 'Weekly Assessment', subjectName: 'Logical Reasoning', totalParticipants: 12 },
    { id: 3, examDate: '11-12-2021', examName: 'Assessment-4', subjectName: 'Data Interpretation', totalParticipants: 50 },
  ];

  // Function to toggle sorting order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Function to handle column header click and set sorting column
  const handleSort = (column) => {
    if (sortColumn === column) {
      toggleSortOrder();
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  // Function to sort table data
  const sortedData = () => {
    if (sortColumn) {
      return [...tableData].sort((a, b) => {
        if (sortColumn === 'examDate') {
          const dateA = new Date(a.examDate);
          const dateB = new Date(b.examDate);
          if (sortOrder === 'asc') {
            return dateA - dateB;
          } else {
            return dateB - dateA;
          }
        } else {
          if (sortOrder === 'asc') {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
        }
      });
    }
    return tableData;
  };

  // Function to determine which sort icon to display
  const getSortIcon = (column) => {
    if (sortColumn === column) {
      return sortOrder === 'asc' ? faSortUp : faSortDown;
    }
    return faSort;
  };

  return (
    <>
    
    <div className={isOpen ? "reponsive-content" : "remcontent"}>

    <Container style={{ paddingTop: '1%', paddingBottom: '6%', paddingLeft:'5%', paddingRight:'4%', display:'block' }}>
      <Row style={{ backgroundColor: '#f6f6f6', padding: '1%' }}>
        <Col sm={4} style={{ fontSize: 26, fontWeight: 'bold' }}>
          Exam Result List
        </Col>
      </Row>
      <Row style={{ paddingTop: '2%', backgroundColor: '#ffffff' }}>
        <Col sm={4}>
          <Dropdown>
          <div style={{maxWidth:"80px"}}>
            <Select
            placeholder="10"
             options={options}
             value={selectedOption}
             onChange={handleChange}
            />
           </div> 
           {/* <p style={{paddingLeft:'95px', marginTop:'-2rem'}}>Record Per Page</p> */}
          </Dropdown>
        </Col>
        <Col sm={8}>
          <Form.Control type="search" placeholder="Search" style={{ width: '50%', float: 'right' }} />
        </Col>
        <span>&nbsp;</span>
        <Col sm={12}>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}>
                  Sr. No.
                  &nbsp;<FontAwesomeIcon icon={getSortIcon('id')} />
                </th>
                <th onClick={() => handleSort('examDate')}>
                  Exam Date
                  &nbsp; <FontAwesomeIcon icon={getSortIcon('examDate')} />
                </th>
                <th onClick={() => handleSort('examName')}>
                  Exam Name
                  &nbsp; <FontAwesomeIcon icon={getSortIcon('examName')} />
                </th>
                <th onClick={() => handleSort('subjectName')}>
                  Subject Name
                  &nbsp; <FontAwesomeIcon icon={getSortIcon('subjectName')} />
                </th>
                <th onClick={() => handleSort('totalParticipants')}>
                  Total Participants
                  &nbsp; <FontAwesomeIcon icon={getSortIcon('totalParticipants')} />
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData().map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.examDate}</td>
                  <td>{item.examName}</td>
                  <td>{item.subjectName}</td>
                  <td>{item.totalParticipants}</td>

                </tr>
              ))}
            </tbody>
          </Table>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end" >
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
             

              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
};

export default ExamResultList;
