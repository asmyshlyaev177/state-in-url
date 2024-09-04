'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function LinkClient({
  pathname,
  children,
}: {
  pathname: string;
  children: React.ReactNode;
}) {
  const sp = useSearchParams();

  return (
    <Link
      href={{
        pathname,
        query: Object.fromEntries([...sp.entries()]),
      }}
      className="text-lg"
      data-testid="link-client"
    >
      {children}
    </Link>
  );
}
