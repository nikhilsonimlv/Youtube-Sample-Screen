import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyCRB-MauKrfQzrQvtowW_kJQIGx9GgV5uQ";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  componentDidMount(){
    this.onTermSubmit("Harry Potter")
  }

  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo:response.data.items[0]
    });
  };

  onSelectedVideo = (video) => {
    console.log("Form child components", video);
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div className="ui container">
        
        <SearchBar submitTheTerm={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                selectVideo={this.onSelectedVideo}
                videoList={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
