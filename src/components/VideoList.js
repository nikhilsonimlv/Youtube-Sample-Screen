import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList({ videoList,selectVideo }) {
  const videos = videoList.map((v) => <VideoItem key={v.id.videoId}  selectVideo={selectVideo}    video={v}/>);

  return <div className="ui relaxed divided list">{videos} </div>;
}
