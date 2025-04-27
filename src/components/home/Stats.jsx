import { stats } from '../../data/stats';
import { motion } from 'framer-motion';

export const Stats = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-3">{stat.icon}</span>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};