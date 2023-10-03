import React from 'react';
import Videos_student from './Videos_student';

function VideoPage() {
  const videos = [
    {
      title: 'Video 1',
      videoId: 'HZwkseHJSX8',
    },
    {
      title: 'Video 2',
      videoId: 'kH7zwfMijr0',
    },
    // Add more video objects as needed
  ];

  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <Videos_student key={index} title={video.title} videoId={video.videoId} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
