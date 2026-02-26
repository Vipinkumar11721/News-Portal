import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function TopNavbar() {
    return (<>
        <div className="TopNav d-flex justify-content-around align-items-center py-3">
            <div className="fs-5"><MdOutgoingMail  className='me-1 fs-3'/>vipinkumar11721@gmail.com</div>
            <div><FaFacebook  className='me-2 fs-4'/>
                <FaYoutube className='me-2 fs-4' />
                <FaTwitter  className='me-2 fs-4'/>
                <FaInstagramSquare className='me-2 fs-4' />
            </div>
        </div>
    </>);
}
export default TopNavbar;