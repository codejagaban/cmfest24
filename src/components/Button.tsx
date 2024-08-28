import React from 'react';

interface Props {
  body: string;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
}

const Button: React.FC<Props> = ({ body, onClick, className = '', iconClassName = '' }) => {
  return (
    <button
      className={`px-4 py-2 font-semibold rounded-md flex items-center space-x-2 ${className} group`}
      onClick={onClick}
    >
      <div className="flex flex-col items-start">
        <span className="block text-sm">
          {body}
        </span>
      </div>
      <span className={`icon ${iconClassName}`}>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-3 h-3 transition-transform duration-300 group-hover:scale-110 ${iconClassName}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7061 0H4.47058C4.12012 0 3.8971 0.287855 3.8971 0.638089V0.656283C3.8971 1.01366 4.11232 1.29957 4.46993 1.29957H10.0286C10.3185 1.29957 10.4629 1.65305 10.2581 1.85708L0.188316 11.9041C-0.0626636 12.1542 -0.0626636 12.5616 0.187666 12.8118V12.8125C0.438646 13.0626 0.845026 13.0626 1.09471 12.8118L11.1476 2.74014C11.3524 2.53546 11.6996 2.68036 11.6996 2.96952V8.46345C11.6996 8.81693 11.9928 9.09699 12.3472 9.09699H12.3654C12.7198 9.09699 13 8.81693 13 8.46345V1.30672C13 0.588705 12.4246 0 11.7061 0Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
};

export default Button;
