import { NextResponse } from "next/server";

export async function POST(request) {
    const refreshToken = (await request.json()).refresh_token;
    const resp = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${encodeBase64(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`)}`
        },
        body: {
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        }
    })

    const data = await resp.json();
    return NextResponse.json({ access_token: data.access_token });
}