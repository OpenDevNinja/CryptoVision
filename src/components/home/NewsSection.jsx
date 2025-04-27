import { NewsCard } from '../news/NewsCard';
import { cryptoNews } from '../../data/news';
import { Button } from '../common/Button';
import { motion } from 'framer-motion';

export const NewsSection = () => {
  const featuredNews = cryptoNews.slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Actualités récentes</h2>
        <Button variant="outline">Voir toutes les actualités</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredNews.map((news, index) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <NewsCard news={news} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};