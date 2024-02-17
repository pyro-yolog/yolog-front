"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();
  
  return (
    <div>
      <Link href="/home">
        Keep
      </Link>
    </div>
  );
}
