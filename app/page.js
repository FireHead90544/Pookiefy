import { cookies } from "next/headers";
import PageHandler from "@/components/PageHandler";

export default function Home() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  const refreshToken = cookieStore.get("refresh_token")?.value;

  return (
    <main className="h-screen p-4 md:p-24">
      <PageHandler tokens={{ access_token: accessToken, refresh_token: refreshToken }} />
    </main>
  );
}
