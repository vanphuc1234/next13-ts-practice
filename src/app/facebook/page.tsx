"use client";
import { useRouter } from "next/navigation";
export default function FaceBook() {
  const router = useRouter();
  return (
    <>
      <p>FaceBook page</p>
      <button onClick={() => router.back()}>Back to pre page</button>
    </>
  );
}
