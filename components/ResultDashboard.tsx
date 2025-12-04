import React from 'react';
import { UserAnswer, Question, Category } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { RotateCcw, Trophy, Target, Share2 } from 'lucide-react';

interface ResultDashboardProps {
  answers: UserAnswer[];
  questions: Question[];
  onRestart: () => void;
}

const ResultDashboard: React.FC<ResultDashboardProps> = ({ answers, questions, onRestart }) => {
  const correctCount = answers.filter(a => a.isCorrect).length;
  const score = Math.round((correctCount / questions.length) * 100);

  // Process data for chart
  const categoryStats = Object.values(Category).map(cat => {
    const questionsInCat = questions.filter(q => q.category === cat);
    const correctInCat = answers.filter(a => {
      const q = questions.find(q => q.id === a.questionId);
      return q?.category === cat && a.isCorrect;
    });
    
    return {
      name: cat.split(' ')[0], // Short name for axis
      fullName: cat,
      total: questionsInCat.length,
      correct: correctInCat.length,
      percentage: questionsInCat.length > 0 ? Math.round((correctInCat.length / questionsInCat.length) * 100) : 0
    };
  });

  const getGradeColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-blue-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 animate-fadeIn">
      <div className="text-center mb-12">
        <div className="inline-block p-4 rounded-full bg-slate-100 mb-4">
          <Trophy className={`w-12 h-12 ${getGradeColor(score)}`} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Completado!</h2>
        <p className="text-slate-500">Aqui está o resumo do seu desempenho.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Score Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
          <span className="text-slate-400 font-medium text-sm uppercase tracking-wider mb-2">Pontuação Final</span>
          <span className={`text-5xl font-bold ${getGradeColor(score)}`}>{score}%</span>
          <span className="text-sm text-slate-400 mt-2">{correctCount} de {questions.length} corretas</span>
        </div>

        {/* Chart Card */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
           <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
             <Target className="w-5 h-5 mr-2 text-indigo-500" /> Desempenho por Categoria
           </h3>
           <div className="h-64 w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={categoryStats} layout="vertical" margin={{ left: 40 }}>
                 <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                 <XAxis type="number" domain={[0, 100]} hide />
                 <YAxis type="category" dataKey="name" width={80} tick={{fontSize: 12, fill: '#64748b'}} />
                 <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    cursor={{fill: '#f1f5f9'}}
                 />
                 <Bar dataKey="percentage" radius={[0, 4, 4, 0]} barSize={20}>
                    {categoryStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.percentage > 70 ? '#4f46e5' : entry.percentage > 40 ? '#f59e0b' : '#ef4444'} />
                    ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>
      </div>

      {/* Answer Review List (Scrollable) */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-100 bg-slate-50">
          <h3 className="font-bold text-slate-700">Revisão Detalhada</h3>
        </div>
        <div className="max-h-96 overflow-y-auto p-0">
          {questions.map((q, idx) => {
            const userAnswer = answers.find(a => a.questionId === q.id);
            const isCorrect = userAnswer?.isCorrect;
            return (
              <div key={q.id} className="p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800 mb-1">{q.text}</p>
                    <p className="text-xs text-slate-500">
                      Sua resposta: <span className={isCorrect ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                        {userAnswer?.selectedOptionId.toUpperCase()}
                      </span> 
                      {!isCorrect && <span className="ml-2 text-slate-400"> (Correta: {q.correctAnswerId.toUpperCase()})</span>}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button 
          onClick={onRestart}
          className="flex items-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
        >
          <RotateCcw className="mr-2 w-5 h-5" /> Tentar Novamente
        </button>
      </div>
    </div>
  );
};

export default ResultDashboard;