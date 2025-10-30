import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='flex flex-row items-center justify-center gap-2 bg-slate-500 text-red-500'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/list'>List</Link>
      <Link href='/details'>Details</Link>
    </nav>
  );
}
