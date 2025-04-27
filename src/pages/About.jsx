import { teamMembers } from '../data/team';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          À propos de CryptoVision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Notre mission est de démocratiser l'accès à l'information sur les cryptomonnaies et la blockchain.
        </motion.p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-dark-200 rounded-xl shadow-md p-8 mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">Notre histoire</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Fondée en 2020, CryptoVision est née de la volonté de créer une plateforme transparente et accessible pour suivre l'évolution des cryptomonnaies. À une époque où l'information était fragmentée et souvent technique, nous avons voulu construire un outil qui permette à chacun, du novice au professionnel, de comprendre et suivre ce marché en pleine expansion.
          </p>
          <p>
            Aujourd'hui, notre plateforme est utilisée par des centaines de milliers de personnes à travers le monde, des particuliers aux institutions financières, tous unis par la même passion pour cette révolution technologique et financière.
          </p>
        </div>
      </motion.div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Notre équipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-md overflow-hidden"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary-light dark:text-primary-dark mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.twitter} className="text-gray-500 hover:text-primary-light dark:hover:text-primary-dark">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href={member.social.linkedin} className="text-gray-500 hover:text-primary-light dark:hover:text-primary-dark">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-dark-200 rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Nos valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-dark-300 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-3">Transparence</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nous croyons en une information claire, vérifiée et accessible à tous, sans parti pris ni conflit d'intérêt.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-dark-300 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nous repoussons constamment les limites de la technologie pour offrir les outils d'analyse les plus avancés.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-dark-300 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-3">Communauté</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nous construisons ensemble. Vos retours et contributions façonnent quotidiennement notre plateforme.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};