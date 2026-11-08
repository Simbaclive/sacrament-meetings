import { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-10-04',
    meetingType: 'general',
    presiding: 'Bishop Anderson',
    conducting: 'Bishop Anderson',
    announcements: ['Watch General Conference sessions at home today.'],
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Sister Taylor',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'As Now We Take the Sacrament' },
    speakers: [],
    closingHymn: { number: 2, title: 'The Spirit of God' },
    closingPrayer: 'Brother Nelson',
  },
  {
    id: 2,
    date: '2026-10-11',
    meetingType: 'regular',
    presiding: 'Bishop Anderson',
    conducting: 'Brother Clark',
    announcements: ['Ward choir practice Wednesday at 7:00 PM.', 'Youth activity Thursday at 6:30 PM.'],
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Brother Mitchell',
    wardBusiness: [{ description: 'Sustain Sister Lopez as Primary teacher.' }],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [
      { name: 'Sister Reyes', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Primary Children', topic: 'I Am a Child of God', type: 'musical-number' },
      { name: 'Brother Hughes', topic: 'Serving others', type: 'speaker' },
    ],
    closingHymn: { number: 134, title: 'I Believe in Christ' },
    closingPrayer: 'Sister Walker',
  },
  {
    id: 3,
    date: '2026-10-18',
    meetingType: 'stake',
    presiding: 'President Johnson',
    conducting: 'President Johnson',
    announcements: ['Stake conference broadcast today. No ward meeting.'],
    openingHymn: { number: 1, title: 'The Morning Breaks' },
    openingPrayer: 'Brother Davis',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 169, title: 'As Now We Take the Sacrament' },
    speakers: [],
    closingHymn: { number: 100, title: 'Nearer, My God, to Thee' },
    closingPrayer: 'Sister Brooks',
  },
  {
    id: 4,
    date: '2026-10-25',
    meetingType: 'regular',
    presiding: 'Bishop Anderson',
    conducting: 'Brother Clark',
    announcements: ['Ward temple trip next Saturday.'],
    openingHymn: { number: 3, title: 'Now Let Us Rejoice' },
    openingPrayer: 'Sister Foster',
    wardBusiness: [
      { description: 'Release Brother Adams as ward clerk.' },
      { description: 'Sustain Brother Young as ward clerk.' },
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [
      { name: 'Brother Young', topic: 'Gratitude', type: 'speaker' },
      { name: 'Sister Ortiz', topic: 'The Atonement', type: 'speaker' },
    ],
    closingHymn: { number: 193, title: 'I Know That My Redeemer Lives' },
    closingPrayer: 'Brother Scott',
  },
  {
    id: 5,
    date: '2026-11-01',
    meetingType: 'testimony',
    presiding: 'Bishop Anderson',
    conducting: 'Bishop Anderson',
    announcements: ['Fast offerings help those in need.'],
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Green',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'As Now We Take the Sacrament' },
    speakers: [],
    closingHymn: { number: 85, title: 'How Firm a Foundation' },
    closingPrayer: 'Brother Hall',
  },
  {
    id: 6,
    date: '2026-11-08',
    meetingType: 'regular',
    presiding: 'Bishop Anderson',
    conducting: 'Brother Clark',
    announcements: ['Ward Thanksgiving dinner planning meeting after church.'],
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Brother Wright',
    wardBusiness: [{ description: 'Sustain new nursery leader, Sister Bell.' }],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [
      { name: 'Sister Cooper', topic: 'Counting our blessings', type: 'speaker' },
      { name: 'Ward Choir', topic: 'Musical number', type: 'musical-number' },
      { name: 'Brother Evans', topic: 'Following the Savior', type: 'speaker' },
    ],
    closingHymn: { number: 134, title: 'I Believe in Christ' },
    closingPrayer: 'Sister Murphy',
  },
];

export function getMeetings(date?: string): SacramentMeeting[] {
  const sorted = [...meetings].sort((a, b) => b.date.localeCompare(a.date));
  if (date) {
    return sorted.filter((meeting) => meeting.date === date);
  }
  return sorted;
}

export function getMeetingById(id: number): SacramentMeeting | undefined {
  return meetings.find((meeting) => meeting.id === id);
}