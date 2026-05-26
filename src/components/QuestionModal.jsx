import { useState, useEffect, useRef, useMemo } from 'react';
import { getTimerSeconds } from '../data/questions';

const LABELS = ['A', 'B', 'C', 'D'];
const MEDALS = ['🥇', '🥈', '🥉'];

function shuffle(arr) {
  const a = [...arr.map((opt, i) => ({ opt, i }))];
  for (let j = a.length - 1; j > 0; j--) {
    const k = Math.floor(Math.random() * (j + 1));
    [a[j], a[k]] = [a[k], a[j]];
  }
  return a;
}

function MiniPodium({ teams, currentTeamName, pointsJustAdded }) {
  const sorted = [...teams].sort((a, b) => b.score - a.score);
  const maxScore = sorted[0].score || 1;
  return (
    <div className="mini-podium">
      <div className="mini-podium-title">📊 Clasificación actual</div>
      <div className="mini-podium-rows">
        {sorted.map((team, i) => {
          const isCurrent = team.name === currentTeamName;
          const barWidth = Math.max(4, (team.score / maxScore) * 100);
          return (
            <div key={team.name} className={`mini-podium-row${isCurrent ? ' mini-podium-current' : ''}${i === 0 && team.score > 0 ? ' mini-podium-leader' : ''}`}>
              <span className="mini-podium-medal">{i < 3 ? MEDALS[i] : `${i + 1}°`}</span>
              <div className="mini-podium-info">
                <div className="mini-podium-name" style={{ color: team.color }}>
                  {team.name}
                  {isCurrent && pointsJustAdded > 0 && (
                    <span className="mini-podium-delta">+{pointsJustAdded}</span>
                  )}
                </div>
                <div className="mini-podium-bar-track">
                  <div className="mini-podium-bar-fill" style={{ width: `${barWidth}%`, background: team.color }} />
                </div>
              </div>
              <span className="mini-podium-score">{team.score.toLocaleString()} pts</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function QuestionModal({
  question, categoryName, categoryColor,
  currentTeam, teams, result,
  onAnswer, onUseLifeline, onContinue,
}) {
  const totalTime = useMemo(() => getTimerSeconds(question.points), [question.id]);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [paused, setPaused] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState(new Set());
  const [showHint, setShowHint] = useState(false);
  const [usedLifelineTypes, setUsedLifelineTypes] = useState(new Set());
  const [lifelineCosts, setLifelineCosts] = useState({});
  const intervalRef = useRef(null);

  const shuffled = useMemo(() => shuffle(question.options), [question.id]);
  const correctShuffledIndex = useMemo(
    () => shuffled.findIndex((item) => item.i === question.answer),
    [shuffled]
  );

  useEffect(() => {
    setTimeLeft(totalTime);
    setPaused(false);
    setHiddenOptions(new Set());
    setShowHint(false);
    setUsedLifelineTypes(new Set());
    setLifelineCosts({});
  }, [question.id, totalTime]);

  useEffect(() => {
    if (result || paused) { clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) { clearInterval(intervalRef.current); onAnswer(-1, true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [result, paused, question.id]);

  const togglePause = () => setPaused((p) => !p);

  const handleOptionClick = (shuffledIdx) => {
    if (result || hiddenOptions.has(shuffledIdx)) return;
    clearInterval(intervalRef.current);
    onAnswer(shuffled[shuffledIdx].i);
  };

  const handleFiftyFifty = () => {
    const wrongShuffledIndices = shuffled
      .map((item, i) => ({ i, isWrong: item.i !== question.answer }))
      .filter((x) => x.isWrong && !hiddenOptions.has(x.i))
      .map((x) => x.i);
    const toHide = wrongShuffledIndices.sort(() => Math.random() - 0.5).slice(0, 2);
    setHiddenOptions(new Set(toHide));
    const cost = onUseLifeline('fifty-fifty');
    setUsedLifelineTypes((prev) => new Set([...prev, 'fifty-fifty']));
    setLifelineCosts((prev) => ({ ...prev, 'fifty-fifty': cost }));
  };

  const handleHint = () => {
    setShowHint(true);
    const cost = onUseLifeline('hint');
    setUsedLifelineTypes((prev) => new Set([...prev, 'hint']));
    setLifelineCosts((prev) => ({ ...prev, hint: cost }));
  };

  const handleExtraTime = () => {
    setTimeLeft((prev) => prev + 30);
    const cost = onUseLifeline('extra-time');
    setUsedLifelineTypes((prev) => new Set([...prev, 'extra-time']));
    setLifelineCosts((prev) => ({ ...prev, 'extra-time': cost }));
  };

  const canUseLifeline = (type) =>
    !result &&
    currentTeam.lifelines > 0 &&
    !usedLifelineTypes.has(type);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / totalTime) * circumference;
  const isUrgent = timeLeft <= 10;

  const getOptionClass = (shuffledIdx) => {
    if (hiddenOptions.has(shuffledIdx)) return 'option-btn option-hidden';
    if (!result) return 'option-btn';
    const isCorrect = shuffledIdx === correctShuffledIndex;
    const isSelected = !result.timedOut && shuffled[shuffledIdx].i === result.selectedIndex;
    if (isCorrect) return 'option-btn reveal-correct';
    if (isSelected && !result.correct) return 'option-btn selected-wrong';
    return 'option-btn';
  };

  const costLabel = (type) => {
    const rates = { 'fifty-fifty': 0.25, 'hint': 0.20, 'extra-time': 0.15 };
    return Math.round(question.points * rates[type]);
  };

  return (
    <div className="modal-overlay">
      <div className="question-modal">
        {/* Header */}
        <div className="modal-header" style={{ background: categoryColor }}>
          <div className="modal-header-info">
            <div className="modal-category">{categoryName}</div>
            <div className="modal-points">✨ {question.points} puntos</div>
          </div>
          <div className="timer-container" style={{ flexDirection: 'column', gap: 4 }}>
            <div className="timer-circle">
              <svg className="timer-svg" viewBox="0 0 70 70">
                <circle className="timer-track" cx="35" cy="35" r={radius} />
                <circle
                  className={`timer-progress${isUrgent ? ' urgent' : ''}`}
                  cx="35" cy="35" r={radius}
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - progress}
                  style={{ transition: paused ? 'none' : `stroke-dashoffset 1s linear, stroke 0.5s` }}
                />
              </svg>
              <div className={`timer-number${isUrgent && !paused ? ' urgent' : ''}`}>
                {paused ? '⏸' : timeLeft}
              </div>
            </div>
            {!result && (
              <button className="pause-btn" onClick={togglePause}>
                {paused ? '▶ Reanudar' : '⏸ Pausar'}
              </button>
            )}
          </div>
          <div className="modal-team">
            <div className="modal-team-label">Respondiendo</div>
            <div className="modal-team-name">{currentTeam.name}</div>
            <div className="modal-lifelines-left">
              {'🆘'.repeat(currentTeam.lifelines)}
              {currentTeam.lifelines === 0 && <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>Sin ayudas</span>}
            </div>
          </div>
        </div>

        {/* Lifelines bar */}
        {!result && (
          <div className="lifelines-bar">
            <span className="lifelines-label">🆘 Ayudas del equipo ({currentTeam.lifelines} restantes):</span>
            <div className="lifelines-buttons">
              <button
                className={`lifeline-btn${usedLifelineTypes.has('fifty-fifty') ? ' used' : ''}${!canUseLifeline('fifty-fifty') ? ' disabled' : ''}`}
                onClick={canUseLifeline('fifty-fifty') ? handleFiftyFifty : undefined}
                title={`50/50 — Elimina 2 respuestas incorrectas. Cuesta ${costLabel('fifty-fifty')} pts`}
              >
                🎯 50/50
                <span className="lifeline-cost">−{costLabel('fifty-fifty')} pts</span>
              </button>
              <button
                className={`lifeline-btn${usedLifelineTypes.has('hint') ? ' used' : ''}${!canUseLifeline('hint') ? ' disabled' : ''}`}
                onClick={canUseLifeline('hint') ? handleHint : undefined}
                title={`Pista — Muestra una ayuda. Cuesta ${costLabel('hint')} pts`}
              >
                💡 Pista
                <span className="lifeline-cost">−{costLabel('hint')} pts</span>
              </button>
              <button
                className={`lifeline-btn${usedLifelineTypes.has('extra-time') ? ' used' : ''}${!canUseLifeline('extra-time') ? ' disabled' : ''}`}
                onClick={canUseLifeline('extra-time') ? handleExtraTime : undefined}
                title={`+30 seg — Agrega 30 segundos. Cuesta ${costLabel('extra-time')} pts`}
              >
                ⏱️ +30 seg
                <span className="lifeline-cost">−{costLabel('extra-time')} pts</span>
              </button>
            </div>
          </div>
        )}

        {/* Hint banner */}
        {showHint && (
          <div className="hint-banner">
            <span className="hint-icon">💡</span>
            <div>
              <strong>Pista:</strong> {question.hint}
              {lifelineCosts.hint && <span className="hint-cost-note"> (−{lifelineCosts.hint} pts aplicados)</span>}
            </div>
          </div>
        )}

        {/* Body */}
        <div className="modal-body">
          <div className="question-context">{question.context}</div>
          <div className="question-text">{question.question}</div>
          <div className="options-grid">
            {shuffled.map((item, shuffledIdx) => (
              <button
                key={shuffledIdx}
                className={getOptionClass(shuffledIdx)}
                onClick={() => handleOptionClick(shuffledIdx)}
                disabled={!!result || hiddenOptions.has(shuffledIdx)}
              >
                <span className="option-label">{LABELS[shuffledIdx]}</span>
                {hiddenOptions.has(shuffledIdx) ? '—' : item.opt}
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className={`result-banner ${result.correct ? 'correct' : result.timedOut ? 'timeout' : 'wrong'}`}>
            <div className="result-icon">
              {result.correct ? '🎉' : result.timedOut ? '⏰' : '❌'}
            </div>
            <div>
              <div className="result-title">
                {result.correct
                  ? `¡Correcto! +${question.points} puntos para ${currentTeam.name}`
                  : result.timedOut
                  ? '¡Tiempo agotado! Sin puntos esta vez'
                  : 'Respuesta incorrecta — Sin puntos'}
              </div>
              <div className="result-explanation">💡 {question.explanation}</div>
            </div>
          </div>
        )}

        {/* Mini podium after result */}
        {result && teams && (
          <MiniPodium
            teams={teams}
            currentTeamName={currentTeam.name}
            pointsJustAdded={result.correct ? question.points : 0}
          />
        )}

        {result && (
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onContinue}>
              Siguiente turno →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
