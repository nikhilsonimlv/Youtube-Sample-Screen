import React from "react";
import './VideoItem.css';

export default function VideoItem({ video,selectVideo }) {

   

  return (
    <div onClick={()=>selectVideo(video)} className="video-item item">
      <div className="ui image">
    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
      </div>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}
