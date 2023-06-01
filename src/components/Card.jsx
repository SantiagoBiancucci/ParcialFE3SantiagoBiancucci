import React from 'react';

const Card = ({ input1, input2 }) => {
  return (
    <div>
      <h2>Resultados:</h2>
      <p>Sensación: {input1}</p>
      <p>Motivo: {input2}. CONCLUSIÓN, ESTÁS RE LOCO</p>
    </div>
  );
};

export default Card;
