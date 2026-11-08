import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6">
      <Image
        src="/hero.svg"
        alt="Illustration of a ward meetinghouse with a steeple"
        width={800}
        height={300}
        priority
        className="h-auto w-full rounded-lg"
      />
      <h1 className="text-3xl font-bold text-brand">
        Sacrament Meeting Planner
      </h1>
      <p>
        Plan, review, and print sacrament meeting programs for your ward.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/meetings"
          className="rounded bg-brand px-4 py-2 font-medium text-white hover:opacity-90"
        >
          View all meetings
        </Link>
        <Link
          href="/meetings/current"
          className="rounded border border-brand px-4 py-2 font-medium text-brand hover:bg-brand-soft"
        >
          This Sunday&apos;s program
        </Link>
      </div>
    </div>
  );
}