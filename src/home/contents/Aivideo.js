import React, { useState } from "react";
import "./aivideo.css";
import { Carousel } from "react-carousel-minimal";
import ReactPlayer from "react-player";
import { Container } from "react-bootstrap";
import ReactTyped from "react-typed";

function Aivideo() {

  const [visible, setVisible] = useState(false)
  const onclickcolapse=()=>{

  }
  const data = [
    {
      image:
        "https://www.galgotiasuniversity.edu.in/public/uploads/media/2Bz0VyUyVRCIhkQp7411x8JhDaCdDJNCO4zXJARN.jpg",
      caption: "lets Talk busness",
    },
    {
      image:
        "https://s40424.pcdn.co/in/wp-content/uploads/2022/02/digital-marketing-2.jpg.optimal.jpg",
      caption: "Social Media Management",
    },
    {
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Mobile_Development_applications.jpg",
      caption: "Mobile Application developement",
    },
    {
      image:
        "https://www.nttdata.com/sg/en/-/media/nttdataapac/ndsg/services/application-development-and-management/services-appdev-header-2732x1536.jpg?h=1536&iar=0&w=2732&rev=561729029fff4977b94a5dc04f6720ad",
      caption: "Web Application development",
    },
    {
      image:
        "https://www.analyticsinsight.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg",
      caption: "Web developement",
    },
    {
      image:
        "https://www.appier.com/hubfs/Imported_Blog_Media/Why-Performance-Marketing-is-More-Relevant-Than-Ever.jpg",
      caption: "Performance Marketing",
    },
    {
      image:
        "https://www.analyticsinsight.net/wp-content/uploads/2019/11/Top-5-Countries-in-AI-Development.png",
      caption: "Ai developement",
    },
    {
      image:
        "https://cdn.flatworldsolutions.com/featured-images/search-engine-optimization-services.jpg",
      caption: "Search Engine Optimization",
    },
    {
      image:
        "https://mbluxury1.s3.amazonaws.com/2020/10/14140327/digital-branding.jpg",
      caption: "Branding Services",
    },
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",

    overflow: "hidden",

    // filter:'blur(1px)'
  };
  const videoStyle = {
    position: "absolute",
    left: "50%",

    transform: "translate(-50%, -50%) scale(1.6)",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: "-1",
    objectFit: "cover", // Ensure the video covers the entire container while maintaining aspect ratio
    overflow: "hidden;",
    borderRadious: "25px 50px 190px;",
  };
  return (
    <>
      <div className="mt-5 video">
        <div className="flex justify-center lg:mr-8">
          <div
            style={{
              padding: "0 20px",
            }}
            className="flex justify-center"
          >
            <Carousel
              data={data}
              time={2000}
              width="100%"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "500px",
                margin: "50px auto",
                objectFit: "cover;",
                overflow: "hidden",
              }}
            />
          </div>
        </div>
      </div>

      <div className="" style={containerStyle}>
        <div className="yvideo">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://youtu.be/njvC4ZZMh3I?feature=shared"
            playing={true}
            controls={false}
            loop={true}
            muted={true}
            style={videoStyle}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="heading1">
                  <span className="headingblue">99</span> Digits
                </h1>
                <h4 className="ytext flex justify-center">
                  We are an AI-integrated leading IT Services, Consulting,
                  Digital Marketing, and Branding Solutions company committed to
                  empowering businesses to thrive in the ever-evolving digital
                  landscape. Leveraging our cutting-edge technologies and
                  innovative AI-driven strategies, we enable our clients to
                  surpass their goals and maintain a competitive edge. With our
                  AI-integrated approach, we offer a seamless and intelligent
                  solution that optimizes business performance and ensures
                  sustained success in the digital era
                </h4>
                <div className="video_type flex justify-center">
                  {/* <ReactTyped 
                          strings={['We are an AI-integrated leading IT Services','Consulting, Digital Marketing','Branding Solutions company. ']}
                          loop={true}
                          typeSpeed={50}
             /> */}
                  <div class="flex flex-row mt-5">
                    <div class="flex flex-col">
                      <div class=" p-4">
                        <button class="bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-r from-black-500 to-green-500 text-white font-bold py-2 px-4 rounded">
                          Explore
                        </button>
                      </div>
                      {/* <div class="bg-blue-500 p-4">Column 2</div> */}
                    </div>
                    {/* <div class="bg-green-500 p-4">Column 3</div>
  <div className="bg-blue-500 p-4">colunm4 </div> */}
                  </div>
                  
                </div>
                <div className="flex flex-row mt-4">
                    <div className="flex flex-col0">
                      <div className="p-8 container1">
                        <h1 className="heading2">W</h1>
                      </div>
                      {/* <CButton href="#" onClick={(event) => {
      event.preventDefault()
      setVisible(!visible)
    }}>
      Link
    </CButton> */}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aivideo;
