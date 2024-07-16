import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
      
    <p style={{ textAlign: "justify" }}>
        Hello! I'm Hadeer Magdy, a passionate Front-End Developer with a knack for creating dynamic and user-friendly web applications. With a strong foundation in HTML, CSS, JavaScript, and React.js, I enjoy turning complex problems into intuitive and responsive interfaces.
      </p>
   <p  style={{ textAlign: "justify" }}>Graduated from faculty of computer and information system cairo university</p>
     
      <p  style={{ textAlign: "justify" }}>
        Feel free to browse through my portfolio to see some of the projects I’ve worked on. I'm always open to new opportunities and collaborations, so don't hesitate to get in touch!
      </p>



    

        
          <footer className="blockquote-footer">Hadeer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
