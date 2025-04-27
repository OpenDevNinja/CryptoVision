import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { motion } from 'framer-motion';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-100">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-primary-light dark:text-primary-dark mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page non trouvée</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md">
          Oups ! La page que vous recherchez semble introuvable. Elle a peut-être été déplacée ou supprimée.
        </p>
        <Link to="/">
          <Button variant="primary">Retour à l'accueil</Button>
        </Link>
      </motion.div>
    </div>
  );
};