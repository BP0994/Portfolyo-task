"use client";

import { useEffect, useState } from "react";
import Workexperience from "./workexperience";
import Skills from "./skills";

const Introduction = ({description, name , address , email, image}:{description:string;name:string;address:string,email:string, image:string}) => {
  const [about, setAbout] = useState([]);
  const [work, setWork] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((response) => response.json())
      .then((data) => {
        setAbout(data.user.about);
        setWork(data.user.timeline);
        setSkills(data.user.skills);
        console.log(data.user.testimonials);
        // console.log(userData)
      });
  }, []);
  return (
    <div className="" id="home">
      <div className="content-lines-wrapper">
        <div className="content-lines-inner">
          <div className="content-lines"></div>
        </div>
      </div>
      {/* <!-- /.content-lines-wrapper --> */}

     {/* <---- header  ---> */}
       

      <section
        id="about"
        className="about-section section-padding bd-bottom"
        data-scroll-index="1"
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-7 sm-padding wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              <div className="about-content">
                <h2 className="text-slate-50">Let Me Introduce Myself.</h2>
                <p>{description}</p>
                <ul className="profile-info">
                  <li>
                    <span>Full Name</span> {name}
                  </li>
                  <li>
                    <span>Birth Date</span> 01-01-1990
                  </li>
                  <li>
                    <span>Address</span>
                    {address}
                  </li>
                  <li>
                    <span>Email</span>
                    {email}
                  </li>
                  {/* <li>
                    <span>Website</span> JacobHarrison.com
                  </li> */}
                </ul>
                <a href="#" className="default-btn no-underline">
                  Download CV <i className="ti-download"></i>
                </a>
              </div>
            </div>
            <div
              className="col-md-5 sm-padding wow fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              <div className="about-bg">
                <img src={image} alt="img" />
                <div className="dots"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /.about-section --> */}

      <section
        id="resume"
        className="resume-section section-padding bd-bottom"
        data-scroll-index="2"
      >
        <div className="container">
          <div className="row ">
            <div
              className="col-md-6 sm-padding wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1000ms"
            >
              <div className="section-heading mb-40 text-white">
                <h2>Working Experience</h2>
              </div>
              {work.map(
                (data: {
                  company_name: string;
                  startDate: string;
                  endDate: string;
                  bulletPoints: string;
                  jobTitle: string;
                  jobLocation: string;
                }) => {
                  return (
                    <div key={data.company_name} className="my-8">
                      <Workexperience
                        company_name={data.company_name}
                        start={data.startDate.slice(0, 10)}
                        end={data.endDate.slice(0, 10)}
                        jobLocation={data.jobLocation}
                        description={data.bulletPoints}
                        jobTitle={data.jobTitle}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /.resume-section --> */}
      <section
        id="skills"
        className="services-section section-padding bd-bottom "
        data-scroll-index="4"
      >
        <div className="container">
          <div
            className="section-heading mb-40 text-center wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1000ms"
          >
            <h2>SKILLS</h2>
          </div>
          <div className="  flex flex-wrap gap-4">
            {skills.map((data: { name: string; image: { url: string } }) => {
              return (
                <Skills
                  key={data.name}
                  name={data.name}
                  image={data.image.url}
                />
              );
            })}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Introduction;
