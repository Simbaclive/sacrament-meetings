import Link from 'next/link';

export default function MeetingsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="space-y-4">
      <nav
        aria-label="Meetings section"
        className="flex flex-wrap gap-4 border-b border-border pb-3 text-sm print:hidden"
      >
        <Link href="/meetings" className="font-medium text-brand underline">
          All meetings
        </Link>
        <Link
          href="/meetings/current"
          className="font-medium text-brand underline"
        >
          This Sunday&apos;s program
        </Link>
      </nav>
      {children}
    </div>
  );
}