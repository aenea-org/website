import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Philosophy from '@/components/Philosophy';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Philosophy />
        <Team />
        <Footer />
      </main>
    </>
  );
}
