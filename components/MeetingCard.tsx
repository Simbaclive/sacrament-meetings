import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';
import {
  formatMeetingDate,
  hasSacrament,
  meetingTypeLabels,
} from '@/lib/format';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const speakerCount = meeting.speakers.filter(
    (item) => item.type === 'speaker'
  ).length;
  const musicalCount = meeting.speakers.filter(
    (item) => item.type === 'musical-number'
  ).length;
  const formattedDate = formatMeetingDate(meeting.date);

  return (
    <article className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-4 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h2 className="text-lg font-semibold text-brand">{formattedDate}</h2>
        <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
          {meetingTypeLabels[meeting.meetingType]}
        </span>
      </div>

      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
        <dt className="font-medium">Presiding:</dt>
        <dd>{meeting.presiding}</dd>
        <dt className="font-medium">Conducting:</dt>
        <dd>{meeting.conducting}</dd>
        <dt className="font-medium">Program:</dt>
        <dd>
          {hasSacrament(meeting.meetingType)
            ? `${speakerCount} speaker${speakerCount === 1 ? '' : 's'}, ${musicalCount} musical number${musicalCount === 1 ? '' : 's'}`
            : 'No sacrament meeting this week'}
        </dd>
      </dl>

      <Link
        href={`/meetings/${meeting.id}`}
        aria-label={`View program for ${formattedDate}`}
        className="mt-1 inline-block self-start rounded bg-brand px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        View program
      </Link>
    </article>
  );
}