import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoriesPecuarias, TOTAL_QUESTIONS_PECUARIAS } from '../data/questionsPecuarias';
import SetupScreen from '../components/SetupScreen';
import GameBoard from '../components/GameBoard';
import QuestionModal from '../components/QuestionModal';
import FinalScreen from '../components/FinalScreen';

const TEAM_COLORS = [
  '#E53935', '#1976D2', '#F57C00', '#6A1B9A', '#00838F', '#558B2F',
  '#D81B60', '#00695C', '#F9A825', '#283593', '#BF360C', '#37474F',
];
const MAX_LIFELINES = 2;

export default function Pecuarias() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState('setup');
  const [teams, setTeams] = useState([]);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState(new Set());
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [questionResult, setQuestionResult] = useState(null);

  const startGame = (teamData) => {
    setTeams(teamData.map((t, i) => ({ ...t, score: 0, color: TEAM_COLORS[i % TEAM_COLORS.length], lifelines: MAX_LIFELINES })));
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
      setTeams((prev) => prev.map((t, i) => i === currentTeamIndex ? { ...t, score: t.score + activeQuestion.question.points } : t));
    }
    setUsedQuestions((prev) => new Set([...prev, activeQuestion.question.id]));
    setQuestionResult({ correct, timedOut, selectedIndex });
  };

  const useLifeline = (type) => {
    const pts = activeQuestion.question.points;
    const costMap = { 'fifty-fifty': 0.25, 'hint': 0.20, 'extra-time': 0.15 };
    const cost = Math.round(pts * (costMap[type] ?? 0.20));
    setTeams((prev) => prev.map((t, i) => i === currentTeamIndex ? { ...t, score: Math.max(0, t.score - cost), lifelines: t.lifelines - 1 } : t));
    return cost;
  };

  const continueGame = () => {
    if (usedQuestions.size >= TOTAL_QUESTIONS_PECUARIAS) {
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
    <div className="pecuarias-theme">
      <header className="app-header pecuarias-header">
        <button className="back-btn" onClick={() => navigate('/')}>← Volver</button>
        <h1>🐄 Gestión de Empresas Pecuarias</h1>
        <p>Matemáticas del campo — Perímetros y áreas en ganadería, porcicultura y avicultura</p>
      </header>

      <div className="marquee-wrapper pecuarias-marquee">
        <span className="marquee-text">
          🐄 FEDEGAN · Ganadería Bovina &nbsp;·&nbsp; 🐷 ICA Colombia · Porcicultura &nbsp;·&nbsp;
          🐔 Avicultura Tecnificada &nbsp;·&nbsp; 🐟 Acuicultura · Tilapia y Cachama &nbsp;·&nbsp;
          🌿 Praderas y Potreros &nbsp;·&nbsp; 🐐 Caprinos y Ovinos &nbsp;·&nbsp;
          📐 Instructor: Carlos Contreras &nbsp;·&nbsp;
          🐄 FEDEGAN · Ganadería Bovina &nbsp;·&nbsp; 🐷 ICA Colombia · Porcicultura &nbsp;·&nbsp;
          🐔 Avicultura Tecnificada &nbsp;·&nbsp; 🐟 Acuicultura · Tilapia y Cachama &nbsp;·&nbsp;
          🌿 Praderas y Potreros &nbsp;·&nbsp; 🐐 Caprinos y Ovinos &nbsp;·&nbsp;
          📐 Instructor: Carlos Contreras &nbsp;·&nbsp;
        </span>
      </div>

      {phase === 'setup' && <SetupScreen onStart={startGame} teamColors={TEAM_COLORS} maxLifelines={MAX_LIFELINES} />}
      {phase === 'game' && (
        <GameBoard categories={categoriesPecuarias} usedQuestions={usedQuestions} teams={teams} currentTeamIndex={currentTeamIndex} onSelectQuestion={selectQuestion} onReset={resetGame} />
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
