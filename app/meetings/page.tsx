import MeetingCard from '@/components/MeetingCard';
import { getBaseUrl } from '@/lib/api';
import type { SacramentMeeting } from '@/lib/types';

export default async function MeetingsPage() {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/meetings`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to load meetings');
  }

  const meetings: SacramentMeeting[] = await res.json();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-brand">All Meetings</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            <MeetingCard meeting={meeting} />
          </li>
        ))}
      </ul>
    </div>
  );
}