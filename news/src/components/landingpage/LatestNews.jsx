import axios from 'axios';
import API_BASE_URL from '../../config/apiConfig';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoRecordFound from './NoRecordFound';

function LatestNews() {
  const [categoryList, setCatrgoryList] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCategory();
    fetchTopNews();
    fetchCity();
  }, []);

  const fetchCategory = async () => {
    const response = await axios.get(`${API_BASE_URL}/top-category`);
    if (response?.data?.code === 200) {
      setCatrgoryList(response?.data?.data?.slice(0, 5));
    }
  };

  const fetchTopNews = async () => {
    const response = await axios.get(`${API_BASE_URL}/top-ten-news`);
    if (response?.data?.code === 200) {
      setNewsList(response?.data?.data?.slice(0, 3));
    }
  };

  const fetchCity = async () => {
    const response = await axios.get(`${API_BASE_URL}/top-city`);
    if (response?.data?.code === 200) {
      setCityList(response?.data?.data?.slice(0, 5));
    }
  };

  return (
    <>
      <div className='container-fluid py-3'>
        <div className='text-center'>
          <p className='fs-3 fw-bold'>
            Latest <b className='text-mycolor'>News</b>
          </p>
          <hr className='heading-decoration'/>
        </div>
        <div className='row g-4'>
          {/* Categories */}
          <div className='col-12 col-md-3'>
            <div className="card shadow-sm h-100">
              <div className="card-header text-center bg-mycolor text-light">
                <h5 className='mb-0'>News Category</h5>
              </div>
              <ul className="list-group list-group-flush overflow-auto" style={{ maxHeight: '70vh' }}>
                {categoryList?.map((item, i) => (
                  <li key={i} onClick={() => {
                    localStorage.setItem("newsDetails", JSON.stringify(item));
                    navigate('/news-details');
                  }} className="list-group-item p-2">
                    <div className='card border-0'>
                      <div className='row g-0 align-items-center'>
                        <div className='col-4'>
                          <img src={item?.url} className='img-fluid rounded-start' alt={item?.category} />
                        </div>
                        <div className='col-8'>
                          <p className='text-center m-0'><b>{item?.category}</b></p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                {categoryList?.length === 0 && <h6 className='text-center my-3'>No Record Found</h6>}
              </ul>
            </div>
          </div>

          {/* Latest News */}
          <div className='col-12 col-md-6'>
            {newsList?.map((item, i) => (
              <div key={i} onClick={() => {
                localStorage.setItem("newsDetails", JSON.stringify(item));
                navigate('/news-details');
              }} className="card mb-3 shadow-sm border-0">
                <div className="row g-0">
                  <div className="col-4">
                    <img src={item?.url} className="img-fluid rounded-start h-100 w-100 object-fit-cover" alt={item?.title} />
                  </div>
                  <div className="col-8">
                    <div className="card-body p-2">
                      <h6 className="card-title fw-semibold">{item?.title}</h6>
                      <p className="card-text small">{item?.desc?.slice(0, 130)}...</p>
                      <div className='d-flex justify-content-between align-items-center flex-wrap'>
                        <span className='badge bg-mycolor text-light'>View More</span>
                        <small>{item?.category}, {item?.city}</small>
                      </div>
                      <small className="text-muted d-block mt-1">Last updated {new Date(item?.createAt).toDateString()}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {newsList?.length === 0 && <NoRecordFound/>}
          </div>

          {/* Cities */}
          <div className='col-12 col-md-3'>
            <div className="card shadow-sm h-100">
              <div className="card-header text-center bg-mycolor text-light">
                <h5 className='mb-0'>City</h5>
              </div>
              <ul className="list-group list-group-flush overflow-auto" style={{ maxHeight: '70vh' }}>
                {cityList?.map((item, i) => (
                  <li key={i} onClick={() => {
                    localStorage.setItem("newsDetails", JSON.stringify(item));
                    navigate('/news-details');
                  }} className="list-group-item p-2">
                    <div className='card border-0'>
                      <div className='row g-0 align-items-center'>
                        <div className='col-4'>
                          <img src={item?.url} className='img-fluid rounded-start' alt={item?.city} />
                        </div>
                        <div className='col-8'>
                          <p className='text-center m-0'><b>{item?.city}</b></p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                {cityList?.length === 0 && <h6 className='text-center'>No Record Found</h6>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestNews;
