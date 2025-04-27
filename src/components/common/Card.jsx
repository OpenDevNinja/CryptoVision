export const Card = ({ children, className = '', ...props }) => {
    return (
      <div 
        className={`bg-white dark:bg-dark-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };