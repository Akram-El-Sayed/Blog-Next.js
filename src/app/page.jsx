"use client";
import NavBar from "@/Components/NavBar/NavBar";
import  Carousel  from "react-bootstrap/Carousel";


export default function HomePage() {
  return (
    <>
   <NavBar/>
    <Carousel fade className="w-100 m-auto rounded-2 ">
       <Carousel.Item>
        <img src="https://picsum.photos/1600/650?1" alt="img1"className="d-block w-100 rounded-2"/>
        <Carousel.Caption>
          <h3>First img label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        <img src="https://picsum.photos/1600/650?2" alt="img2"className="d-block w-100 rounded-2"/>
        <Carousel.Caption>
          <h3>Secound img label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        <img src="https://picsum.photos/1600/650?3" alt="img3"className="d-block w-100 rounded-2"/>
        <Carousel.Caption>
          <h3>Third img label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
     </>
  );
}
