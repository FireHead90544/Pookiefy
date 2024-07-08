import { cookies } from "next/headers";
import PageHandler from "@/components/PageHandler";

export default function Home() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  const refreshToken = cookieStore.get("refresh_token")?.value;

  return (
    <main className="h-screen p-24">
      <PageHandler tokens={{ accessToken, refreshToken }} />
    </main>
  );
}
