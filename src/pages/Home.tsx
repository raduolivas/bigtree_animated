import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { OpportunityFinder } from '../components/sections/OpportunityFinder';
import { Services } from '../components/sections/Services';
import { BTTAdvantage } from '../components/sections/BTTAdvantage';
import { Technology } from '../components/sections/Technology';
import { BTTMethod } from '../components/sections/BTTMethod';
import { VisionCard } from '../components/sections/VisionCard';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <OpportunityFinder />
      <Services />
      <BTTAdvantage />
      <Technology />
      <BTTMethod />
      <VisionCard />
      <FAQ />
      <Contact />
    </>
  );
}
