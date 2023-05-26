import React, { useEffect } from 'react';
import sl15 from '../../images/about.png';
import sl16 from '../../images/about3.png';
import sl17 from '../../images/pic05.jpeg';
import sl18 from '../../images/pic07.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="da-projects" id="projects" data-aos="fade-up">
      <div className="row mx-0">
        <div className="col-lg-6 col-md-12 px-0 da-project-1" style={{ backgroundImage: "url('../../images/abou2.png')" }} data-aos="zoom-in"></div>
        <div className="col-lg-6 col-md-12 pl-5 pt-5 pb-3">
          <div className="row">
            <div className="col-1 da-project-icon"><i className="text-warning fas fa-user-md fa-2x fa-fw"></i></div>
            <div className="col-10">
              <div className="h4">About Us</div>
              <p>The Leafline Banana Leaf Plates are eco-friendly and sustainable alternatives to traditional disposable plates. These plates are made from 100% natural and biodegradable banana leaves. They are fully biodegradable, meaning they can naturally decompose without causing harm to the environment.</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-1 da-project-icon"><i className="text-info fas fa-book fa-2x fa-fw"></i></div>
            <div className="col-10">
              <div className="h4">Education</div>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1 da-project-icon"><i className="fas fa-shopping-basket fa-2x fa-fw"></i></div>
            <div className="col-10">
              <div className="h4">Digital Retail</div>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col-lg-6 col-md-12 pl-5 pt-5 pb-3">
          <div className="row mb-3">
            <div className="col-1 da-project-icon"><i className="text-warning fas fa-money-bill-alt fa-2x fa-fw"></i></div>
            <div className="col-10">
              <div className="h4">Finance</div>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-1 da-project-icon"><i className="text-info far fa-chart-bar fa-2x fa-fw"></i></div>
            <div className="col-10">
              <div className="h4">Marketing</div>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1 da-project-icon"><i className="fas fa-music fa-2x fa-fw"></i></div>
            <div className="col-10">
              <div className="h4">Entertainment</div>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 px-0 da-project-2" style={{ backgroundImage: "url('images/da-img-5.jpg')" }} data-aos="zoom-in"></div>
      </div>
    </div>

  );
};

export default AboutPage;


