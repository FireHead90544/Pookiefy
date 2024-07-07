import React from 'react'
import { FaSpotify } from "react-icons/fa";

const PookiefyAuthorize = () => {
  return (
		<div className="flex flex-col items-center justify-center h-full space-y-4">
			<h1 className="text-6xl font-light">Pookiefy</h1>
			<button className="flex px-4 py-2 rounded-lg space-x-2 text-lg bg-[#191414] transition-transform duration-300 hover:scale-110">
				<FaSpotify className="my-auto text-[#1db954]" />
				<span className="font-light">Authorize</span>
			</button>
		</div>
	);
}

export default PookiefyAuthorize