import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NewsCard = ({ news }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-dark-200 rounded-xl shadow-md overflow-hidden"
    >
      <img 
        src={news.image} 
        alt={news.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{news.category}</span>
          <span className="mx-2">•</span>
          <span>{news.date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{news.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{news.summary}</p>
        <Link 
          to={`/news/${news.id}`} 
          className="text-primary-light dark:text-primary-dark font-medium hover:underline flex items-center"
        >
          Lire la suite
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};