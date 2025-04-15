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
import '../styles/SidebarAd.css';

const SidebarAd = ({ isCollapsed, onCollapse }) => {
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
    // {
    //   title: "Demo Exam",
    //   icon: <FaBook />,
    //   link: "/demo-exam", // Direct link without dropdown
    //   noDropdown: true
    // },
    {
      title: "My candidates",
      icon: <FaUsers />,
      subItems: ["Add New Candidate", "candidate List"]
    },
    {
      title: "Exam",
      icon: <FaUsers />,
      subItems: ["Exam List", "Add Candidate To Exam", "Exam Candidate List", "Exam History","Exam Results"]
    },
    {
      title: "Questions",
      icon: <FaQuestionCircle />,
      subItems: ["Add Questions", "Manage Questions", "XLS Question Upload", "Search Questions"]
    },
    {
      title: "Exam Payment",
      icon: <FaBook />,
      subItems: ["Exam Payment History", "Buy/Renew Package"]
    },
    {
      title: "Master",
      icon: <FaCertificate />,
      subItems: ["Exam Help", "Subjects", "Notice"]
    },
    {
      title: "Certificate gallery",
      icon: <FaShoppingCart />,
      noDropdown: true
    },
    {
      title: "Surveys Info",
      icon: <FaClipboardList />,
      subItems: ["Survey List", "Add Questions To Survey", "Add Candidate To Survey", "View Survey Questions", "Survey Status","Survey Package", "Survey Payment", "Survey Payment History"]
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

export default SidebarAd;