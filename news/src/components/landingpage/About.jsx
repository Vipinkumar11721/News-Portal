import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {location?.pathname !== "/" && <Navbar />}

      <div className="container-fluid bg-light py-5">
        <div className="row">
            <div className="text-center mb-2">
                <p className="fs-2 fw-semibold mb-2">
                  About <span className="text-mycolor">News Times</span>
                </p>
                <hr className="heading-decoration" />
              </div>

          <div className="col-sm-10 mx-auto">
            <div className="row align-items-center mb-5" data-aos="fade-right">
              <div className="col-md-6">
                <p>
                  <strong>News Times</strong> is a forward-thinking digital news
                  hub committed to accuracy, depth, and transparency. From
                  breaking headlines to in-depth analyses, we cover stories that
                  matter — across politics, science, culture, tech, and the
                  world.
                </p>
                <p>
                  We believe informed citizens build stronger societies. That’s
                  why our stories aim to inspire, question, and empower.
                </p>
              </div>
              <div className="col-md-6" data-aos="zoom-in">
                <div className="ratio ratio-16x9 shadow-sm rounded">
                  <iframe
                    src="https://www.youtube.com/embed/by80uSmUvpM?si=eGuI3ojvfgLOdgR5"
                    title="News Times Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-5" data-aos="fade-left">
              <div className="col-md-4 mb-3">
                <img
                  src="/images/headline1.jpg"
                  className="img-fluid rounded shadow-sm"
                  alt="Newsroom"
                />
              </div>
              <div className="col-md-8">
                <p>
                  With a dedicated team of journalists, designers, developers,
                  and editors, we produce original content with a global
                  perspective. We’re driven by curiosity, fact-based
                  storytelling, and a sense of responsibility to our readers.
                </p>
                <p>
                  Community matters. Our platform lets you interact, share, and
                  discuss stories that affect us all.
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="row py-4 text-center" data-aos="zoom-in">
              <div className="text-center mb-2">
                <p className="fs-2 fw-semibold mb-2">
                  Vision <span className="text-mycolor">& Mission</span>
                </p>
                <hr className="heading-decoration" />
              </div>
              <div className="col-12">
                <p>
                  <strong>Vision:</strong> To redefine global journalism through
                  integrity and impact.
                </p>
                <p>
                  <strong>Mission:</strong> To keep truth at the core of every
                  story, while educating, engaging, and empowering readers
                  across borders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
