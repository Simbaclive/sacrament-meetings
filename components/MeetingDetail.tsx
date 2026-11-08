import type { ReactNode } from 'react';
import type { Hymn, SacramentMeeting } from '@/lib/types';
import {
  formatMeetingDate,
  hasSacrament,
  meetingTypeLabels,
} from '@/lib/format';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="border-t border-border pt-4">
      <h2 className="mb-2 text-lg font-semibold text-brand">{title}</h2>
      {children}
    </section>
  );
}

function HymnLine({ hymn }: { hymn: Hymn }) {
  return (
    <p>
      Hymn #{hymn.number}: {hymn.title}
    </p>
  );
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  const speakers = meeting.speakers.filter((i) => i.type === 'speaker');
  const musical = meeting.speakers.filter((i) => i.type === 'musical-number');

  return (
    <article className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-brand">
          {formatMeetingDate(meeting.date)}
        </h1>
        <p className="font-medium">{meetingTypeLabels[meeting.meetingType]}</p>
        <p>Presiding: {meeting.presiding}</p>
        <p>Conducting: {meeting.conducting}</p>
        {!hasSacrament(meeting.meetingType) && (
          <p className="text-sm italic">
            This is a non-sacrament meeting this week.
          </p>
        )}
      </header>

      <Section title="Announcements">
        {meeting.announcements && meeting.announcements.length > 0 ? (
          <ul className="list-disc pl-5">
            {meeting.announcements.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        ) : (
          <p>No announcements.</p>
        )}
      </Section>

      <Section title="Opening">
        <HymnLine hymn={meeting.openingHymn} />
        <p>Prayer: {meeting.openingPrayer}</p>
      </Section>

      <Section title="Ward Business">
        {meeting.wardBusiness.length > 0 ? (
          <ul className="list-disc pl-5">
            {meeting.wardBusiness.map((item) => (
              <li key={item.description}>{item.description}</li>
            ))}
          </ul>
        ) : (
          <p>No ward business.</p>
        )}
        <p className="mt-2">
          Stake business: {meeting.stakeBusiness ? 'Yes' : 'No'}
        </p>
      </Section>

      <Section title="Sacrament">
        <HymnLine hymn={meeting.sacramentHymn} />
      </Section>

      <Section title="Speakers and Musical Numbers">
        {meeting.speakers.length > 0 ? (
          <ol className="list-decimal pl-5">
            {meeting.speakers.map((item) => (
              <li key={`${item.type}-${item.name}`}>
                <span className="font-medium">{item.name}</span>
                {' — '}
                {item.type === 'speaker' ? 'Speaker' : 'Musical number'}
                {item.topic ? `: ${item.topic}` : ''}
              </li>
            ))}
          </ol>
        ) : (
          <p>None scheduled.</p>
        )}
        <p className="mt-2 text-sm">
          {speakers.length} speaker(s), {musical.length} musical number(s)
        </p>
      </Section>

      <Section title="Closing">
        <HymnLine hymn={meeting.closingHymn} />
        <p>Prayer: {meeting.closingPrayer}</p>
      </Section>
    </article>
  );
}