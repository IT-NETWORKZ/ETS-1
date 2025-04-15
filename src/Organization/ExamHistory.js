import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Dropdown } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
// import Content from "../SubHeader/Content";
// import "./ExamHistory.css"

const ExamHistoryList = ({isOpen}) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const data = [
    { name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210' },
  ];

  // Function to export data to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data); // Convert data to a sheet
    const wb = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1'); // Append the sheet to the workbook
    
    // Write the workbook to a file
    XLSX.writeFile(wb, 'export.xlsx'); // The filename you want to save as
  };

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
    { id: 2, examDate: '11-12-2021', examName: 'Trainee Assessment', subjectName: ' Internship Test', totalParticipants: 12 },
    { id: 3, examDate: '21-09-2023', examName: 'Developer Assessment', subjectName: 'Internship Test', totalParticipants: 25 },
    { id: 4, examDate: '10-02-2024', examName: 'Web Developer Assessment', subjectName: 'Internship Test', totalParticipants: 50 },
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
          const yearA = parseInt(a.examDate.split('-')[2]);
          const yearB = parseInt(b.examDate.split('-')[2]);
          if (sortOrder === 'asc') {
            return yearA - yearB;
          } else {
            return yearB - yearA;
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


   // Sample content to be exported to PDF
   const data1 = [
    { name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210' },
  ];

  // Function to export data to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();

    // Title
    doc.text('User Information', 10, 10);

    // Set starting point for content
    let y = 20;

    // Loop through the data and add each entry to the PDF
    data.forEach((entry, index) => {
      doc.text(`Name: ${entry.name}`, 10, y);
      doc.text(`Email: ${entry.email}`, 10, y + 10);
      doc.text(`Phone: ${entry.phone}`, 10, y + 20);

      y += 30; // Increase the y-position for the next entry
    });

    // Save the PDF file with the name 'export.pdf'
    doc.save('export.pdf');
  };


  return (
    <>
    
    <div className={isOpen ? "reponsive-content" : "remcontent"}>

    <Container style={{ paddingTop: '2%', paddingBottom:'2%',paddingRight:'4%', paddingLeft:'4%', display:'block'}} className='h-100'>
      <Row style={{ backgroundColor: '#f6f6f6', padding: '1%' }}>
        <Col sm={4} style={{ fontSize: 22, fontWeight: 'bold' }}>
          Exam History List
        </Col>
      </Row>
      <Row style={{ paddingTop: '2%', paddingBottom: '1%', backgroundColor: '#ffffff' }}>
        <Col sm={4}>
          
          <div style={{maxWidth:"90px"}}>
            <Select
            placeholder='10'
             options={options}
             value={selectedOption}
             onChange={handleChange}
            />
           </div> 
           {/* <p style={{paddingLeft:'95px', marginTop:'-2rem'}}>Record Per Page</p> */}
          </Col>
   
      
        <Col sm={8}>
          <Form.Control type="search" placeholder="Search" style={{ width: '40%', float: 'right' }} />
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
                  &nbsp;<FontAwesomeIcon icon={getSortIcon('examDate')} />
                </th>
                <th onClick={() => handleSort('examName')}>
                  Exam Name
                  &nbsp; <FontAwesomeIcon icon={getSortIcon('examName')} />
                </th>
                <th onClick={() => handleSort('subjectName')}>
                  Subject Name
                  &nbsp;<FontAwesomeIcon icon={getSortIcon('subjectName')} />
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
            <ul className="pagination justify-content-end">
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
       
          {/* <Button  as="input" type="button" value="Export To Excel" style={{float:'inline-start', marginBottom:40}}/> */}
          <Button 
        as="input" 
        type="button" 
        value="Export To Excel" 
        onClick={exportToExcel} // Trigger export function when clicked
        style={{ float: 'inline-start', marginBottom: 40 }}
      />
          {' '}
          {/* <Button as="input" type="button" value="Export To PDF" /> */}
          <Button 
        as="input" 
        type="button" 
        value="Export To PDF" 
        onClick={exportToPDF} // Trigger export function when clicked
        style={{ float: 'inline-start', marginBottom: 40 }}
      />
          {' '}
          
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
};

export default ExamHistoryList;
