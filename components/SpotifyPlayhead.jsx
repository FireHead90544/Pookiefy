import React from 'react'

const SpotifyPlayhead = ({ progress, duration }) => {
    const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progressPercentage = (progress, duration) => (progress / duration) * 100

  return (
    <div>
        <div className='flex justify-between'>
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
        </div>
        <div className='w-full h-2 bg-[#191414] rounded-full mt-2'>
            <div className='h-full bg-[#1db954] rounded-full transition-all ease-in-out duration-1000' style={{ width: `${progressPercentage(progress, duration)}%` }}></div>
        </div>
    </div>
  )
}

export default SpotifyPlayhead