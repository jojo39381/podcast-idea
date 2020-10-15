import React, {useState, useEffect} from 'react';
import SocialIcons from './SocialIcons'
import Share from './share.svg'
import joe from './image.jpg'
import axios from 'axios';
import ReactPlayer from 'react-player'
import Podcast from './podcast.svg'




function App() {
  const [podcastDetail, setPodcastDetail] = useState(
    {
      name: "",
      imageURL: "",
      episodeName: "",
      episodeURL: ""

    }
  );
  function shuffleClicked() {
    axios.get("/api/getpodcast")
      .then(response => {
        const detail = response.data
        console.log(detail)
        const podcastData = {
          name: detail.podcast.name,
          imageURL: detail.podcast.imageURL,
          episodeName: detail.episode.name,
          episodeURL: detail.video.editedVideoURL
        }
        setPodcastDetail(podcastData)
        
      })
  }
  useEffect(() => {
    shuffleClicked()

  }, [])
  return (
    <div className="App">
      <header><h1><img src={Podcast} alt="" className="logo-image"></img>  Podcast Ideas</h1></header>
      <div className="container">
        <div className="content">
        <div className="square">
          <h1 style={{
            textAlign:"center",
            fontFamily: 'Commissioner, sans-serif'
          }}>{podcastDetail.name}</h1>
          <div className="wrapper">
          <ReactPlayer url={podcastDetail.episodeURL} controls={true} playing={true}>
            
          </ReactPlayer>
          </div>
          <h1 style={{
            textAlign:"center",
            fontFamily: 'Commissioner, sans-serif'
          }}>
            {podcastDetail.episodeName}
          </h1>
          <div className="social-icons">
          <SocialIcons></SocialIcons>
          </div>
          

        </div>
       </div>
       <div className="button-container">
        <button className="shuffle-button" onClick={shuffleClicked}>Shuffle</button>
        </div>
      </div>
      
      
          
    </div>
  );
}

export default App;
