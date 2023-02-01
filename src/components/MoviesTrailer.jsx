import React from 'react'
import { useEffect, useState } from 'react';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';

const MoviesTrailer = ({ title }) => {
  const [video, setVideo] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [error, setError] = useState(null);
  const handleSearch = () => {
    setVideo(title);
    movieTrailer(video)
      .then(res => {
        setVideoURL(res);
      })
      .catch(err => {
        // console.log(err);
        setError(true);
      })
  }

  useEffect(() => {
    handleSearch();
  }, [videoURL])

  return (
    <div className='relative top-0 left-0 flex items-center justify-center '>
      <ReactPlayer
        className="container mx-auto flex justify-center items-center absolute top-0 left-0 right-0 md:z-50 md:top-3 md:right-16"
        url={videoURL}
        width="90%"
        controls={true}
      />
    </div>
  )
}

export default MoviesTrailer;