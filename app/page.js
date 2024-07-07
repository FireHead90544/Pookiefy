import PookiefyAuthorize from "@/components/PookiefyAuthorize";
import PookiefyNowPlaying from "@/components/PookiefyNowPlaying";

export default function Home() {
  return (
    <main className="h-screen p-24">
      {/* <PookiefyAuthorize /> */}
      <PookiefyNowPlaying />
    </main>
  );
}
