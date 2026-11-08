'use client';

import { useSyncExternalStore } from 'react';

function subscribe(): () => void {
  return () => {};
}

function getSnapshot(): string {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getServerSnapshot(): string {
  return '';
}

export default function CurrentDate() {
  const today = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return <time className="text-sm opacity-90">{today || '\u00A0'}</time>;
}