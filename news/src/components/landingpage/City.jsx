import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from '../../config/apiConfig';
import NoRecordFound from "./NoRecordFound";
import AOS from "aos";
import "aos/dist/aos.css";

function City() {
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
    const response = await axios.get(`${API_BASE_URL}/top-city`);
    if (response?.data?.code === 200) {
      setData(response?.data?.data);
    }
  };

  return (
    <>
      {location?.pathname !== "/" && <Navbar />}

      <div className="container-fluid py-3">
        <div className="text-center">
          <p className="fs-3 fw-bold">
            Top <b className="text-mycolor">City</b>
          </p>
          <hr className="heading-decoration" />
        </div>

        <div className="container-fluid px-5">
          <div className="row g-4 justify-content-center ">
            {data?.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                onClick={() => {
                  localStorage.setItem("newsDetails", JSON.stringify(item));
                  navigate("/news-details");
                }}
                className="col-6 col-md-4 col-lg-2 catcard"
              >
                <div className="card shadow-sm border-0 h-100">
                  <img
                    src={item?.url}
                    alt={item?.city}
                    className="img-fluid rounded-top"
                    style={{
                      height: "140px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <div className="card-body p-2">
                    <h6 className="card-title text-center m-0">{item?.city}</h6>
                  </div>
                </div>
              </div>
            ))}
            {data?.length === 0 && <NoRecordFound />}
          </div>
        </div>
      </div>
    </>
  );
}

export default City;
