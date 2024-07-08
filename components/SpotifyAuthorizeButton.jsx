import React from "react";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

const SpotifyAuthorizeButton = () => {
  return (
    <Link className="flex px-4 py-2 rounded-lg space-x-2 text-lg bg-[#191414] transition-transform duration-300 hover:scale-110" href={'/api/authorize'}>
        <FaSpotify className="my-auto text-[#1db954]" />
        <span className="font-light">Authorize</span>
    </Link>
  )
}

export default SpotifyAuthorizeButton