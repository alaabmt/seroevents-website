import { SummitNav } from './SummitNav';

export default function SummitLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SummitNav />
      {children}
    </>
  );
}
