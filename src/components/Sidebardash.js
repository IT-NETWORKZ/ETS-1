import React, { useState } from 'react';
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaQuestionCircle, 
  FaBook, 
  FaShoppingCart, 
  FaCertificate, 
  FaBars,
  FaClipboardList,
  FaCaretDown
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Sidebardash.css';

const Sidebardash = ({ isCollapsed, onCollapse }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleSidebar = () => {
    onCollapse && onCollapse(!isCollapsed);
  };

  const toggleSubmenu = (menuName) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaTachometerAlt />,
      link: "/dashboardAd", // Direct link without dropdown
      noDropdown: true
    },
    {
      title: "Demo Exam",
      icon: <FaBook />,
      link: "/demo-exam", // Direct link without dropdown
      noDropdown: true
    },
    {
      title: "Exams",
      icon: <FaUsers />,
      subItems: ["Live Exam", "Practice Exam", "Quick Exam"]
    },
    {
      title: "History",
      icon: <FaUsers />,
      subItems: ["Live Exam History ", "Practice Exam History", "Quick Exam History", "Exam Payment History"]
    },
    {
      title: "Exam Results",
      icon: <FaQuestionCircle />,
      subItems: ["Live Exam Result", "Practice Exam Results", "Quick Exam Results"]
    },
    {
      title: "Questions",
      icon: <FaQuestionCircle />,
      subItems: ["Add Question Bank"]
    },
    {
      title: "Exam Payment",
      icon: <FaBook />,
      noDropdown: true
    },
    {
      title: "Notice",
      icon: <FaCertificate />,
      noDropdown: true
    },
    {
      title: "Survey Info",
      icon: <FaShoppingCart />,
      subItems: ["Transactions", "Reports", "Analytics"]
    },
    {
      title: "Surveys",
      icon: <FaClipboardList />,
      subItems: ["Active Surveys", "Draft", "Completed"]
    }
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
          <li key={index} className={openMenus[item.title] ? 'active' : ''}>
            {item.noDropdown ? (
              <Link to={item.link} className="menu-item">
                <span className="icon-wrapper">{item.icon}</span>
                <span className="menu-title">{item.title}</span>
              </Link>
            ) : (
              <>
                <div className="menu-item" onClick={() => toggleSubmenu(item.title)}>
                  <span className="icon-wrapper">{item.icon}</span>
                  <span className="menu-title">{item.title}</span>
                  <FaCaretDown className={`dropdown-arrow ${openMenus[item.title] ? 'open' : ''}`} />
                </div>
                {openMenus[item.title] && (
                  <ul className="submenu">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link to={`/${subItem.toLowerCase().replace(/\s+/g, '-')}`}>
                          <span>{subItem}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebardash;