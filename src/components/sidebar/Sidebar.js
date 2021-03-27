import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="header">
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} className="nav-icon" />
            </Link>
            <form className="searchbar-div"><input type="text" placeholder="Search" name="search" className="searchbar" /></form>
            <div className="invite-member">
              <IoIcons.IoIosPersonAdd className="nav-icon" />
              <snap>Invite team member</snap>
            </div>
          </div>
          <div className="header-part">
            <div className="nav-main">
              <span className="nav-main-item">All</span>
              <span className="nav-main-item">Board</span>
              <span className="nav-main-item">Graph</span>
              <span className="nav-main-item">Recent</span>
              <span><BiDotsVerticalRounded className="nav-icon" /></span>
            </div>
          </div>
        </div>
        <div className="nav-menu-main">
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' >
              <li className='navbar-toggle-menu'>
                <div>Index</div>
                <div className='navbar-toggle'>
                  <span><GrIcons.GrAdd className="nav-icon" /></span>
                  <Link to='#' className='menu-bars' onClick={showSidebar}>
                    <FaIcons.FaAngleDoubleLeft className="nav-icon" />
                  </Link>
                </div>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;