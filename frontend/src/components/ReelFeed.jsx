import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reels.css';

const ReelItem = ({ item }) => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="reel">
      <video
        ref={videoRef}
        className="reel-video"
        src={item.video}
        loop
        muted
        playsInline
        autoPlay
        onClick={handleVideoClick}
      />

      {/* Side Actions */}
      <div className="reel-actions">
        <button className="reel-action-btn">
          <span className="reel-action-icon">❤️</span>
          <span className="reel-action-count">{item.likeCount || 0}</span>
        </button>
        <button className="reel-action-btn">
          <span className="reel-action-icon">💬</span>
          <span className="reel-action-count">Reply</span>
        </button>
        <button className="reel-action-btn">
          <span className="reel-action-icon">🔖</span>
          <span className="reel-action-count">{item.savesCount || 0}</span>
        </button>
      </div>

      {/* Bottom Overlay */}
      <div className="reel-overlay">
        <div className="reel-store-info">
          <div className="reel-store-avatar">
            {item.name?.charAt(0) || 'F'}
          </div>
          <span className="reel-store-name">{item.name}</span>
        </div>

        <div className="reel-content">
          <p className="reel-description" title={item.description}>{item.description}</p>
          {item.foodPartner && (
            <Link className="reel-btn" to={"/food-partner/" + item.foodPartner} aria-label="Visit store">Visit store</Link>
          )}
        </div>
      </div>
    </div>
  );
};

const ReelFeed = ({ items, emptyMessage = "No videos available." }) => {
  if (!items || items.length === 0) {
    return (
      <div className="reels-container">
        <div className="reels-empty">
          <p>{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="reels-container">
      {items.map((item) => (
        <ReelItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ReelFeed;
