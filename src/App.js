import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import "./styles/api.css"

import Navbar from './navbar.js'; 
const App = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const apiKey = 'DnS6kIU35UjI6H608t9wBb6HN8ro2GFvK9msrGG0RoP97FdYHE07x4wC'; // Get your API key from Pexels
    const fetchMedia = async () => {
      try {
        const [imagesResponse, videosResponse] = await Promise.all([
          axios.get(`https://api.pexels.com/v1/search?query=nature&per_page=80&page=1`, {
            headers: { Authorization: apiKey },
          }),
          axios.get(`https://api.pexels.com/videos/search?query=nature&per_page=80&page=1`, {
            headers: { Authorization: apiKey },
          }),
        ]);
        const images = imagesResponse.data.photos.map(photo => ({
          id: photo.id,
          type: 'image',
          src: photo.src.large,
        }));
        const videos = videosResponse.data.videos.map(video => ({
          id: video.id,
          type: 'video',
          src: video.video_files[0].link,
        }));
        setMedia([...images, ...videos]);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };
    fetchMedia();
  }, []);
  
  return (
    <div>
      <Navbar/>

      <Masonry
         breakpointCols={3}
         className="my-masonry-grid"
         columnClassName="my-masonry-grid_column"
         columns={3}>
        {media.map(item => (
          <div key={item.id} className={item.type === 'image' ? 'image-item' : 'video-item'}>
            {item.type === 'image' ? (
              <img src={item.src} alt={`Image ${item.id}`} />
            ) : (
              <video width='400' height='600'controls style={{objectFit:'cover'}}>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default App;
