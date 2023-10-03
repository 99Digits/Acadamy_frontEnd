import React from 'react'
import Dashboard_navbar_student from '../student_components/Dashboard_navbar_student'
import YouTube from 'react-youtube';
import { useState } from 'react';
import './videostudents.css'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';

function Videos_student({ title, videoId }) {
    const [visible, setVisible] = useState(false)
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 0, // Change to 1 for autoplay
        },
      };
      const [isCollapsed, setIsCollapsed] = useState(false);

      const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
      };
  return (
    <>
    <Dashboard_navbar_student/>
  
    <div>
     
        <Accordion className="border-2 border-blue-400">
          <AccordionSummary
            
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography> <p  className='text-center'>Introduction to First Class &nbsp; <i class="fa-solid fa-play"></i></p></Typography>
          </AccordionSummary>
          <AccordionDetails>
          <div  className="max-w-md mx-auto bg-white p-4 shadow-lg rounded-lg mb-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <div className="relative aspect-w-10 aspect-h-9">
    
      
          <div className="video_students">
          <YouTube videoId={videoId} opts={opts} />
          </div>
        </div>
        
      </div>
          </AccordionDetails>
        </Accordion>

      <Accordion className="border-2 border-blue-400">
        <AccordionSummary
          
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> <p  className='text-center'> SpokenEnglish Chapter 1 || 20/09/2023 &nbsp; <i class="fa-solid fa-play"></i></p></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div  className="max-w-md mx-auto bg-white p-4 shadow-lg rounded-lg mb-4">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="relative aspect-w-10 aspect-h-9">
   
     
        <div className="video_students">
        <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
      
    </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="border-2 border-blue-400">
        <AccordionSummary
          
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> <p  className='text-center'>SpokenEnglish Chapter 2 || 21/09/2023 &nbsp; <i class="fa-solid fa-play"></i></p></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div  className="max-w-md mx-auto bg-white p-4 shadow-lg rounded-lg mb-4">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="relative aspect-w-10 aspect-h-9">
   
     
        <div className="video_students">
        <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
      
    </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="border-2 border-blue-400" disabled>
        <AccordionSummary
          
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> <p  className='text-center'>SpokenEnglish Chapter 3 || 22/09/2023 &nbsp; <i class="fa-solid fa-lock"></i></p></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div  className="max-w-md mx-auto bg-white p-4 shadow-lg rounded-lg mb-4">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="relative aspect-w-10 aspect-h-9">
   
     
        <div className="video_students">
        <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
      
    </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="border-2 border-blue-400" disabled>
        <AccordionSummary
          
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> <p  className='text-center'>SpokenEnglish Chapter 4 || 23/09/2023 &nbsp; <i class="fa-solid fa-lock"></i></p></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div  className="max-w-md mx-auto bg-white p-4 shadow-lg rounded-lg mb-4">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="relative aspect-w-10 aspect-h-9">
   
     
        <div className="video_students">
        <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
      
    </div>
        </AccordionDetails>
      </Accordion>
    </div>
    </>
  )
}

export default Videos_student