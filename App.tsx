import React, { useState } from 'react';
import { QUESTIONS } from './constants';
import { UserAnswer, AppView } from './types';
import QuizCard from './components/QuizCard';
import ResultDashboard from './components/ResultDashboard';
import { Terminal, BookOpen, Layers, Code } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  
  // Card specific state
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const progress = Math.round(((currentQuestionIndex) / QUESTIONS.length) * 100);

  const handleStart = () => {
    setView('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    resetCardState();
  };

  const resetCardState = () => {
    setSelectedOptionId(null);
    setIsConfirmed(false);
  };

  const handleSelectOption = (id: string) => {
    setSelectedOptionId(id);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOptionId) return;

    const isCorrect = selectedOptionId === currentQuestion.correctAnswerId;
    
    // Save answer
    setUserAnswers(prev => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedOptionId,
        isCorrect
      }
    ]);

    setIsConfirmed(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      resetCardState();
    } else {
      setView('results');
    }
  };

  const handleRestart = () => {
    setView('welcome');
    resetCardState();
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
  };

  // Render Logic
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-700 font-bold text-xl">
            <Terminal size={24} />
            <span>TechMzungu<span className="text-slate-800">AI</span></span>
          </div>
          {view === 'quiz' && (
            <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
              <span className="hidden sm:inline">Questão {currentQuestionIndex + 1} de {QUESTIONS.length}</span>
              <div className="w-24 md:w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        
        {view === 'welcome' && (
          <div className="text-center max-w-2xl animate-fadeIn">
             <div className="flex justify-center gap-6 mb-8 text-slate-300">
                <BookOpen size={48} className="text-blue-500" />
                <Layers size={48} className="text-indigo-500" />
                <Code size={48} className="text-purple-500" />
             </div>
             <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
               Teste seus conhecimentos em <br/>
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                 Desenvolvimento Web
               </span>
             </h1>
             <p className="text-lg text-slate-600 mb-10 leading-relaxed">
               40 questões cobrindo Web 2.0, Redes (HTTP, TCP/IP), HTML5, CSS3 e JavaScript.
               Receba explicações instantâneas impulsionadas por IA para aprofundar seu aprendizado.
             </p>
             <button 
               onClick={handleStart}
               className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold rounded-xl shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1 active:translate-y-0"
             >
               Iniciar Quiz
             </button>
          </div>
        )}

        {view === 'quiz' && (
          <QuizCard 
            question={currentQuestion}
            selectedOptionId={selectedOptionId}
            onSelectOption={handleSelectOption}
            isConfirmed={isConfirmed}
            onConfirm={handleConfirmAnswer}
            onNext={handleNext}
            isLast={currentQuestionIndex === QUESTIONS.length - 1}
          />
        )}

        {view === 'results' && (
          <ResultDashboard 
            answers={userAnswers}
            questions={QUESTIONS}
            onRestart={handleRestart}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} TechMzungu AI.</p>
      </footer>
    </div>
  );
};

export default App;