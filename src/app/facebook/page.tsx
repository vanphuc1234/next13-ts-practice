'use client';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
export default function FaceBook() {
  const router = useRouter();
  return (
    <>
      <p>FaceBook page</p>
      <Button variant="primary" onClick={() => router.back()}>
        Back to pre page
      </Button>
    </>
  );
}
