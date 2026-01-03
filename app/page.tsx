import { About } from '@/components/About';
import { ComponentExample } from '@/components/component-example';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <ComponentExample /> */}
      <About />
      <Footer />
    </>
  );
}
