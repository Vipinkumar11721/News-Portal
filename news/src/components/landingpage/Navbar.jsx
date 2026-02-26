import React, { useEffect, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoNewspaper } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { FaBlog } from "react-icons/fa";
import { FcFeedback } from "react-icons/fc";
import { IoLogInSharp } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { MdOutlineAppRegistration } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    setUserInfo(userData)

  }, [])

  const logOut = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');


  }
  if (userInfo?.userType == "user") {
    return (
      <>
        <div className='w-100 d-flex d-flex justify-content-center align-items-center ' style={{backgroundColor : "whitesmoke"}}>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarUl">
                   <li className="nav-item">
                    <Link className="nav-link fs-5 active" aria-current="page" to="/">
                      <FaHome /> Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5 active" aria-current="page" to="/user-alllist">
                      <IoNewspaper /> All News
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/user-profile">
                      < FcAbout />  Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/user-addnews">
                      <GrGallery /> Post
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/user-list">
                      <GrGallery /> Your News
                    </Link>
                  </li>
                  <li className="nav-item" onClick={logOut}>
                    <Link className="nav-link fs-5 active" aria-current="page" >
                      <IoLogInSharp />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    )
  } else if (userInfo?.userType == "admin") {
    return (
      <>
        <div className='w-100 d-flex d-flex justify-content-center align-items-center' style={{backgroundColor : "whitesmoke"}}>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarUl">
                   <li className="nav-item">
                    <Link className="nav-link fs-5 active" aria-current="page" to="/">
                      <FaHome /> Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5 active" aria-current="page" to="/admin-newslist">
                      <IoNewspaper /> News
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/admin-profile">
                      < FcAbout />  Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/admin-ContactUS">
                      <GrGallery /> Contact us
                    </Link>
                  </li>

                  <li className="nav-item" onClick={logOut}>
                    <Link className="nav-link fs-5 active" aria-current="page" >
                    <IoLogInSharp />
                      LogOut
                    </Link>
                  </li>


                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='w-100 d-flex d-flex justify-content-center align-items-center' style={{backgroundColor : "whitesmoke"}}>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              {/* <Link className="navbar-brand" to="/">
           News Times  
          </Link> */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarUl">
                  <li className="nav-item">
                    <Link className="nav-link fs-5 active" aria-current="page" to="/">
                      <FaHome /> Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/about">
                      < FcAbout /> About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/gallery">
                      <GrGallery /> Gallery
                    </Link>
                  </li>


                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/contact">
                      < IoIosContacts /> Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/UserSignUp">
                      <MdOutlineAppRegistration />  UserSignUp
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link fs-5" to="/login">
                      <IoLogInSharp /> Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    )
  }


}
export default Navbar
