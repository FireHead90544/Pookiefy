import React from 'react'
import SpotifyAuthorizeButton from '@/components/SpotifyAuthorizeButton';

const PookiefyAuthorize = () => {
  return (
		<div className="flex flex-col items-center justify-center h-full space-y-4 p-4 md:p-8">
			<h1 className="text-4xl md:text-6xl font-light">Pookiefy</h1>
			<SpotifyAuthorizeButton />
		</div>
	);
}

export default PookiefyAuthorize