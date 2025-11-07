import Link from "next/link";

export default function Navbar() {
  return (
    <header className='mx-auto flex w-full flex-row items-center justify-between p-4'>
      <div>Test</div>
      <nav className='flex flex-row items-center justify-center gap-4 text-blue-400 underline underline-offset-4'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/list'>List</Link>
        <Link href='/details'>Details</Link>
        <Link href='/sentry-example-page'>Sentry Example Page</Link>
      </nav>
    </header>
  );
}
