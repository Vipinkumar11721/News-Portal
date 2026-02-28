import React, { useEffect, useState } from 'react'
import Navbar from '../landingpage/Navbar'
import axios from 'axios';
import API_BASE_URL from '../../config/apiConfig';
import Swal from 'sweetalert2';
const YourNews = () => {
  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const userData = JSON.parse(localStorage.getItem('userInfo'))
    const response = await axios.get(`${API_BASE_URL}/user-your-news?userId=${userData?._id}`)
    if (response?.data?.code == 200) {
      setNewsList(response?.data?.data)
    }
  }

  const showDescription = (des) => {
    Swal.fire({
      text: des,
      icon: "info"
    })
  }

  return (
    <>
      <Navbar />
      <div className="row mt-3">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <h1 className='text-center'>Your<span className='text-mycolor'>News</span></h1>
          <table className="table">
            <thead className='table table-dark'>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">City</th>
                <th scope="col">Media</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {newsList?.map((item, index) => {
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

                return (
                  <tr key={index}>
                    <th>{item?.title}</th>
                    <td>{item?.category}</td>
                    <td>{item?.city}</td>
                    <td>
                      {item?.type === "image" ? (
                        <img height="60" width="100" src={item?.url} alt="news" />
                      ) : (
                        <iframe
                          height="60"
                          width="100"
                          src={getEmbedUrl(item?.url)}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      )}
                    </td>
                    <td onClick={() => showDescription(item?.desc)}>
                      {item?.desc?.slice(0, 15)}...
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
          {newsList?.length == 0 && <h3 className='text-center'>No Records Found</h3>}
        </div>
        <div className="col-sm-1"></div>
      </div>
    </>
  )
}
export default YourNews
