import React, { useState } from 'react';
import Button from '../components/UI/Button';

const questions = [
  {
    statement: 'El Castillo de San Luis fue construido en el siglo XVII en Bocachica.',
    answer: true,
    explanation: 'Correcto, el Castillo de San Luis fue construido en el siglo XVII.'
  },
  {
    statement: 'Bocachica fue declarado Patrimonio de la Humanidad por la UNESCO en 1984.',
    answer: true,
    explanation: 'Así es, las fortificaciones de Bocachica fueron incluidas en la declaración de la UNESCO en 1984.'
  },
  {
    statement: 'El canal de Bocachica nunca tuvo importancia militar para Cartagena.',
    answer: false,
    explanation: 'Incorrecto, el canal de Bocachica fue clave en la defensa militar de Cartagena.'
  },
  {
    statement: 'El ataque británico de 1741 fue liderado por Edward Vernon.',
    answer: true,
    explanation: 'Correcto, Edward Vernon lideró el ataque británico en 1741.'
  },
  {
    statement: 'La hacienda de Bocachica fue privatizada en el siglo XIX.',
    answer: true,
    explanation: 'Sí, en 1848 Bocachica fue tratada como hacienda privada.'
  },
  {
    statement: 'El Castillo de San Fernando fue construido antes que el de San Luis.',
    answer: false,
    explanation: 'No, el Castillo de San Fernando fue construido después del de San Luis.'
  },
];

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const VerdaderoFalso: React.FC = () => {
  const [quiz, setQuiz] = useState(() => shuffle(questions));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAnswer = (ans: boolean) => {
    if (quiz[current].answer === ans) {
      setScore(score + 1);
      setFeedback('¡Correcto! ' + quiz[current].explanation);
    } else {
      setFeedback('Incorrecto. ' + quiz[current].explanation);
    }
    setTimeout(() => {
      if (current + 1 < quiz.length) {
        setCurrent(current + 1);
        setFeedback(null);
      } else {
        setShowResult(true);
      }
    }, 1200);
  };

  const restart = () => {
    setQuiz(shuffle(questions));
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setFeedback(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-22 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Verdadero o Falso</h1>
      <p className="mb-8 text-lg text-gray-700 text-center max-w-xl">Responde si las afirmaciones sobre Bocachica son verdaderas o falsas. ¡Demuestra tu conocimiento!</p>
      {!showResult ? (
        <div className="w-full max-w-xl bg-white rounded-lg shadow p-8 flex flex-col items-center">
          <div className="text-xl font-semibold mb-6">{quiz[current].statement}</div>
          <div className="flex gap-6 mb-4">
            <Button onClick={() => handleAnswer(true)} className="px-8">Verdadero</Button>
            <Button onClick={() => handleAnswer(false)} variant="secondary" className="px-8">Falso</Button>
          </div>
          {feedback && <div className="mt-4 text-blue-700 font-medium text-center">{feedback}</div>}
          <div className="mt-6 text-gray-500">Pregunta {current + 1} de {quiz.length}</div>
        </div>
      ) : (
        <div className="w-full max-w-xl bg-white rounded-lg shadow p-8 flex flex-col items-center">
          <div className="text-2xl font-bold mb-4">¡Juego terminado!</div>
          <div className="text-xl mb-6">Puntaje: {score} / {quiz.length}</div>
          <Button onClick={restart}>Jugar de nuevo</Button>
        </div>
      )}
    </div>
  );
};

export default VerdaderoFalso;
