import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Form, Dropdown, Pagination } from 'react-bootstrap';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

function CandidateList() {
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

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => setSearchQuery(e.target.value);

  // Sample data for the table
  const tableData = [
    { id: 1, candidateId: '01-02-2024', candidateName: 'John Doe', emailId: 'john.doe@example.com', contactNumber: '1234567890', createdOn: '01-02-2024', status: 'Active' },
    { id: 2, candidateId: '11-12-2021', candidateName: 'Jane Smith', emailId: 'jane.smith@example.com', contactNumber: '2345678901', createdOn: '11-12-2021', status: 'Inactive' },
    { id: 3, candidateId: '21-09-2023', candidateName: 'Robert Brown', emailId: 'robert.brown@example.com', contactNumber: '3456789012', createdOn: '21-09-2023', status: 'Active' },
    { id: 4, candidateId: '10-02-2024', candidateName: 'Emily White', emailId: 'emily.white@example.com', contactNumber: '4567890123', createdOn: '10-02-2024', status: 'Pending' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(parseInt(selectedOption.value));

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = tableData.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Sorting states
  const [sortColumn, setSortColumn] = useState(null);  // which column is being sorted
  const [sortOrder, setSortOrder] = useState('asc');   // ascending or descending

  // Sorting logic
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

  // Filter data based on search query
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
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          display: 'block',
        }}
      >
        <Row style={{ backgroundColor: 'rgb(246, 246, 246)', padding: '1%' }}>
          <Col sm={8} style={{ fontSize: '26px', fontWeight: 'bold', color: 'rgb(51, 51, 51)' }}>
            Candidate List
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
                  <th onClick={() => handleSort('Id')}>
                    Sr. No. <FontAwesomeIcon icon={getSortIcon('Id')}/>
                  </th>
                  <th onClick={() => handleSort('candidateId')}>
                    Candidate ID <FontAwesomeIcon icon={getSortIcon('candidateId')} />
                  </th>
                  <th onClick={() => handleSort('candidateName')}>
                    Candidate Name <FontAwesomeIcon icon={getSortIcon('candidateName')} />
                  </th>
                  <th onClick={() => handleSort('emailId')}>
                    Email ID <FontAwesomeIcon icon={getSortIcon('emailId')} />
                  </th>
                  <th onClick={() => handleSort('contactNumber')}>
                    Contact No. <FontAwesomeIcon icon={getSortIcon('contactNumber')} />
                  </th>
                  <th onClick={() => handleSort('status')}>
                    Status <FontAwesomeIcon icon={getSortIcon('status')} />
                  </th>
                  <th onClick={() => handleSort('createdOn')}>
                    Created On <FontAwesomeIcon icon={getSortIcon('createdOn')} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((candidate, index) => (
                  <tr key={candidate.id} style={{ backgroundColor: '#f8f9fa' }}>
                    <td>{index + 1}</td> {/* Sr. No. */}
                    <td>{candidate.candidateId}</td>
                    <td>{candidate.candidateName}</td>
                    <td>{candidate.emailId}</td>
                    <td>{candidate.contactNumber}</td>
                    <td>{candidate.status}</td>
                    <td>{candidate.createdOn}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Pagination */}
            <Row id="Entry-Container">
              <Col sm={3}>Showing {currentPage} of {Math.ceil(tableData.length / entriesPerPage)} entries</Col>
              <Col sm={9} style={{ justifyContent: 'end' }}>
                <Pagination style={{ float: 'right' }}>
                  <Pagination.First />
                  <Pagination.Item active>{currentPage}</Pagination.Item>
                  <Pagination.Item>{currentPage + 1}</Pagination.Item>
                  <Pagination.Item>{currentPage + 2}</Pagination.Item>
                  <Pagination.Last />
                </Pagination>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CandidateList;
