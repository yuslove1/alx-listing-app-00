import React from 'react';
import { CardProps } from '../interfaces';

const Card: React.FC<CardProps> = ({ ...props }) => {
  return (
    <div>
      {/* Content of the card goes here */}
    </div>
  );
};

export default Card;