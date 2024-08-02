import React from 'react';

interface Props {
  body: string;
  icon?: string | JSX.Element;
  className?: string;
  iconClassName?: string;
}

const Button: React.FC<Props> = ({ body, icon, className = '', iconClassName = '' }) => {
  return (
    <button className={`px-4 py-2 font-semibold rounded-md flex items-center space-x-2 ${className} group`}>
      <div className="flex flex-col items-start">
        <span className="block text-sm">
          {body}
        </span>
      </div>
      {icon && (
        <span className={`icon ${iconClassName}`}>
          {typeof icon === 'string' ? (
            <img
              src={icon}
              alt="icon"
              className={`w-3 h-3 transition-transform duration-300 group-hover:scale-110 ${iconClassName}`}
            />
          ) : (
            React.cloneElement(icon, {
              className: `w-3 h-3 transition-transform duration-300 group-hover:scale-110 ${iconClassName}`,
            })
          )}
        </span>
      )}
    </button>
  );
};

export default Button;
