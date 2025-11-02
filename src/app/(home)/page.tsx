import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">세상이구나, 반가워</h1>
      <p className="text-fd-muted-foreground">
        문서는 {' '}
        <Link
          href="/docs/start"
          className="text-fd-foreground font-semibold underline"
        >
          /docs/local
        </Link>{' '}
        에서 확인하실 수 있습니다.
      </p>
    </main>
  );
}
