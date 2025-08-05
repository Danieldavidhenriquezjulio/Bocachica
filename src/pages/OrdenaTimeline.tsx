import React, { useState } from 'react';
import Button from '../components/UI/Button';

// Eventos históricos para ordenar (puedes ajustar o expandir)
const timelineEvents = [
  { year: '1536', title: 'Fundación Española' },
  { year: '1697', title: 'Construcción del Fuerte San Luis' },
  { year: '1741', title: 'Sitio de Vernon' },
  { year: '1760', title: 'Construcción del Castillo de San Fernando' },
  { year: '1815', title: 'Época de Independencia' },
  { year: '1984', title: 'Patrimonio de la Humanidad' },
];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const OrdenaTimeline: React.FC = () => {
  const [events, setEvents] = useState(() => shuffle(timelineEvents));
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleDragStart = (idx: number) => setDraggedIdx(idx);
  const handleDrop = (idx: number) => {
    if (draggedIdx === null || draggedIdx === idx) return;
    const newEvents = [...events];
    const [removed] = newEvents.splice(draggedIdx, 1);
    newEvents.splice(idx, 0, removed);
    setEvents(newEvents);
    setDraggedIdx(null);
  };
  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const checkOrder = () => {
    const isCorrect = events.every((ev, i) => ev.year === timelineEvents[i].year);
    setResult(isCorrect ? '¡Correcto! Has ordenado la línea de tiempo.' : 'Hay errores, inténtalo de nuevo.');
  };

  const reset = () => {
    setEvents(shuffle(timelineEvents));
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 mt-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Ordena la Línea de Tiempo</h1>
      <p className="mb-8 text-lg text-gray-700 text-center max-w-xl">Arrastra y suelta los eventos para ordenarlos cronológicamente. ¡Pon a prueba tu memoria histórica sobre Bocachica!</p>
      <div className="w-full max-w-md space-y-4 mb-6">
        {events.map((ev, idx) => (
          <div
            key={ev.year}
            className="bg-white rounded-lg shadow p-4 flex items-center cursor-move border border-gray-200 hover:bg-blue-50 transition"
            draggable
            onDragStart={() => handleDragStart(idx)}
            onDrop={() => handleDrop(idx)}
            onDragOver={handleDragOver}
          >
            <span className="font-bold mr-4">?</span>
            <span>{ev.title}</span>
          </div>
        ))}
      </div>
      <Button onClick={checkOrder} className="mb-4">Comprobar orden</Button>
      <Button onClick={reset} variant="secondary">Reiniciar</Button>
      {result && <div className="mt-6 text-xl font-semibold text-center text-blue-700">{result}</div>}
    </div>
  );
};

export default OrdenaTimeline;
