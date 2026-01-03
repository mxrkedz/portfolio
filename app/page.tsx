import { ComponentExample } from '@/components/component-example';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <ComponentExample />
      <Footer />
    </>
  );
}
