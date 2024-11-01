import Link from 'next/link';

export default function HomePage() {
  return (
    <>
    <Link href="/about">
    <h1 className="text-5xl font-bold text-center">Home Page Click to go About</h1>
    </Link>
    <Link href={'/users/all'}>
        <h1>Click her for All</h1>
      </Link>
      <Link href={'/users/sam'}>
        <h1>Click her for One</h1>
      </Link>
    </>
  )
}