import React, { useState } from 'react';
import { Question, Option } from '../types';
import { CheckCircle2, XCircle, BrainCircuit, Loader2 } from 'lucide-react';
import { getAnswerExplanation } from '../services/geminiService';

interface QuizCardProps {
  question: Question;
  selectedOptionId: string | null;
  onSelectOption: (id: string) => void;
  isConfirmed: boolean;
  onConfirm: () => void;
  onNext: () => void;
  isLast: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedOptionId,
  onSelectOption,
  isConfirmed,
  onConfirm,
  onNext,
  isLast,
}) => {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  // Reset explanation when question changes
  React.useEffect(() => {
    setExplanation(null);
  }, [question.id]);

  const handleExplain = async () => {
    setLoadingAi(true);
    const correctOpt = question.options.find(o => o.id === question.correctAnswerId)?.text || '';
    const userOpt = question.options.find(o => o.id === selectedOptionId)?.text || null;
    
    const text = await getAnswerExplanation(question.text, correctOpt, userOpt);
    setExplanation(text);
    setLoadingAi(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-2xl w-full border border-slate-100">
      <div className="flex justify-between items-start mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-indigo-50 text-indigo-600 uppercase">
          {question.category}
        </span>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-snug">
        {question.text}
      </h2>

      <div className="space-y-3 mb-8">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrect = option.id === question.correctAnswerId;
          const isWrong = isConfirmed && isSelected && !isCorrect;
          const showCorrect = isConfirmed && isCorrect;

          let containerClasses = "relative flex items-center p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer group ";
          
          if (isConfirmed) {
            if (isCorrect) containerClasses += "bg-green-50 border-green-500 text-green-900 ";
            else if (isWrong) containerClasses += "bg-red-50 border-red-500 text-red-900 ";
            else containerClasses += "border-slate-100 opacity-50 ";
          } else {
             if (isSelected) containerClasses += "bg-indigo-50 border-indigo-500 shadow-md ";
             else containerClasses += "border-slate-200 hover:border-indigo-200 hover:bg-slate-50 ";
          }

          return (
            <div
              key={option.id}
              onClick={() => !isConfirmed && onSelectOption(option.id)}
              className={containerClasses}
            >
              <div className={`
                flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 font-bold text-sm
                ${isConfirmed && isCorrect ? 'bg-green-500 border-green-500 text-white' : ''}
                ${isConfirmed && isWrong ? 'bg-red-500 border-red-500 text-white' : ''}
                ${!isConfirmed && isSelected ? 'bg-indigo-500 border-indigo-500 text-white' : 'border-slate-300 text-slate-400'}
              `}>
                {option.id.toUpperCase()}
              </div>
              <span className="font-medium">{option.text}</span>
              
              {isConfirmed && isCorrect && <CheckCircle2 className="absolute right-4 text-green-600" size={20} />}
              {isConfirmed && isWrong && <XCircle className="absolute right-4 text-red-600" size={20} />}
            </div>
          );
        })}
      </div>

      {isConfirmed && (
        <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={handleExplain}
              disabled={loadingAi}
              className="flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors disabled:opacity-50"
            >
              <BrainCircuit size={18} className="mr-2" />
              {loadingAi ? 'Gerando explicação...' : 'Explicar com IA (Gemini)'}
            </button>
          </div>
          
          {loadingAi && (
            <div className="flex items-center text-slate-500 text-sm mt-2">
               <Loader2 className="animate-spin mr-2 h-4 w-4" /> Consultando modelo Gemini 2.5...
            </div>
          )}

          {explanation && (
            <p className="text-sm text-slate-700 leading-relaxed mt-2 animate-fadeIn border-t pt-2 border-slate-200">
              {explanation}
            </p>
          )}
        </div>
      )}

      <div className="flex justify-end pt-4 border-t border-slate-100">
        {!isConfirmed ? (
          <button
            onClick={onConfirm}
            disabled={!selectedOptionId}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
          >
            Confirmar Resposta
          </button>
        ) : (
          <button
            onClick={onNext}
            className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg shadow-md hover:bg-slate-800 transition-all transform active:scale-95 flex items-center"
          >
            {isLast ? "Ver Resultados" : "Próxima Pergunta"}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizCard;