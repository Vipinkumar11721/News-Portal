import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoNewspaperSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/slider-img1.webp'
import img2 from '../../assets/slider-img2.avif'
import img3 from '../../assets/slider-img3.jpg'

function Slid() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/top-ten-news');
    if (response?.data?.code == 200) {
      setData(response?.data?.data)
    }
  }


  return (<>

    <div className='row slider px-5 mt-3 slider-container'>
   <div className='col-sm-8 p-0'>
  <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">
        <img src={img1} className="d-block w-100 img-fluid sliderimg" alt="..." />
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src={img2} className="d-block w-100 img-fluid sliderimg" alt="..." />
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src={img3} className="d-block w-100 img-fluid sliderimg" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

      <div className='col-sm-4 headmarquee'>
        <h3 className='text-center bg-light'>Top 10 News <b className='text-mycolor'>Headline</b></h3>
        <marquee direction="up" className='headline' behavior="alternate">

          {data?.map((item) => {
            return (<>
              <div onClick={() => { localStorage.setItem("newsDetails", JSON.stringify(item)); navigate('/news-details') }} className="card mb-3 mx-auto shadow-lg border border-0">
                <div className="row g-0">
                  <div className="col-md-4">
                    {item?.type == 'image' ?
                      <img src={item?.url} className="img-fluid rounded-start headlineimg" alt="..." /> :
                      //  <video src={item?.url}/>
                      <iframe
                        width={100}
                        height={100}
                        src="{item?.url}"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen=""
                      />}

                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-1">
                      <p className="card-text m-0">
                        <b>{item?.title}</b><br />
                        <p>{item?.desc?.slice(0, 10)}...</p>
                      </p>
                      <p className='m-0'><a className='btn bg-mycolor text-light p-1'>View More </a></p>

                      <p className="card-text">
                        <small className="text-body-secondary">{new Date(item?.createAt)?.toDateString()}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </>)
          })}
          {data?.length == 0 && <h3 className='text-center'>No Record Found</h3>}
        </marquee>
      </div>
    </div>

  </>)
}
export default Slid;