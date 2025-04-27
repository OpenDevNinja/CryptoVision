import { useState } from 'react';
import { NewsCard } from './NewsCard';
import { cryptoNews, newsCategories } from '../../data/news';
import { Button } from '../common/Button';

export const NewsList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  const filteredNews = selectedCategory === 'Toutes' 
    ? cryptoNews 
    : cryptoNews.filter(news => news.category === selectedCategory);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Actualités crypto</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {newsCategories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="text-sm py-1 px-3"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map(news => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};