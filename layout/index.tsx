import About from '@/pages/components/About';
import { ReactNode } from 'react';

function IndexLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
      <About />
    </main>
  );
}

export default IndexLayout;
