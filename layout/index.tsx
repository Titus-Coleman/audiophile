import About from '@/pages/components/About';
import { ReactNode } from 'react';

function IndexLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-white">
      {children}
      <About />
    </main>
  );
}

export default IndexLayout;
