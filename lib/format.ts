import type { MeetingType } from './types';

export const meetingTypeLabels: Record<MeetingType, string> = {
  regular: 'Regular Meeting',
  testimony: 'Fast & Testimony Meeting',
  stake: 'Stake Conference',
  general: 'General Conference',
};

export function hasSacrament(type: MeetingType): boolean {
  return type === 'regular' || type === 'testimony';
}

export function formatMeetingDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}