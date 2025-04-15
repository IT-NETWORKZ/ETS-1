// import React, { useState } from 'react';
// import { Container, Row, Col, Table, Button, Form, Dropdown } from 'react-bootstrap';
// import Select from 'react-select';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

// function ExamListt() {
//   const options = [
//     { value: '10', label: '10' },
//     { value: '25', label: '25' },
//     { value: '50', label: '50' },
//     { value: '100', label: '100' },
//   ];

//   const [selectedOption, setSelectedOption] = useState(options[0]);
//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   // Sample data for the table with new fields
//   const tableData = [
//     { 
//       id: 1, 
//       examDate: '01-05-2024', 
//       examDeadline: '30-04-2024', 
//       examName: 'Math Exam', 
//       subjectName: 'Mathematics', 
//       totalParticipants: 120, 
//       candidateId: '01-02-2024', 
//       candidateName: 'John Doe', 
//       emailId: 'john.doe@example.com', 
//       contactNumber: '1234567890', 
//       createdOn: '01-02-2024', 
//       status: 'Active' 
//     },
//     { 
//       id: 2, 
//       examDate: '11-06-2024', 
//       examDeadline: '01-06-2024', 
//       examName: 'Science Exam', 
//       subjectName: 'Physics', 
//       totalParticipants: 150, 
//       candidateId: '11-12-2021', 
//       candidateName: 'Jane Smith', 
//       emailId: 'jane.smith@example.com', 
//       contactNumber: '2345678901', 
//       createdOn: '11-12-2021', 
//       status: 'Inactive' 
//     },
//     { 
//       id: 3, 
//       examDate: '21-07-2024', 
//       examDeadline: '15-07-2024', 
//       examName: 'History Exam', 
//       subjectName: 'World History', 
//       totalParticipants: 90, 
//       candidateId: '21-09-2023', 
//       candidateName: 'Robert Brown', 
//       emailId: 'robert.brown@example.com', 
//       contactNumber: '3456789012', 
//       createdOn: '21-09-2023', 
//       status: 'Active' 
//     },
//     { 
//       id: 4, 
//       examDate: '10-08-2024', 
//       examDeadline: '01-08-2024', 
//       examName: 'English Exam', 
//       subjectName: 'English Literature', 
//       totalParticipants: 80, 
//       candidateId: '10-02-2024', 
//       candidateName: 'Emily White', 
//       emailId: 'emily.white@example.com', 
//       contactNumber: '4567890123', 
//       createdOn: '10-02-2024', 
//       status: 'Pending' 
//     },
//   ];

//   // Pagination logic
//   const [currentPage, setCurrentPage] = useState(1);
//   const [entriesPerPage, setEntriesPerPage] = useState(parseInt(selectedOption.value));

//   const indexOfLastEntry = currentPage * entriesPerPage;
//   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//   const currentEntries = tableData.slice(indexOfFirstEntry, indexOfLastEntry);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Handle search logic
//   const [searchQuery, setSearchQuery] = useState('');
//   const handleSearch = (e) => setSearchQuery(e.target.value);

//   // Sorting logic
//   const [sortColumn, setSortColumn] = useState(null);  // which column is being sorted
//   const [sortOrder, setSortOrder] = useState('asc');   // ascending or descending

//   const sortedData = () => {
//     if (sortColumn) {
//       return [...currentEntries].sort((a, b) => {
//         if (sortColumn === 'createdOn') {
//           const dateA = new Date(a.createdOn);
//           const dateB = new Date(b.createdOn);
//           return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
//         } else {
//           return sortOrder === 'asc'
//             ? a[sortColumn] > b[sortColumn]
//               ? 1
//               : -1
//             : a[sortColumn] < b[sortColumn]
//             ? 1
//             : -1;
//         }
//       });
//     }
//     return currentEntries;
//   };

//   const handleSort = (column) => {
//     if (sortColumn === column) {
//       setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortColumn(column);
//       setSortOrder('asc');
//     }
//   };

//   const getSortIcon = (column) => {
//     if (sortColumn === column) {
//       return sortOrder === 'asc' ? faSortUp : faSortDown;
//     }
//     return faSort;
//   };

//   // Filtered data based on search query
//   const filteredData = sortedData().filter(
//     (candidate) =>
//       candidate.candidateId.includes(searchQuery) ||
//       candidate.candidateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       candidate.emailId.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <Container
//         style={{
//           paddingTop: '3%',
//           paddingRight: '4%',
//           paddingLeft: '5%',
//           paddingBottom: '5%',
//           backgroundColor: '#f8f9fa',
//           borderRadius: '8px',
//           display: 'block'
//         }}
//       >
//         <Row style={{ backgroundColor: 'rgb(246, 246, 246)', padding: '1%' }}>
//           <Col sm={8} style={{ fontSize: '26px', fontWeight: 'bold', color: 'rgb(51, 51, 51)' }}>
//             Exam List
//           </Col>
//         </Row>

//         <Row style={{ paddingTop: '2%', backgroundColor: '#ffffff', borderRadius: '10px' }}>
//           <Col sm={4}>
//             <Dropdown style={{ maxWidth: '150px' }}>
//               <Select
//                 placeholder="Entries per page"
//                 options={options}
//                 value={selectedOption}
//                 onChange={handleChange}
//               />
//             </Dropdown>
//           </Col>

//           <Col sm={8}>
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               style={{
//                 width: '40%',
//                 float: 'right',
//                 padding: '10px',
//               }}
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//           </Col>
//         </Row>

//         <Row style={{ paddingTop: '2%', backgroundColor: '#ffffff', borderRadius: '10px' }}>
//           <Col sm={12}>
//             <Table striped bordered hover responsive style={{ borderRadius: '10px' }}>
//               <thead>
//                 <tr style={{ backgroundColor: '#007bff', color: '#ffffff' }}>
//                   <th>Sr. No.</th>
//                   <th onClick={() => handleSort('examDate')}>
//                     Exam Date <FontAwesomeIcon icon={getSortIcon('examDate')} />
//                   </th>
//                   <th onClick={() => handleSort('examDeadline')}>
//                     Exam Deadline <FontAwesomeIcon icon={getSortIcon('examDeadline')} />
//                   </th>
//                   <th onClick={() => handleSort('examName')}>
//                     Exam Name <FontAwesomeIcon icon={getSortIcon('examName')} />
//                   </th>
//                   <th onClick={() => handleSort('subjectName')}>
//                     Subject Name <FontAwesomeIcon icon={getSortIcon('subjectName')} />
//                   </th>
//                   <th onClick={() => handleSort('totalParticipants')}>
//                     Total Participants <FontAwesomeIcon icon={getSortIcon('totalParticipants')} />
//                   </th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredData.map((candidate, index) => (
//                   <tr key={candidate.id} style={{ backgroundColor: '#f8f9fa' }}>
//                     <td>{index + 1}</td>
//                     <td>{candidate.examDate}</td>
//                     <td>{candidate.examDeadline}</td>
//                     <td>{candidate.examName}</td>
//                     <td>{candidate.subjectName}</td>
//                     <td>{candidate.totalParticipants}</td>
//                     <td>
//                       <Button variant="primary" size="sm" style={{ marginRight: '5px' }}>
//                         Edit
//                       </Button>
//                       <Button variant="danger" size="sm">
//                         Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>

//             {/* Pagination */}
//             <nav aria-label="Page navigation example">
//             <ul className="pagination justify-content-end" >
//               <li className="page-item">
//                 <a className="page-link" href="#" aria-label="Previous">
//                   <span aria-hidden="true">&laquo;</span>
//                 </a>
//               </li>
             

//               <li className="page-item"><a className="page-link" href="#">1</a></li>
//               <li className="page-item">
//                 <a className="page-link" href="#" aria-label="Next">
//                   <span aria-hidden="true">&raquo;</span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default ExamListt;


import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Form, Dropdown } from 'react-bootstrap';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown, faEdit, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function ExamListt() {
  const options = [
    { value: '10', label: '10' },
    { value: '25', label: '25' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  // Sample data for the table with new fields
  const tableData = [
    { 
      id: 1, 
      examDate: '01-05-2024', 
      examDeadline: '30-04-2024', 
      examName: 'Math Exam', 
      subjectName: 'Mathematics', 
      totalParticipants: 120, 
      candidateId: '01-02-2024', 
      candidateName: 'John Doe', 
      emailId: 'john.doe@example.com', 
      contactNumber: '1234567890', 
      createdOn: '01-02-2024', 
      status: 'Active' 
    },
    { 
      id: 2, 
      examDate: '11-06-2024', 
      examDeadline: '01-06-2024', 
      examName: 'Science Exam', 
      subjectName: 'Physics', 
      totalParticipants: 150, 
      candidateId: '11-12-2021', 
      candidateName: 'Jane Smith', 
      emailId: 'jane.smith@example.com', 
      contactNumber: '2345678901', 
      createdOn: '11-12-2021', 
      status: 'Inactive' 
    },
    { 
      id: 3, 
      examDate: '21-07-2024', 
      examDeadline: '15-07-2024', 
      examName: 'History Exam', 
      subjectName: 'World History', 
      totalParticipants: 90, 
      candidateId: '21-09-2023', 
      candidateName: 'Robert Brown', 
      emailId: 'robert.brown@example.com', 
      contactNumber: '3456789012', 
      createdOn: '21-09-2023', 
      status: 'Active' 
    },
    { 
      id: 4, 
      examDate: '10-08-2024', 
      examDeadline: '01-08-2024', 
      examName: 'English Exam', 
      subjectName: 'English Literature', 
      totalParticipants: 80, 
      candidateId: '10-02-2024', 
      candidateName: 'Emily White', 
      emailId: 'emily.white@example.com', 
      contactNumber: '4567890123', 
      createdOn: '10-02-2024', 
      status: 'Pending' 
    },
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(parseInt(selectedOption.value));

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = tableData.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search logic
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => setSearchQuery(e.target.value);

  // Sorting logic
  const [sortColumn, setSortColumn] = useState(null);  // which column is being sorted
  const [sortOrder, setSortOrder] = useState('asc');   // ascending or descending

  const sortedData = () => {
    if (sortColumn) {
      return [...currentEntries].sort((a, b) => {
        if (sortColumn === 'createdOn') {
          const dateA = new Date(a.createdOn);
          const dateB = new Date(b.createdOn);
          return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        } else {
          return sortOrder === 'asc'
            ? a[sortColumn] > b[sortColumn]
              ? 1
              : -1
            : a[sortColumn] < b[sortColumn]
            ? 1
            : -1;
        }
      });
    }
    return currentEntries;
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const getSortIcon = (column) => {
    if (sortColumn === column) {
      return sortOrder === 'asc' ? faSortUp : faSortDown;
    }
    return faSort;
  };

  // Filtered data based on search query
  const filteredData = sortedData().filter(
    (candidate) =>
      candidate.candidateId.includes(searchQuery) ||
      candidate.candidateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.emailId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Container
        style={{
          paddingTop: '3%',
          paddingRight: '4%',
          paddingLeft: '5%',
          paddingBottom: '5%',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          display: 'block'
        }}
      >
        <Row style={{ backgroundColor: 'rgb(246, 246, 246)', padding: '1%' }}>
          <Col sm={8} style={{ fontSize: '26px', fontWeight: 'bold', color: 'rgb(51, 51, 51)' }}>
            Exam List
          </Col>
        </Row>

        <Row style={{ paddingTop: '2%', backgroundColor: '#ffffff', borderRadius: '10px' }}>
          <Col sm={4}>
            <Dropdown style={{ maxWidth: '150px' }}>
              <Select
                placeholder="Entries per page"
                options={options}
                value={selectedOption}
                onChange={handleChange}
              />
            </Dropdown>
          </Col>

          <Col sm={8}>
            <Form.Control
              type="search"
              placeholder="Search"
              style={{
                width: '40%',
                float: 'right',
                padding: '10px',
              }}
              value={searchQuery}
              onChange={handleSearch}
            />
          </Col>
        </Row>

        <Row style={{ paddingTop: '2%', backgroundColor: '#ffffff', borderRadius: '10px' }}>
          <Col sm={12}>
            <Table striped bordered hover responsive style={{ borderRadius: '10px' }}>
              <thead>
                <tr style={{ backgroundColor: '#007bff', color: '#ffffff' }}>
                  <th>Sr. No.</th>
                  <th onClick={() => handleSort('examDate')}>
                    Exam Date <FontAwesomeIcon icon={getSortIcon('examDate')} />
                  </th>
                  <th onClick={() => handleSort('examDeadline')}>
                    Exam Deadline <FontAwesomeIcon icon={getSortIcon('examDeadline')} />
                  </th>
                  <th onClick={() => handleSort('examName')}>
                    Exam Name <FontAwesomeIcon icon={getSortIcon('examName')} />
                  </th>
                  <th onClick={() => handleSort('subjectName')}>
                    Subject Name <FontAwesomeIcon icon={getSortIcon('subjectName')} />
                  </th>
                  <th onClick={() => handleSort('totalParticipants')}>
                    Total Participants <FontAwesomeIcon icon={getSortIcon('totalParticipants')} />
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((candidate, index) => (
                  <tr key={candidate.id} style={{ backgroundColor: '#f8f9fa' }}>
                    <td>{index + 1}</td>
                    <td>{candidate.examDate}</td>
                    <td>{candidate.examDeadline}</td>
                    <td>{candidate.examName}</td>
                    <td>{candidate.subjectName}</td>
                    <td>{candidate.totalParticipants}</td>
                    <td>
                      <Button variant="primary" size="sm" style={{ marginRight: '5px' }}>
                        <FontAwesomeIcon icon={faEdit} /> 
                      </Button>
                      <Button variant="success" size="sm" style={{ marginRight: '5px' }}>
                        <FontAwesomeIcon icon={faEye} /> 
                      </Button>
                    
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Pagination */}
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
    </>
  );
}

export default ExamListt;
