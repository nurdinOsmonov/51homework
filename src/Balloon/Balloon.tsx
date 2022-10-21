import React from 'react';

interface BalloonProps {
  number: number;
}

const Balloon: React.FC<BalloonProps> = (props) => {
  return (
    <div className="balloon">
      <p>{props.number}</p>
    </div>
  );
};

export default Balloon;