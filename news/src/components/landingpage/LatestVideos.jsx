
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
function LatestVideos() {
  const location = useLocation()
  const navigate=useNavigate()
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/top-video');
    if (response?.data?.code == 200) {
      setData(response?.data?.data)
    }
  }

  return (
    <>
      {location?.pathname !== "/" && <Navbar />}
      <div className='row py-2'>
        <p className='text-center fs-3'>Latest <b className='text-mycolor'>Video</b></p>
        <div className='col-sm-10 mx-auto'>
          <div className='row py-3  d-flex justify-content-center'>
            {data?.map((item) => { 
               const getEmbedUrl = (url) => {
                  try {
                    // Check for short youtu.be URLs
                    if (url.includes("youtu.be")) {
                      const id = url.split("youtu.be/")[1].split("?")[0];
                      return `https://www.youtube.com/embed/${id}`;
                    }

                    // Check for normal youtube.com/watch?v=... URLs
                    if (url.includes("youtube.com/watch?v=")) {
                      const id = url.split("watch?v=")[1].split("&")[0];
                      return `https://www.youtube.com/embed/${id}`;
                    }

                    return url; // fallback (might be image or other type)
                  } catch (error) {
                    return url;
                  }
                };
              return (<>
                <div onClick={()=>{localStorage.setItem("newsDetails",JSON.stringify(item));navigate('/news-details')}}  className='col-sm-2  mb-3'>
                  <a href='#'>
                    <div  data-aos="zoom-in" className="card mx-auto shadow-lg catcard border border-0 ">
                      <iframe
                        className='video_div'
                       src={getEmbedUrl(item?.url)}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen=""
                      />
                      <div className="card-body">
                        <h6 className="card-title text-center m-0">{item?.title}</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </>)
            })}  
            { data?.length==0 && <h3 className='text-center'>No Record Found</h3>}
          </div>
        </div>
      </div>
    </>
  )
}
export default LatestVideos
