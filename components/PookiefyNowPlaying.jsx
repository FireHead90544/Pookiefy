import React from 'react'
import SpotifyPlayerDataBox from '@/components/SpotifyPlayerDataBox'
import { FaSpotify } from 'react-icons/fa';

const PookiefyNowPlaying = () => {
  return (
		<div className="flex flex-col items-center justify-center h-full space-y-8">
			<div className="flex flex-row space-x-3 text-6xl font-light">
				<FaSpotify className="text-[#1db954]" />
				<h1 className="">Pookiefy</h1>
			</div>
			<SpotifyPlayerDataBox />
		</div>
	);
}

export default PookiefyNowPlaying