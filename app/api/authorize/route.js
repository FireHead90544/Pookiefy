import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { generateRandomString } from "@/utils/string-utilities";

export async function GET(request) {
    const host = `${request.headers.get('x-forwarded-proto') || (request.connection.encrypted ? 'https' : 'http')}://${request.headers.get('host')}`
    const state = generateRandomString();

    const cookieStore = cookies();
    cookieStore.set('state', state)
    
	const params = new URLSearchParams({
		response_type: "code",
		client_id: process.env.SPOTIFY_CLIENT_ID,
		scope: "user-read-playback-state",
		redirect_uri: `${host}/api/callback`,
		state: state,
	});

	return NextResponse.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`)
}
