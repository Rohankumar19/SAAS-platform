import Image from "next/image";
import { Appbar } from "./components/Appbar";
console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET)
export default function Home() {
  return (
    <main>
      <Appbar />
    </main>
  );
}
