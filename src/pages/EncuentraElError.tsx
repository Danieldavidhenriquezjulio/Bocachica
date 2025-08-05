import React, { useState } from 'react';
import Button from '../components/UI/Button';

const texts = [
  {
    text: `El Castillo de San Luis fue construido en el siglo XVIII y fue la última fortificación de Bocachica.`,
    error: 'El Castillo de San Luis fue construido en el siglo XVII, no en el XVIII, y no fue la última fortificación.',
    correct: 0
  },
  {
    text: `Bocachica fue declarado Patrimonio de la Humanidad en 1984 junto con las fortificaciones de Cartagena.`,
    error: '',
    correct: null // No hay error
  },
  {
    text: `El canal de Bocachica nunca tuvo importancia militar para Cartagena.`,
    error: 'El canal de Bocachica fue clave en la defensa militar de Cartagena.',
    correct: 0
  },
  {
    text: `El ataque británico de 1741 fue liderado por Edward Vernon.`,
    error: '',
    correct: null
  },
  {
    text: `La hacienda de Bocachica fue privatizada en el siglo XX.`,
    error: 'La hacienda de Bocachica fue privatizada en el siglo XIX, no en el XX.',
    correct: 0
  },
];

const EncuentraElError: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSelect = (hasError: boolean) => {
    const isError = texts[current].error !== '';
    if (isError === hasError) {
      setScore(score + 1);
      setFeedback('¡Correcto! ' + (isError ? texts[current].error : 'No hay error en el texto.'));
    } else {
      setFeedback('Incorrecto. ' + (isError ? 'Sí hay un error: ' + texts[current].error : 'No hay error en el texto.'));
    }
    setTimeout(() => {
      if (current + 1 < texts.length) {
        setCurrent(current + 1);
        setFeedback(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const restart = () => {
    setCurrent(0);
    setShowResult(false);
    setScore(0);
    setFeedback(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-22 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Encuentra el Error</h1>
      <p className="mb-8 text-lg text-gray-700 text-center max-w-xl">Lee el texto y decide si contiene un error histórico sobre Bocachica. ¡Pon a prueba tu atención!</p>
      {!showResult ? (
        <div className="w-full max-w-xl bg-white rounded-lg shadow p-8 flex flex-col items-center">
          <div className="text-lg mb-6 text-gray-800 text-center">{texts[current].text}</div>
          <div className="flex gap-6 mb-4">
            <Button onClick={() => handleSelect(true)} className="px-8">Sí tiene error</Button>
            <Button onClick={() => handleSelect(false)} variant="secondary" className="px-8">No tiene error</Button>
          </div>
          {feedback && <div className="mt-4 text-blue-700 font-medium text-center">{feedback}</div>}
          <div className="mt-6 text-gray-500">Texto {current + 1} de {texts.length}</div>
        </div>
      ) : (
        <div className="w-full max-w-xl bg-white rounded-lg shadow p-8 flex flex-col items-center">
          <div className="text-2xl font-bold mb-4">¡Juego terminado!</div>
          <div className="text-xl mb-6">Puntaje: {score} / {texts.length}</div>
          <Button onClick={restart}>Jugar de nuevo</Button>
        </div>
      )}
    </div>
  );
};

export default EncuentraElError;
