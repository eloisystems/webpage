import Header from '@/components/header';
import Hero from '@/components/hero';
import Networks from '@/app/networks/page';
import Features from '@/app/features/page';
import Careers from '@/app/careers/page';
import Footer from '@/components/footer';

export default function Home() {
return (
  <div>
    <Header />

    <main>
      <Hero />
      <Features />
      <Networks />
      <Careers />
    </main>

    <Footer />
  </div>
);
}