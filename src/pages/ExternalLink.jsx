import React from 'react';
import { Link } from 'react-router-dom';

const ExternalLink = ({ to, children }) => {
  const handleClick = () => {
    window.open(to, '_blank');
  };

  return (
    <Link onClick={handleClick} to="#">
      {children}
    </Link>
  );
};

export default ExternalLink;
