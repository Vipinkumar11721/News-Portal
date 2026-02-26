import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
  return (
    <>
      {/* Main Footer */}
      <div className='footer bg-black text-white pt-5'>
        <div className='px-4 px-md-5'>
          <div className='row'>

            {/* Connect with Us */}
            <div className='col-md-4 mb-4 text-center text-md-start'>
              <h5 className='mb-3 pb-2 border-bottom border-maroon'>Connect with Us</h5>
              <ul className="list-unstyled small">
                <li className="mb-2 d-flex align-items-center">
                  <FaMapMarkerAlt className='me-2 text-primary' />
                  <span>Safedabad, Barabanki, Lucknow, Uttar Pradesh</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaPhoneAlt className='me-2 text-primary' />
                  <span>+91 8756234280</span>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <FaEnvelope className='me-2 text-primary' />
                  <span>info@newsportal.com</span>
                </li>
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram].map((Icon, i) => (
                  <a key={i} href="#" className="text-maroon border border-maroon rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* About News Portal */}
            <div className='col-md-4 mb-4 text-center text-md-start'>
              <h5 className='mb-3 pb-2 border-bottom border-maroon'>About News Portal</h5>
              <p className='small'>
                Real-time updates on headlines, politics, world affairs, and more. We deliver what matters, when it matters.
                Stay informed with accurate, real-time news updates from around the world. Your trusted source for headlines, analysis, and stories that matter.
              </p>
              <ul className="list-unstyled small">
                {['Latest News', 'Politics', 'World', 'Technology', 'Entertainment', 'Sports'].map((item, index) => (
                  <li key={index}>
                    <FaArrowRightLong className='me-1 text-primary' />
                    <a href="#" className="text-white text-decoration-none hover-maroon">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Map */}
            <div className='col-md-4 mb-4 text-center text-md-start'>
              <h5 className='mb-3 pb-2 border-bottom border-maroon'>Our Office</h5>
              <div className="ratio ratio-4x3 rounded overflow-hidden">
                <iframe
                  width="400"
                  height="400"in
                 // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.5198408855654!2d80.9639843062698!3d26.898376948861006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995785d5f7f1a5%3A0xffa47f1efe103f0d!2sTechpile%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1754024828914!5m2!1sen!2s"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.342213086674!2d81.11064153326593!3d26.904212296428224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995f7a75312295%3A0xbcf7526529d1dd32!2sSeth%20Vishambhar%20Nath%20Group%20of%20Educational%20Institutions!5e0!3m2!1sen!2sin!4v1772017642927!5m2!1sen!2sin" 
                  title="Office Location"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='bfooter bg-maroon text-white text-center py-3 small'>
        <span>
          &copy; {new Date().getFullYear()} News Portal | Developed by Vipin Kumar —{" "}
          <a
            href='https://maps.app.goo.gl/tpS6LtHtKYgUo3sB6'
            className='text-white text-decoration-underline'
            target='_blank'
            rel='noreferrer'
          >
            Safedabad, Barabanki
          </a>
        </span>
      </div>
    </>
  );
}

export default Footer;
