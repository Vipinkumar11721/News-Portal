import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function NewsCategory() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:9000/api/top-category");
    if (response?.data?.code === 200) {
      setData(response?.data?.data);
    }
  };

  return (
    <>
      {location?.pathname !== "/" && <Navbar />}

      <div className="container-fluid py-4 bg-light">
        <div className="text-center mb-4">
          <p className="fs-2 fw-semibold mb-2">
            News <b className="text-mycolor">Category</b>
          </p>
          <hr className="heading-decoration" />
        </div>

        <div className="container-fluid px-5">
          <div className="row g-4 justify-content-center">
            {data?.map((item, index) => (
              <div
                key={index}
                className="col-6 col-md-4 col-lg-3 catcard"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                onClick={() => {
                  localStorage.setItem("newsDetails", JSON.stringify(item));
                  navigate("/news-details");
                }}
              >
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={item?.url}
                    className="card-img-top img-fluid"
                    style={{ height: "180px", objectFit: "cover" }}
                    alt={item?.category}
                  />
                  <div className="card-body p-2">
                    <h6 className="card-title text-center m-0">
                      {item?.category}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
            {data?.length === 0 && (
              <h4 className="text-center mt-4" data-aos="fade-up">
                No Record Found
              </h4>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsCategory;
