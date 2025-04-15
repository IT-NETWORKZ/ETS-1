// import { Container, Row, Col, Dropdown, Table, Button, Form } from 'react-bootstrap';
// import React, { useEffect, useState } from 'react';
// import Select from 'react-select';
// import './AddCandidate.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

// const AddcandidatetoExam = ({ isOpen }) => {
//   useEffect(() => {
//     document.title = "Add Candidate to Exam";
//   }, []);

//   const options = [
//     { value: "10", label: "10" },
//     { value: "25", label: "25" },
//     { value: "50", label: "50" },
//     { value: "100", label: "100" },
//   ];

//   const testoptions = [
//     { value: "Intern Assessment", label: "Intern Assessment" },
//     { value: "Trainee Assessment", label: "Trainee Assessment" },
//     { value: "UG Assessment", label: "UG Assessment" },
//   ];

//   const [selectedOption, setSelectedOption] = useState(null);
//   const handleChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//   };

//   const [searchQuery, setSearchQuery] = useState('');
//   const handleSearch = (e) => setSearchQuery(e.target.value);

//   const [sortOrder, setSortOrder] = useState('asc'); // ascending or descending
//   const [sortColumn, setSortColumn] = useState(null); // which column is being sorted

//   const [tableData, setTableData] = useState([
//     { srNo: 1, exam: 'Intern Assessment', email: 'john@example.com', examDate: '2023-12-01' },
//     { srNo: 2, exam: 'Trainee Assessment', email: 'jane@example.com', examDate: '2023-12-03' },
//     { srNo: 3, exam: 'UG Assessment', email: 'doe@example.com', examDate: '2023-11-30' },
//     // Add more data as needed
//   ]);

//   const sortedData = () => {
//     if (sortColumn) {
//       return [...tableData].sort((a, b) => {
//         if (sortColumn === 'examDate') {
//           const dateA = new Date(a.examDate);
//           const dateB = new Date(b.examDate);
//           if (sortOrder === 'asc') {
//             return dateA - dateB;
//           } else {
//             return dateB - dateA;
//           }
//         } else {
//           if (sortOrder === 'asc') {
//             return a[sortColumn] > b[sortColumn] ? 1 : -1;
//           } else {
//             return a[sortColumn] < b[sortColumn] ? 1 : -1;
//           }
//         }
//       });
//     }
//     return tableData;
//   };

//   const handleSort = (column) => {
//     if (sortColumn === column) {
//       // Toggle sort order if same column is clicked
//       setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//     } else {
//       // Set new column for sorting
//       setSortColumn(column);
//       setSortOrder('asc'); // Default to ascending for a new column
//     }
//   };

//   const getSortIcon = (column) => {
//     if (sortColumn === column) {
//       return sortOrder === 'asc' ? faSortUp : faSortDown; // Use FontAwesome icons
//     }
//     return faSort; // Default icon
//   };

//   return (
//     <>
//       <div className={isOpen ? "reponsive-content" : "remcontent"}>
//         <Container id="Outer-Container" style={{ display: 'block' }}>
//           <Row id="Header-Container">
//             <Col sm={6}>
//               <h3>Add Candidate to Exam</h3>
//             </Col>
//           </Row>
//           <Row id="Table-Container">
//             <Col sm={4}>
//               <Dropdown style={{ maxWidth: "80px" }}>
//                 <Select
//                   placeholder="10"
//                   options={options}
//                   value={selectedOption}
//                   onChange={handleChange}
//                 />
//               </Dropdown>
//             </Col>

//             <Col sm={8}>
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 style={{
//                   width: '40%',
//                   float: 'right',
//                   padding: '10px',
//                 }}
//                 value={searchQuery}
//                 onChange={handleSearch}
//               />
//             </Col>
//           </Row>
//           <Row id="Table-Container">
//             <Col sm={4}>
//               <Dropdown style={{ maxWidth: "375px" }}>
//                 <Select
//                   placeholder="Select Exam Name"
//                   options={testoptions}
//                   value={selectedOption}
//                   onChange={handleChange}
//                 />
//               </Dropdown>
//             </Col>
//           </Row>
//           <Row id="Table-Container">
//             <Col sm={12}>
//               <Table striped bordered hover responsive>
//                 <thead>
//                   <tr>
//                     <th onClick={() => handleSort('srNo')}>
//                       Sr. No. <FontAwesomeIcon icon={getSortIcon('srNo')} />
//                     </th>
//                     <th>
//                       <input type="checkbox" />
//                     </th>
//                     <th onClick={() => handleSort('exam')}>
//                       Candidate Exam <FontAwesomeIcon icon={getSortIcon('exam')} />
//                     </th>
//                     <th onClick={() => handleSort('email')}>
//                       Email Id <FontAwesomeIcon icon={getSortIcon('email')} />
//                     </th>
//                     <th onClick={() => handleSort('examDate')}>
//                       Exam Date <FontAwesomeIcon icon={getSortIcon('examDate')} />
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {sortedData()
//                     .filter(
//                       (candidate) =>
//                         candidate.exam.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                         candidate.email.toLowerCase().includes(searchQuery.toLowerCase())
//                     )
//                     .map((candidate, index) => (
//                       <tr key={index}>
//                         <td>{candidate.srNo}</td>
//                         <td><input type="checkbox" /></td>
//                         <td>{candidate.exam}</td>
//                         <td>{candidate.email}</td>
//                         <td>{candidate.examDate}</td>
//                       </tr>
//                     ))}
//                   <tr>
//                     <td colSpan={5}>
//                       <div>
//                         <Button
//                           as="input"
//                           variant="primary"
//                           type="submit"
//                           value="Submit"
//                           id="SubmitBttn"
//                           width={'8%'}
//                         />
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Col>
//           </Row>
//           <nav aria-label="Page navigation example">
//             <ul className="pagination justify-content-end">
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
//         </Container>
//       </div>
//     </>
//   );
// };

// export default AddcandidatetoExam;


import { Container, Row, Col, Dropdown, Table, Button, Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './AddCandidate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const AddcandidatetoExam = ({ isOpen }) => {
  useEffect(() => {
    document.title = "Add Candidate to Exam";
  }, []);

  const options = [
    { value: "10", label: "10" },
    { value: "25", label: "25" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
  ];

  const testoptions = [
    { value: "Intern Assessment", label: "Intern Assessment" },
    { value: "Trainee Assessment", label: "Trainee Assessment" },
    { value: "UG Assessment", label: "UG Assessment" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => setSearchQuery(e.target.value);

  const [sortOrder, setSortOrder] = useState('asc'); // ascending or descending
  const [sortColumn, setSortColumn] = useState(null); // which column is being sorted

  const [tableData, setTableData] = useState([
    { srNo: 1, exam: 'Intern Assessment', email: 'john@example.com', examDate: '2023-12-01' },
    { srNo: 2, exam: 'Trainee Assessment', email: 'jane@example.com', examDate: '2023-12-03' },
    { srNo: 3, exam: 'UG Assessment', email: 'doe@example.com', examDate: '2023-11-30' },
  ]);

  const [selectedRows, setSelectedRows] = useState([]);

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

  const handleSort = (column) => {
    if (sortColumn === column) {
      // Toggle sort order if same column is clicked
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new column for sorting
      setSortColumn(column);
      setSortOrder('asc'); // Default to ascending for a new column
    }
  };

  const getSortIcon = (column) => {
    if (sortColumn === column) {
      return sortOrder === 'asc' ? faSortUp : faSortDown; // Use FontAwesome icons
    }
    return faSort; // Default icon
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      // Select all checkboxes
      const allSelected = tableData.map((_, index) => index);
      setSelectedRows(allSelected);
    } else {
      // Deselect all checkboxes
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (e, index) => {
    if (e.target.checked) {
      setSelectedRows([...selectedRows, index]);
    } else {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    }
  };

  return (
    <>
      <div className={isOpen ? "reponsive-content" : "remcontent"}>
        <Container id="Outer-Container" style={{ display: 'block' }}>
          <Row id="Header-Container">
            <Col sm={6}>
              <h3>Add Candidate to Exam</h3>
            </Col>
          </Row>
          <Row id="Table-Container">
            <Col sm={4}>
              <Dropdown style={{ maxWidth: "80px" }}>
                <Select
                  placeholder="10"
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
          <Row id="Table-Container">
            <Col sm={4}>
              <Dropdown style={{ maxWidth: "375px" }}>
                <Select
                  placeholder="Select Exam Name"
                  options={testoptions}
                  value={selectedOption}
                  onChange={handleChange}
                />
              </Dropdown>
            </Col>
          </Row>
          <Row id="Table-Container">
            <Col sm={12}>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    
                    <th onClick={() => handleSort('srNo')}>
                      Sr. No. <FontAwesomeIcon icon={getSortIcon('srNo')} />
                    </th>
                    <th>
                      <input
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={selectedRows.length === tableData.length}
                      />
                    </th>
                    <th onClick={() => handleSort('exam')}>
                      Candidate Exam <FontAwesomeIcon icon={getSortIcon('exam')} />
                    </th>
                    <th onClick={() => handleSort('email')}>
                      Email Id <FontAwesomeIcon icon={getSortIcon('email')} />
                    </th>
                    <th onClick={() => handleSort('examDate')}>
                      Exam Date <FontAwesomeIcon icon={getSortIcon('examDate')} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedData()
                    .filter(
                      (candidate) =>
                        candidate.exam.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        candidate.email.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((candidate, index) => (
                      <tr key={index}>
                       
                        <td>{candidate.srNo}</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(index)}
                            onChange={(e) => handleRowSelect(e, index)}
                          />
                        </td>
                        <td>{candidate.exam}</td>
                        <td>{candidate.email}</td>
                        <td>{candidate.examDate}</td>
                      </tr>
                    ))}
                  <tr>
                    <td colSpan={5}>
                      <div>
                        <Button
                          as="input"
                          variant="primary"
                          type="submit"
                          value="Submit"
                          id="SubmitBttn"
                          width={'8%'}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
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
        </Container>
      </div>
    </>
  );
};

export default AddcandidatetoExam;
