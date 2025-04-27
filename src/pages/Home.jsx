import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { PopularCoins } from '../components/home/PopularCoins';
import { MarketOverview } from '../components/home/MarketOverview';
import { NewsSection } from '../components/home/NewsSection';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      <PopularCoins />
      <MarketOverview />
      <NewsSection />
    </div>
  );
};