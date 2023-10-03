import React, { useState } from 'react'
import { Carousel } from "react-carousel-minimal";

function Maincarosal() {
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

</>
  )
}

export default Maincarosal