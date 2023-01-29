import About from '@/pages/components/About';
import Categories from '@/pages/components/Categories';
import Footer from '@/pages/components/Footer';
import Navbar from '@/pages/components/Navbar';
import { ReactNode } from 'react';

function CategoryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Categories />
      <About />
      <Footer />
    </>
  );
}

export default CategoryLayout;
