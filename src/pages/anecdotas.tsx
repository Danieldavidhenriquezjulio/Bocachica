import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Anecdota {
  id: string;
  titulo: string;
  cuento: string;
  autor: string;
  created_at?: string;
}

const Anecdotas: React.FC = () => {
  const [anecdotas, setAnecdotas] = useState<Anecdota[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [cuento, setCuento] = useState('');
  const [autor, setAutor] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchAnecdotas = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('anecdotas')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) setError('Error al cargar las anécdotas');
      else setAnecdotas(data || []);
      setLoading(false);
    };
    fetchAnecdotas();
  }, [success]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!titulo || !cuento || !autor) {
      setError('Todos los campos son obligatorios');
      return;
    }
    const { error } = await supabase
      .from('anecdotas')
      .insert([{ titulo, cuento, autor }]);
    if (error) setError('No se pudo guardar la anécdota');
    else {
      setSuccess('¡Anécdota agregada!');
      setTitulo('');
      setCuento('');
      setAutor('');
      setShowForm(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Anecdotas de la comunidad</h1>
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow"
        >
          {showForm ? 'Cancelar' : 'Agregar anécdota'}
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 mb-8 flex flex-col gap-4">
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Cuento o anécdota"
            value={cuento}
            onChange={e => setCuento(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
            required
          />
          <input
            type="text"
            placeholder="Autor o quien aporta"
            value={autor}
            onChange={e => setAutor(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Guardar
          </button>
        </form>
      )}
      {loading ? (
        <div className="text-center text-gray-500">Cargando...</div>
      ) : (
        <div className="space-y-8">
          {anecdotas.map(a => (
            <div
              key={a.id}
              className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 border-l-8 border-blue-500 rounded-xl shadow-xl p-8 mb-4 group transition-transform hover:scale-[1.025] hover:shadow-2xl"
            >
              <div className="absolute -left-6 top-6 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h10M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif font-bold text-blue-800 mb-2 pl-8">{a.titulo}</h2>
              <p className="text-gray-700 leading-relaxed mb-4 pl-8 italic">{a.cuento}</p>
              <div className="text-sm text-blue-700 font-semibold pl-8">Aporte: {a.autor}</div>
            </div>
          ))}
          {anecdotas.length === 0 && <p className="text-center text-gray-500">No hay anécdotas aún.</p>}
        </div>
      )}
    </div>
  );
};

export default Anecdotas;