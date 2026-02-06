import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReelFeed from '../../components/ReelFeed';

const Home = () => {
  const [videos, setVideos] = useState([]);
  // Autoplay behavior is handled inside ReelFeed

  useEffect(() => {
    axios.get("http://localhost:3000/api/food", { withCredentials: true })
      .then(response => {
        console.log(response.data);
        setVideos(response.data.foodItems);
      })
      .catch((error) => {
        console.error("There was an error fetching the videos!", error);
      });
  }, []);

  return (
    <ReelFeed
      items={videos}
      emptyMessage="No videos available."
    />
  );
};

export default Home;
