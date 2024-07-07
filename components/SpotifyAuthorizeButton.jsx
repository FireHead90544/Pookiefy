import React from "react";
import { FaSpotify } from "react-icons/fa";

const SpotifyAuthorizeButton = () => {
  return (
    <button className="flex px-4 py-2 rounded-lg space-x-2 text-lg bg-[#191414] transition-transform duration-300 hover:scale-110">
        <FaSpotify className="my-auto text-[#1db954]" />
        <span className="font-light">Authorize</span>
    </button>
  )
}

export default SpotifyAuthorizeButton