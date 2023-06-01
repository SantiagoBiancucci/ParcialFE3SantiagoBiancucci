import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({ input1: '', input2: '' }); // Estado para los valores de los inputs

  const handleFormSubmit = (data) => {
    setFormData(data); // Actualizar el estado con los valores de los inputs
  };

  return (
    <div className="container">
      <h1>Formulario</h1>
      <Formulario onSubmit={handleFormSubmit} /> {/* Componente del formulario */}
      {formData.input1 && formData.input2 && (
        <Card input1={formData.input1} input2={formData.input2} />
      )} {/* Componente de la tarjeta que muestra los resultados */}
    </div>
  );
};

export default App;
