import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import profilepic from './profilepic.jpg'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [inputList, setInputList] = useState([{ nodeName: "", isDisplay: false }]);
  const [displayInput, setDisplayInput] = useState(true);
  console.log(inputList)

  const showSidebar = () => setSidebar(!sidebar);

  // const handleInputChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...inputList];
  //   list[index][name] = value;
  //   setInputList(list);
  // };

  const handleRemoveClick = (e, index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    setDisplayInput(false);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      const { name, value } = event.target;
      const data = {nodeName:value, isDisplay:true}
      const list = [...inputList, data];
      // list[index][name] = value;
      // console.log(name);
      setInputList(list);
      setDisplayInput(false);
    }
  }

  const handleAddClick = () => {
    setDisplayInput(true);
    setInputList([...inputList, { nodeName: "", isDisplay: true }]);
  };

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
              <snap style={{ marginLeft: "1rem", cursor: "pointer" }}>Invite team member</snap>
            </div>
            <div className="profile-div"><img src={profilepic} alt="static profile pic" className="profile-pic" /></div>
          </div>
          <div className="header-part">
            <div className="nav-main">
              <span className="nav-main-item">All</span>
              <span className="nav-main-item">Board</span>
              <span className="nav-main-item">Graph</span>
              <span className="nav-main-item">Recent</span>
              <span><BiDotsVerticalRounded className="nav-icon" /></span>
            </div>
            <div style={{ width: "20%" }}></div>
          </div>
        </div>
        <div className="nav-menu-main">
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' >
              <li className='navbar-toggle-menu'>
                <div>Index</div>
                <div className='navbar-toggle'>
                  <span onClick={handleAddClick}><GrIcons.GrAdd className="nav-icon" /></span>
                  <Link to='#' className='menu-bars' onClick={showSidebar}>
                    <FaIcons.FaAngleDoubleLeft className="nav-icon" />
                  </Link>
                </div>
              </li>
              {inputList.map((x, i) => {
                return(
              <li value={x.nodeName} className="nav-text">
                { x.isDisplay ? 
                  <snap><input type="text" onKeyDown={e => handleKeyDown(e, i)} name="nodeName" placeholder="Enter the name of the node"  />
                <div className="btn-box">
                  <snap onClick={() => handleRemoveClick(i)}><FaIcons.FaTimes className="nav-icon" /></snap>
                </div></snap> : 
                <li key={i} className="">
                    {/* <Link to={item.path}> */}
                      <span>{x.nodeName}</span>
                    {/* </Link> */}
                  </li> }
              </li> )})}
              {/* {inputList.map((item, index) => {
                return (
                  <li key={index} className="">
                    <Link to={item.path}>
                      <span>{item.nodeName}</span>
                    </Link>
                  </li>
                );
              })} */}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;