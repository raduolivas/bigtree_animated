import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BigTreeScene } from '../three/BigTreeScene';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <BigTreeScene />
      <main>{children}</main>
      <Footer />
    </>
  );
}
