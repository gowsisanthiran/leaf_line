// // 
// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { Container, Row, Col } from 'react-bootstrap';
// import bananaLeafImage from '../../images/pic04.jpeg';
// import farmImage from '../../images/parallax1.jpg';
// import compostImage from '../../images/parallax2.jpeg';
// import './aboutus.css';

// const AboutUs = () => {
//   return (
//     <Container className="p-4">
//       <h3 className="mb-4">About Us</h3>
//       <hr className="my-4" />
//       <Row className="mb-4">
//         <Col xs={12} sm={6}>
//           <h4>Our Mission</h4>
//           <p className="p-4">
//             At Banana Leaf Plates, our mission is to provide sustainable and eco-friendly alternatives to disposable tableware. We believe in the power of natural materials and their positive impact on the environment. Our goal is to make it easy for individuals and businesses to adopt eco-friendly practices in their daily lives. We strive to promote awareness about the harmful effects of single-use plastic and inspire positive change.
//           </p>
//           <Button variant="primary" className="mt-4">Learn More</Button>
//         </Col>
//         <Col xs={12} sm={6}>
//           <h4>Our Products</h4>
//           <p className="p-4">
//             All our plates are made from biodegradable and compostable banana leaves. We source these leaves from local farmers who practice sustainable agriculture. Our plates are not only eco-friendly but also sturdy and suitable for various occasions, from casual picnics to elegant parties. By choosing our products, you contribute to reducing plastic waste and promoting a healthier planet. Explore our wide range of sizes and designs to find the perfect fit for your eco-conscious lifestyle.
//           </p>
//           <Button variant="primary" className="mt-4">Shop Now</Button>
//         </Col>
//       </Row>
//       <Row>
//         <Col xs={12} sm={6} md={2}>
//           <img src={bananaLeafImage} alt="Banana Leaf" className="image" />
//           <img src={farmImage} alt="Sustainable Farming" className="image" />
//           <img src={compostImage} alt="Compost" className="image" />
//           <p className="p-4">
//             Thank you for supporting our mission to create a greener world. Together, we can make a difference by embracing sustainable choices and preserving the beauty of our planet for future generations. Join us in our journey towards a more sustainable future.
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AboutUs;




import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import bananaLeafImage from '../../images/pic04.jpeg';
import farmImage from '../../images/parallax1.jpg';
import compostImage from '../../images/parallax2.jpeg';
import '../Pages/aboutus.css';

const AboutUs = () => {
  useEffect(() => {
    const image = document.querySelector('.image');
    const content = document.querySelector('.content');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;

      // Parallax effect for the image
      image.style.transform = `translateY(${scrollPosition * 0.5}px)`;

      // Fade-in effect for the content
      const contentPosition = content.offsetTop;
      const windowHeight = window.innerHeight;
      if (scrollPosition > contentPosition - windowHeight) {
        content.classList.add('fade-in');
      } else {
        content.classList.remove('fade-in');
      }
    });
  }, []);

  return (
    <Container className="p-4">
      <h3 className="mb-4">About Us</h3>
      <hr className="my-4" />
      <Row className="mb-4">
        <Col xs={12} sm={6}>
          <h4>Our Mission</h4>
          <p className="p-4">
            At Banana Leaf Plates, our mission is to provide sustainable and eco-friendly alternatives to disposable tableware. We believe in the power of natural materials and their positive impact on the environment. Our goal is to make it easy for individuals and businesses to adopt eco-friendly practices in their daily lives. We strive to promote awareness about the harmful effects of single-use plastic and inspire positive change.
          </p>
          <Button variant="primary" className="mt-4">Learn More</Button>
        </Col>
        <Col xs={12} sm={6}>
          <h4>Our Products</h4>
          <p className="p-4">
            All our plates are made from biodegradable and compostable banana leaves. We source these leaves from local farmers who practice sustainable agriculture. Our plates are not only eco-friendly but also sturdy and suitable for various occasions, from casual picnics to elegant parties. By choosing our products, you contribute to reducing plastic waste and promoting a healthier planet. Explore our wide range of sizes and designs to find the perfect fit for your eco-conscious lifestyle.
          </p>
          <Button variant="primary" className="mt-4">Shop Now</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={5} sm={3} md={2}>
          <div className="parallax-wrapper">
            <div className="image-container">
              <img src={farmImage} alt="Banana Leaf" className="image" />
            </div>
            <div className="content">
              <p className="p-4">
                Thank you for supporting our mission to create a greener world. Together, we can make a difference by embracing sustainable choices and preserving the beauty of our planet for future generations. Join us on our journey towards a more sustainable future.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
