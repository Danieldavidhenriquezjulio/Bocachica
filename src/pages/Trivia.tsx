import React, { useState } from 'react';
import Button from '../components/UI/Button';

// Preguntas ampliadas y actualizadas basadas en el timeline de Historia
const questions = [
  {
    question: '¿Quién era el cacique más reconocido en la zona sur de Tierrabomba antes de la llegada de los españoles?',
    options: ['Carex', 'Morillo', 'Blas de Lezo', 'Pedro de Heredia'],
    answer: 0,
    explanation: 'Carex era el cacique más reconocido según las crónicas tempranas de la conquista.'
  },
  {
    question: '¿Qué grupo étnico habitaba Tierrabomba antes de la conquista?',
    options: ['Chibchas', 'Caribes', 'Muiscas', 'Incas'],
    answer: 1,
    explanation: 'La isla estaba habitada por grupos indígenas de filiación caribe.'
  },
  {
    question: '¿Quién fue el conquistador español que fundó Cartagena de Indias?',
    options: ['Pedro de Heredia', 'Blas de Lezo', 'Juan de Castellanos', 'Luis Fernández de Córdoba'],
    answer: 0,
    explanation: 'Pedro de Heredia fundó Cartagena de Indias en 1533.'
  },
  {
    question: '¿En qué año se autorizó la construcción del Castillo de San Luis de Bocachica?',
    options: ['1536', '1646', '1697', '1741'],
    answer: 1,
    explanation: 'La construcción del castillo comenzó en 1646 bajo las órdenes del gobernador Luis Fernández de Córdoba.'
  },
  {
    question: '¿Cuál fue la principal razón para fortificar el canal de Bocachica en el siglo XVII?',
    options: [
      'Evitar la piratería y controlar el acceso marítimo',
      'Expandir la agricultura',
      'Fomentar el comercio de esclavos',
      'Construir una ciudad nueva'
    ],
    answer: 0,
    explanation: 'La fortificación buscaba evitar la piratería y controlar el acceso a la bahía.'
  },
  {
    question: '¿Qué evento marcó la necesidad de modernizar las defensas de Bocachica en el siglo XVIII?',
    options: [
      'La llegada de Pedro de Heredia',
      'El ataque francés de 1697',
      'La construcción del canal de Bocagrande',
      'El sitio de Vernon en 1741'
    ],
    answer: 1,
    explanation: 'El ataque francés de 1697 evidenció la necesidad de modernizar las defensas.'
  },
  {
    question: '¿Quién lideró la defensa de Cartagena durante el sitio británico de 1741?',
    options: ['Blas de Lezo', 'Pedro de Heredia', 'Carex', 'Jean-Bernard Desjean'],
    answer: 0,
    explanation: 'Blas de Lezo fue el comandante español que dirigió la defensa.'
  },
  {
    question: '¿Cuál fue la principal función del Castillo de San Fernando de Bocachica?',
    options: [
      'Servir como residencia real',
      'Controlar el canal de Bocachica y evitar incursiones navales',
      'Almacenar oro y plata',
      'Ser un centro religioso'
    ],
    answer: 1,
    explanation: 'El castillo tenía como objetivo controlar el canal y evitar incursiones navales.'
  },
  {
    question: '¿Qué tipo de reconocimiento recibió Bocachica en 1950?',
    options: [
      'Patrimonio Nacional',
      'Patrimonio de la Humanidad',
      'Reserva Natural',
      'Zona Franca'
    ],
    answer: 0,
    explanation: 'En 1950, las fortificaciones fueron declaradas Monumento Nacional.'
  },
  {
    question: '¿Qué reconocimiento internacional recibieron las fortificaciones de Bocachica en 1984?',
    options: [
      'Patrimonio Nacional',
      'Patrimonio de la Humanidad por la UNESCO',
      'Monumento Militar',
      'Reserva Natural'
    ],
    answer: 1,
    explanation: 'En 1984, las fortificaciones fueron declaradas Patrimonio de la Humanidad por la UNESCO.'
  },
  {
    question: '¿Qué ley permitió la liberación del casco urbano de Bocachica en el siglo XIX?',
    options: [
      'Ley de 1863 del Estado Soberano de Bolívar',
      'Ley de 1810 de Independencia',
      'Ley de 1950 de Patrimonio',
      'Ley de 1984 de la UNESCO'
    ],
    answer: 0,
    explanation: 'La ley de 1863 permitió liberar el casco urbano de manos privadas.'
  },
  {
    question: '¿Qué comunidad fue reconocida como propietaria ancestral de tierras en Bocachica en el siglo XXI?',
    options: [
      'Familias afrodescendientes y nativos',
      'Conquistadores españoles',
      'Piratas franceses',
      'Religiosos dominicos'
    ],
    answer: 0,
    explanation: 'Las familias afrodescendientes y nativos recibieron reconocimiento legal en el siglo XXI.'
  },
  {
    question: '¿Cuál era la función principal de las "Tierras de Indios" en Bocachica durante la colonia?',
    options: [
      'Producción agrícola comunitaria',
      'Centro militar',
      'Puerto comercial',
      'Zona de esclavitud'
    ],
    answer: 0,
    explanation: 'Las "Tierras de Indios" tenían función agropecuaria comunitaria.'
  },
  {
    question: '¿Qué personaje fue capturado y obligado a entregar tributo en oro a los españoles?',
    options: ['Carex', 'Pedro de Heredia', 'Blas de Lezo', 'Luis Fernández de Córdoba'],
    answer: 0,
    explanation: 'Carex fue capturado y obligado a entregar tributo en oro.'
  },
  {
    question: '¿Qué castillo fue destruido durante el ataque británico de 1741?',
    options: [
      'Castillo de San Luis de Bocachica',
      'Castillo de San Fernando',
      'Castillo de San Felipe',
      'Castillo de Barú'
    ],
    answer: 0,
    explanation: 'El Castillo de San Luis fue destruido durante el ataque británico.'
  },
  {
    question: '¿Qué actividad económica NO fue principal en Bocachica durante la colonia?',
    options: [
      'Agricultura',
      'Defensa militar',
      'Comercio de esclavos',
      'Industria textil'
    ],
    answer: 3,
    explanation: 'La industria textil no fue una actividad principal en Bocachica.'
  }
];


// Función para mezclar un array (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Trivia: React.FC = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState(() => shuffleArray(questions));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOption = (idx: number) => {
    setSelected(idx);
    if (idx === shuffledQuestions[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (current < shuffledQuestions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setShuffledQuestions(shuffleArray(questions));
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 py-22">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Trivia de Bocachica</h2>
        {showResult ? (
          <div className="text-center">
            <p className="text-2xl font-semibold mb-4">¡Tu puntaje final es {score} de {shuffledQuestions.length}!</p>
            <Button onClick={restart} size="lg" className="mt-4">Jugar de nuevo</Button>
          </div>
        ) : (
          <>
            <p className="text-lg font-medium mb-4">{shuffledQuestions[current].question}</p>
            <div className="space-y-3 mb-6">
              {shuffledQuestions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOption(idx)}
                  disabled={selected !== null}
                  className={`w-full text-left px-4 py-3 rounded border transition-colors duration-200
                    ${selected === idx
                      ? idx === shuffledQuestions[current].answer
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : 'bg-red-100 border-red-500 text-red-800'
                      : 'bg-gray-50 border-gray-300 hover:bg-blue-50'}
                  `}
                >
                  {opt}
                </button>
              ))}
            </div>
            {selected !== null && (
              <div className="mb-4 text-sm text-gray-700">
                {selected === shuffledQuestions[current].answer ? '¡Correcto!' : 'Incorrecto.'}
                <br />
                <span className="italic">{shuffledQuestions[current].explanation}</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Pregunta {current + 1} de {shuffledQuestions.length}</span>
              <Button
                onClick={nextQuestion}
                disabled={selected === null}
                size="sm"
                className="ml-4"
              >
                {current === shuffledQuestions.length - 1 ? 'Ver resultado' : 'Siguiente'}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Trivia;
