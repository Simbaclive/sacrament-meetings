import { NextResponse } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';
import type { SacramentMeeting } from '@/lib/types';

interface RouteContext {
  params: Promise<{ id: string }>;
}

interface ErrorBody {
  error: string;
}

export async function GET(
  _request: Request,
  { params }: RouteContext
): Promise<NextResponse<SacramentMeeting | ErrorBody>> {
  const { id } = await params;
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId)) {
    return NextResponse.json({ error: 'Invalid meeting id' }, { status: 400 });
  }

  const meeting = getMeetingById(meetingId);

  if (!meeting) {
    return NextResponse.json({ error: 'Meeting not found' }, { status: 404 });
  }

  return NextResponse.json(meeting, { status: 200 });
}