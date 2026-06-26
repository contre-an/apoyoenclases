import { getTimerSeconds } from '../data/questions';

export default function GameBoard({ categories, usedQuestions, teams, currentTeamIndex, onSelectQuestion, onReset }) {
  const currentTeam = teams[currentTeamIndex];

  const poolCategories = categories.filter((c) => c.type === 'pool');
  const periCategories = categories.filter((c) => c.type === 'perimetro');
  const areaCategories = categories.filter((c) => c.type === 'area');
  const mixtoCategories = categories.filter((c) => c.type === 'mixto');

  return (
    <div className="game-layout">
      <div className="board-area">
        <div className="board-title">
          <h2>Tablero de Juego</h2>
          <p className="board-subtitle">
            <strong style={{ color: currentTeam.color }}>{currentTeam.name}</strong>, elige categoría y puntaje
          </p>
        </div>

        <div
          className="jeopardy-board"
          style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}
        >
          {/* Section header row */}
          {poolCategories.length > 0 && (
            <div className="section-header" style={{ gridColumn: `span ${poolCategories.length}`, background: '#37474F' }}>
              🎲 BANCO DE PREGUNTAS
            </div>
          )}
          {periCategories.length > 0 && (
            <div className="section-header" style={{ gridColumn: `span ${periCategories.length}`, background: '#0D47A1' }}>
              📏 PERÍMETRO
            </div>
          )}
          {areaCategories.length > 0 && (
            <div className="section-header" style={{ gridColumn: `span ${areaCategories.length}`, background: '#4A148C' }}>
              📐 ÁREA
            </div>
          )}
          {mixtoCategories.length > 0 && (
            <div className="section-header" style={{ gridColumn: `span ${mixtoCategories.length}`, background: '#1B5E20' }}>
              ⭐ MIXTO
            </div>
          )}

          {/* Category name headers */}
          {categories.map((cat) => (
            <div key={cat.id} className="category-header" style={{ background: cat.color }}>
              {cat.name}
            </div>
          ))}

          {/* Question cells */}
          {[0, 1, 2, 3, 4].map((rowIdx) =>
            categories.map((cat) => {
              const q = cat.questions[rowIdx];
              const isUsed = usedQuestions.has(q.id);
              const timerSec = q.timerOverride ?? getTimerSeconds(q.points);
              return (
                <button
                  key={q.id}
                  className={`question-cell${isUsed ? ' used' : ''}`}
                  style={{ background: isUsed ? '#90A4AE' : cat.color }}
                  onClick={() => !isUsed && onSelectQuestion(q, cat)}
                  disabled={isUsed}
                  title={isUsed ? 'Ya respondida' : `${cat.name} · ${q.points} pts · ⏱ ${timerSec}s`}
                >
                  {!isUsed && (
                    <>
                      <span className="cell-points">{q.points}</span>
                      <span className="cell-timer">⏱{timerSec}s</span>
                    </>
                  )}
                </button>
              );
            })
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: 12, color: '#5C5C7A', fontSize: '0.85rem' }}>
          {usedQuestions.size} de {categories.reduce((s, c) => s + c.questions.length, 0)} preguntas respondidas
        </div>
      </div>

      {/* Sidebar */}
      <aside className="scoreboard-sidebar">
        <div className="scoreboard-title">🏆 Puntajes</div>

        {[...teams]
          .map((t, i) => ({ ...t, originalIndex: i }))
          .sort((a, b) => b.score - a.score)
          .map((team) => (
            <div
              key={team.originalIndex}
              className={`score-card${team.originalIndex === currentTeamIndex ? ' current' : ''}`}
            >
              <div className="score-team-name">
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: team.color, display: 'inline-block', flexShrink: 0 }} />
                {team.name}
                {team.originalIndex === currentTeamIndex && <span className="current-turn-badge">turno</span>}
              </div>
              <div className="score-members">{team.members.join(' · ')}</div>
              <div className="score-value">{team.score.toLocaleString()} pts</div>
              <div className="score-lifelines" title="Ayudas disponibles">
                {team.lifelines > 0
                  ? `🆘 ×${team.lifelines} ayuda${team.lifelines > 1 ? 's' : ''}`
                  : <span style={{ color: '#B0BEC5', fontSize: '0.75rem' }}>Sin ayudas</span>}
              </div>
            </div>
          ))}

        <button
          className="btn-reset"
          onClick={() => {
            if (window.confirm('¿Reiniciar el juego? Se borrarán todos los puntajes y equipos.')) {
              onReset();
            }
          }}
        >
          🔄 Reiniciar juego
        </button>

        <div className="turn-indicator">
          <div className="turn-indicator-label">⬆ Turno actual</div>
          <div className="turn-indicator-team">{currentTeam.name}</div>
          <div style={{ fontSize: '0.8rem', marginTop: 4, opacity: 0.7 }}>
            {currentTeam.members[0]} · {currentTeam.members[1]}
          </div>
          <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>
            {currentTeam.members[2]} · {currentTeam.members[3]}
          </div>
          <div style={{ fontSize: '0.75rem', marginTop: 6, opacity: 0.8 }}>
            🆘 {currentTeam.lifelines} ayuda{currentTeam.lifelines !== 1 ? 's' : ''} disponible{currentTeam.lifelines !== 1 ? 's' : ''}
          </div>
        </div>
      </aside>
    </div>
  );
}
