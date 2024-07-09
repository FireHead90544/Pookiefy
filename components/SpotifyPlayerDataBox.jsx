"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SpotifyPlayhead from '@/components/SpotifyPlayhead';
import AlbumImageErrorText from '@/components/AlbumImageErrorText';
import PlayerDataBoxErrorText from '@/components/PlayerDataBoxErrorText';

const SpotifyPlayerDataBox = () => {
	const [playerData, setPlayerData] = useState({});
	const [tokens, setTokens] = useState({ access_token: "", refresh_token: "" });

	const fetchPlayerData = async (access_token, refresh_token) => {
		try {
			let resp = await fetch("https://api.spotify.com/v1/me/player", {
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			});

			if (resp.status === 401) {
				const refreshResp = await fetch("/api/refresh-access-token", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ refresh_token }),
				});

				const refreshData = await refreshResp.json();
				access_token = refreshData.access_token;

				localStorage.setItem("access_token", access_token);
				setTokens({ access_token, refresh_token });

				resp = await fetch("https://api.spotify.com/v1/me/player", {
					headers: {
						Authorization: `Bearer ${access_token}`,
					},
				});
			}

			const data = await resp.json();

			setPlayerData({
				title: data.item.name,
				url: data.item.external_urls.spotify,
				imageUrl: data.item.album.images[0].url,
				album: {
					name: data.item.album.name,
					url: data.item.album.external_urls.spotify,
				},
				artists: data.item.artists.map((artist) => ({
					name: artist.name,
					url: artist.external_urls.spotify,
				})),
				progress: data.progress_ms,
				duration: data.item.duration_ms,
			});
		} catch (error) {
			setPlayerData({});
		}
	};

	useEffect(() => {
		const access_token = localStorage.getItem("access_token");
		const refresh_token = localStorage.getItem("refresh_token");
		setTokens({ access_token, refresh_token });

		const intervalId = setInterval(() => {
			fetchPlayerData(access_token, refresh_token);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		if (tokens.access_token && tokens.refresh_token) {
			fetchPlayerData(tokens.access_token, tokens.refresh_token);
		}
	}, [tokens]);

	return (
		<div className="flex space-x-4 w-2/3 h-1/2 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
			<div className="w-1/3 h-full border-2 rounded-sm border-[#191414]">
				{playerData.imageUrl ? (
					<Image
						className="w-full h-full"
						src={playerData.imageUrl}
						alt={playerData.title}
						width={640}
						height={640}
					/>
				) : (
					<AlbumImageErrorText />
				)}
			</div>
			<div className="w-2/3 h-full border-2 rounded-sm border-[#191414]">
				<div className="flex flex-col justify-center h-full">
					{Object.keys(playerData).length !== 0 ? (
						<>
							<div className="h-2/3 p-8 flex-col items-center">
								<Link href={playerData.url}>
									<h1 className="text-2xl font-semibold">{playerData.title}</h1>
								</Link>
								<div className="flex space-x-2">
									<Link href={playerData.album.url}>
										<h2 className="text-lg font-light italic">
											{playerData.album.name}
										</h2>
									</Link>
									<h2 className="text-lg font-thin italic">
										(
										{playerData.artists.map((artist, index) => (
											<React.Fragment key={artist.url}>
												<Link href={artist.url}>{artist.name}</Link>
												{index < playerData.artists.length - 1 && ", "}
											</React.Fragment>
										))}
										)
									</h2>
								</div>
							</div>
							<div className="h-1/3 px-8 py-2">
								<SpotifyPlayhead
									progress={playerData.progress}
									duration={playerData.duration}
								/>
							</div>
						</>
					) : (
						<PlayerDataBoxErrorText />
					)}
				</div>
			</div>
		</div>
	);
}

export default SpotifyPlayerDataBox;
