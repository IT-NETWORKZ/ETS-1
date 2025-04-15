import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaQuestionCircle, 
  FaBook, 
  FaShoppingCart, 
  FaCertificate, 
  FaBars,
  FaClipboardList
} from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import '../styles/Sidebar.css';

const Sidebar = ({ onCollapse }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onCollapse(!isCollapsed);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, path: '/' },
    { 
      name: 'Master', 
      icon: <FaUsers />, 
      submenu: [
        { name: 'Category', path: '/master/manage-category' },
        { name: 'Subjects', path: '/master/manage-subjects' },
        { name: 'Subject Info', path: '/master/manage-subject-info' }
      ]
    },
    { name: 'Candidates', icon: <FaUsers /> },
    { name: 'Admin', icon: <FaUsers /> },
    { name: 'Exam', icon: <FaBook /> },
    { name: 'Questions', icon: <FaQuestionCircle /> },
    { name: 'Survey', icon: <FaBook /> },
    { name: 'Certificate', icon: <FaCertificate /> },
    { name: 'Purchase Details', icon: <FaShoppingCart /> },
    { name: 'Surveys', icon: <FaClipboardList /> },
    { name: 'Exam Superadmin Panel', icon: <FaBook />, active: true },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className={item.active ? 'active' : ''}>
            <div className="menu-item-content" onClick={() => toggleDropdown(index)}>
              <div className="menu-item-left">
                {item.icon}
                {item.path ? (
                  <Link to={item.path}>
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <span>{item.name}</span>
                )}
              </div>
              {!isCollapsed && item.submenu && (
                <div className="menu-item-right">
                  {openDropdown === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              )}
            </div>
            {!isCollapsed && openDropdown === index && item.submenu && (
              <ul className="submenu">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link to={subItem.path}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;