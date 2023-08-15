import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/facebook">FaceBook</Link>
        </li>
        <li>
          <a href="/youtube">YouTube</a>
        </li>
        <li>
          <a href="/twitch">Twitch</a>
        </li>
      </ul>
    </>
  );
}
