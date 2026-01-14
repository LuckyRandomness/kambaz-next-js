import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="./labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="./labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="./labs/lab3">Lab 3: Javascript Fundamentals</Link>
        </li>
      </ul>
    </div>
  );
}