import { connection } from 'next/server';
import { redirect } from 'next/navigation';
import { getBaseUrl } from '@/lib/api';
import type { SacramentMeeting } from '@/lib/types';

function mostRecentSunday(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - d.getUTCDay());
  return d.toISOString().slice(0, 10);
}

export default async function CurrentMeetingPage() {
  await connection();
  const sunday = mostRecentSunday();
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/meetings?date=${sunday}`, {
    cache: 'no-store',
  });
  const meetings: SacramentMeeting[] = res.ok ? await res.json() : [];

  if (meetings.length > 0) {
    redirect(`/meetings/${meetings[0].id}`);
  }
  redirect('/meetings');
}