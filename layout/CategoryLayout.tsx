import About from '@/pages/components/About';
import Categories from '@/pages/components/Categories';
import Footer from '@/pages/components/Footer';
import { ReactNode } from 'react';

function CategoryLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Categories />
      <About />
      <Footer />
    </div>
  );
}

export default CategoryLayout;
