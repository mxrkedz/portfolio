import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import { Projects } from '@/components/Projects';

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
