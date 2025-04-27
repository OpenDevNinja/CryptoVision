import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            L'avenir de la finance est{' '}
            <span className="text-primary-light dark:text-primary-dark">décentralisé</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Découvrez, investissez et maîtrisez l'univers des cryptomonnaies avec notre plateforme intuitive et sécurisée.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Commencer</Button>
            <Button variant="secondary">En savoir plus</Button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" 
            alt="Cryptocurrency" 
            className="rounded-2xl shadow-2xl w-full h-auto animate-float"
          />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-light dark:bg-primary-dark rounded-xl opacity-20 -z-10"></div>
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-secondary-light dark:bg-secondary-dark rounded-xl opacity-20 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};