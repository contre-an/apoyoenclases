import { useState } from 'react';
import { categories, TOTAL_QUESTIONS } from './data/questions';
import SetupScreen from './components/SetupScreen';
import GameBoard from './components/GameBoard';
import QuestionModal from './components/QuestionModal';
import FinalScreen from './components/FinalScreen';

const TEAM_COLORS = ['#E53935', '#1976D2', '#F57C00', '#6A1B9A', '#00838F', '#558B2F'];
const MAX_LIFELINES = 2;

export default function App() {
  const [phase, setPhase] = useState('setup');
  const [teams, setTeams] = useState([]);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState(new Set());
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [questionResult, setQuestionResult] = useState(null);

  const startGame = (teamData) => {
    setTeams(
      teamData.map((t, i) => ({
        ...t,
        score: 0,
        color: TEAM_COLORS[i % TEAM_COLORS.length],
        lifelines: MAX_LIFELINES,
      }))
    );
    setCurrentTeamIndex(0);
    setUsedQuestions(new Set());
    setActiveQuestion(null);
    setQuestionResult(null);
    setPhase('game');
  };

  const selectQuestion = (question, category) => {
    setActiveQuestion({ question, categoryName: category.name, categoryColor: category.color });
    setQuestionResult(null);
  };

  const submitAnswer = (selectedIndex, timedOut = false) => {
    const correct = !timedOut && selectedIndex === activeQuestion.question.answer;
    if (correct) {
      setTeams((prev) =>
        prev.map((t, i) =>
          i === currentTeamIndex ? { ...t, score: t.score + activeQuestion.question.points } : t
        )
      );
    }
    setUsedQuestions((prev) => new Set([...prev, activeQuestion.question.id]));
    setQuestionResult({ correct, timedOut, selectedIndex });
  };

  const useLifeline = (type) => {
    const pts = activeQuestion.question.points;
    const costMap = { 'fifty-fifty': 0.25, 'hint': 0.20, 'extra-time': 0.15 };
    const cost = Math.round(pts * (costMap[type] ?? 0.20));
    setTeams((prev) =>
      prev.map((t, i) =>
        i === currentTeamIndex
          ? { ...t, score: Math.max(0, t.score - cost), lifelines: t.lifelines - 1 }
          : t
      )
    );
    return cost;
  };

  const continueGame = () => {
    if (usedQuestions.size >= TOTAL_QUESTIONS) {
      setPhase('final');
      setActiveQuestion(null);
      setQuestionResult(null);
      return;
    }
    setCurrentTeamIndex((prev) => (prev + 1) % teams.length);
    setActiveQuestion(null);
    setQuestionResult(null);
  };

  const resetGame = () => {
    setPhase('setup');
    setTeams([]);
    setCurrentTeamIndex(0);
    setUsedQuestions(new Set());
    setActiveQuestion(null);
    setQuestionResult(null);
  };

  return (
    <div>
      <header className="app-header">
        <h1>🍳 Perímetros y Áreas en la Cocina</h1>
        <p>Matemáticas deliciosas — Aprende geometría con sabor</p>
      </header>

      <div className="marquee-wrapper">
        <span className="marquee-text">
          ⭐ Instructor: Carlos Contreras &nbsp;&nbsp;·&nbsp;&nbsp; Matemáticas &nbsp;&nbsp;·&nbsp;&nbsp;
          📐 Perímetros y Áreas &nbsp;&nbsp;·&nbsp;&nbsp; ¡Aprendamos juntos! &nbsp;&nbsp;·&nbsp;&nbsp;
          ⭐ Instructor: Carlos Contreras &nbsp;&nbsp;·&nbsp;&nbsp; Matemáticas &nbsp;&nbsp;·&nbsp;&nbsp;
          📐 Perímetros y Áreas &nbsp;&nbsp;·&nbsp;&nbsp; ¡Aprendamos juntos! &nbsp;&nbsp;·&nbsp;&nbsp;
        </span>
      </div>

      {phase === 'setup' && <SetupScreen onStart={startGame} teamColors={TEAM_COLORS} maxLifelines={MAX_LIFELINES} />}

      {phase === 'game' && (
        <GameBoard
          categories={categories}
          usedQuestions={usedQuestions}
          teams={teams}
          currentTeamIndex={currentTeamIndex}
          onSelectQuestion={selectQuestion}
          onReset={resetGame}
        />
      )}

      {phase === 'final' && <FinalScreen teams={teams} onReset={resetGame} />}

      {activeQuestion && (
        <QuestionModal
          question={activeQuestion.question}
          categoryName={activeQuestion.categoryName}
          categoryColor={activeQuestion.categoryColor}
          currentTeam={teams[currentTeamIndex]}
          teams={teams}
          result={questionResult}
          onAnswer={submitAnswer}
          onUseLifeline={useLifeline}
          onContinue={continueGame}
        />
      )}
    </div>
  );
}
