// import React from 'react'

// export const Button = ({text, variant, ...props}) => {
//   return (
//     <button{...props}>{text}</button>
//   )
// }



import React from 'react';

export const Button = ({ text, className = '', children, ...props }) => {
  const buttonClassName = `btn ${className}`;

  return (
    <button className={buttonClassName} {...props}>
      {children ? (
        <span className="btn__content">
          {children}
          <span>{text}</span>
        </span>
      ) : (
        text
      )}
    </button>
  );
};
