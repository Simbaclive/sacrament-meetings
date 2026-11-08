import { Suspense } from 'react';
import CurrentDate from './CurrentDate';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="bg-brand text-white print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xl font-bold">Riverside Ward</p>
          <CurrentDate />
        </div>
        <Suspense fallback={<div className="h-8" aria-hidden="true" />}>
          <NavLinks />
        </Suspense>
      </div>
    </header>
  );
}