import React, { useState } from 'react';

const Formulario = ({ onSubmit }) => {
  const [input1, setInput1] = useState(''); // Estado para el primer input
  const [input2, setInput2] = useState(''); // Estado para el segundo input
  const [error, setError] = useState(''); // Estado para el mensaje de error

  const handleInputChange1 = (e) => {
    setInput1(e.target.value); // Manejador de cambios para el primer input
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value); // manejador de cambios para el segundo input
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // evitar el comportamiento por defecto del formulario

    // Validaciones de los inputs
    if (input1.trim().length < 3 || input1.trim().startsWith(' ')) {
      setError('Por favor, ingresa al menos 3 caracteres sin espacios al comienzo para el primer input.');
      return;
    }

    if (input2.trim().length < 6) {
      setError('Por favor, ingresa al menos 6 caracteres para el segundo input.');
      return;
    }

    onSubmit({ input1, input2 }); // Llamar a la función onSubmit con los valores de los inputs
    setError(''); // Limpiar el mensaje de error
    setInput1(''); // Limpiar el primer input
    setInput2(''); // Limpiar el segundo input
  };
// SE NE ROMPIÓ TODO A LAS 22:30 Y TUVE QUE ARRANCAR OTRA VEZ D:
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input1">¿Qué sentis al ver éste background?:</label>
          <input type="text" id="input1" value={input1} onChange={handleInputChange1} />
        </div>
        <div>
          <label htmlFor="input2">¿Por qué?:</label>
          <input type="text" id="input2" value={input2} onChange={handleInputChange2} />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Formulario;
