# Pookiefy

A simple Next.js app that displays now playing status of the currently playing song using Spotify API & TailwindCSS. This project was created as the final project for "Framework Valley: React" at codedex.io.

![image](https://github.com/FireHead90544/Pookiefy/assets/55452780/67dcf22d-6340-4258-b705-35f9f7ab4315)


## Demo

Check out the live demo: [Pookiefy](https://pookiefy.vercel.app/)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js
- npm or any other package manager
- Spotify app (can be created at [Spotify Dashboard](https://developer.spotify.com/dashboard))
  - Enable `user-read-playback-state` scope.
  - Add `http://localhost:3000/api/callback` or your deployment callback url as redirect uri.

### Installation

1. Clone the repo:
    ```bash
    git clone https://github.com/FireHead90544/Pookiefy.git
    cd Pookiefy
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your Spotify API credentials to the `.env` file:
        ```bash
        SPOTIFY_CLIENT_ID=your_client_id
        SPOTIFY_CLIENT_SECRET=your_client_secret
        ```

### Running the App

1. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2. Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

## Usage

1. Open the application.
2. Authorize with your Spotify account.
3. View the currently playing song on your Spotify account.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deploy on Vercel

The easiest way to deploy this Next.js app for production use is to deploy it on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
