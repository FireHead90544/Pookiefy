import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { encodeBase64 } from "@/utils/string-utilities.js";

export async function GET(request){
    const host = `${request.headers.get('x-forwarded-proto') || (request.connection.encrypted ? 'https' : 'http')}://${request.headers.get('host')}`
    const code = request.nextUrl.searchParams.get('code', null);
    const state = request.nextUrl.searchParams.get('state', null);

    if (!code || !state) { return NextResponse.redirect(`${host}/api/authorize`) }

    const cookieStore = cookies()
    const cookieState = cookieStore.get('state')?.value;
    cookieStore.set('state', '', { expires: new Date(0) })

    if(state !== cookieState){
        return NextResponse.redirect(`${host}/api/authorize`)
    }

    const resp = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${encodeBase64(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`)}`
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: `${host}/api/callback`
        })
    })

    const data = await resp.json();

    return NextResponse.redirect(`${host}/?access_token=${data.access_token}&refresh_token=${data.refresh_token}`);
}