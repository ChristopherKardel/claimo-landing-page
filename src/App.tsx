import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Payouts } from './components/Payouts';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Rewards } from './components/Rewards';
import { Showcase } from './components/Showcase';
import { Security } from './components/Security';
import { Faq } from './components/Faq';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  // Honour a hash deep-link (e.g. /#faq) on first load. The browser can't do
  // this itself because the target section isn't in the DOM until React mounts.
  useEffect(() => {
    const { hash } = window.location;
    if (hash.length > 1) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
    }
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Payouts />
        <Features />
        <HowItWorks />
        <Rewards />
        <Showcase />
        <Security />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
