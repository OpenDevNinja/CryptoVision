import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'font-medium py-2 px-6 rounded-lg transition-all duration-200';
  
  const variants = {
    primary: 'bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 shadow-lg',
    secondary: 'bg-secondary-light dark:bg-secondary-dark text-white hover:opacity-90 shadow-lg',
    outline: 'border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-primary-light/10',
    ghost: 'hover:bg-gray-100 dark:hover:bg-dark-300'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};