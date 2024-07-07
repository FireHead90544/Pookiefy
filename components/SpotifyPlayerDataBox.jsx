"use client";
import React from 'react'
import Image from 'next/image'
import SpotifyPlayhead from '@/components/SpotifyPlayhead'

const SpotifyPlayerDataBox = () => {
  const {title, album, artists, progress, duration} = {
    title: "Why Do I?",
    album: "Single",
    artists: ["Bri Tolani", "Unknown Brain"],
    progress: 14352,
    duration: 45362
  }
  return (
    <div className='flex space-x-4 w-2/3 h-1/2 hover:scale-105 transition-all duration-500 ease-in-out'>
        <div className='w-1/3 h-full border-2 rounded-sm border-[#191414]'>
            <Image className="w-full h-full" src={"https://i2o.scdn.co/image/ab67706c0000cfa3bd003bd5a830f78d58228b01"} width={300} height={300}/>
        </div>
        <div className='w-2/3 h-full border-2 rounded-sm border-[#191414]'>
            <div className='flex flex-col justify-center h-full'>
                <div className='h-2/3 p-8 flex-col items-center'>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <div className="flex space-x-2">
                        <h2 className='text-lg font-light italic'>{album}</h2>
                        <h2 className='text-lg font-thin italic'>({artists.map((artist) => artist).join(', ')})</h2>
                    </div>
                </div>
                <div className='h-1/3 px-8 py-2'>
                    <SpotifyPlayhead progress={progress} duration={duration} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpotifyPlayerDataBox