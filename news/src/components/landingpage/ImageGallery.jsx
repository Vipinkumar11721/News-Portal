import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NoRecordFound from './NoRecordFound';
import AOS from "aos";
import "aos/dist/aos.css";

function ImageGallery() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/top-city');
    if (response?.data?.code === 200) {
      setData(response?.data?.data);
    }
  };

  return (
    <>
      {location?.pathname !== "/" && <Navbar />}

      <div className='container-fluid py-3'>
        <div className='text-center'>
          <p className='fs-3 fw-bold'>
            Image <b className='headingText'>Gallery</b>
          </p>
          <hr className='heading-decoration' />
        </div>

        <div>
          <div className='row g-4 justify-content-center'>
            {data?.map((item, index) => (
              <div
                key={index}
                className='col-6 col-md-4 col-lg-2 catcard'
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                onClick={() => {
                  localStorage.setItem("newsDetails", JSON.stringify(item));
                  navigate('/news-details');
                }}
              >
                <div className="card shadow-sm border-0 h-100">
                  <img
                    src={item?.url}
                    alt={item?.city}
                    className='img-fluid rounded'
                    style={{ height: '140px', objectFit: 'cover', width: '100%' }}
                  />
                </div>
              </div>
            ))}
            {data?.length === 0 && (
              <div data-aos="fade-up">
                <NoRecordFound />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageGallery;
