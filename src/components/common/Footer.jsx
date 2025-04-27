import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CryptoVision</h3>
            <p className="text-gray-600 dark:text-gray-400">
              La plateforme ultime pour suivre et comprendre l'univers des cryptomonnaies.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">Accueil</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">Cryptos</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">Actualités</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">À propos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">Documentation</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">API</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">Statistiques</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Réseaux sociaux</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">
                <FaDiscord size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-dark-300 pt-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {currentYear} CryptoVision. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};