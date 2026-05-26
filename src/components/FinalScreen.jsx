import { useEffect, useState } from 'react';

const MEDAL = ['🥇', '🥈', '🥉'];
const CONFETTI_COLORS = ['#E53935', '#F57C00', '#1976D2', '#6A1B9A', '#2E7D32', '#F9A825', '#00BCD4'];

function Confetti() {
  const [pieces] = useState(() =>
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 3,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: 8 + Math.random() * 10,
      rotate: Math.random() * 360,
    }))
  );

  return (
    <div className="confetti-container">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}

export default function FinalScreen({ teams, onReset }) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 6000);
    return () => clearTimeout(t);
  }, []);

  const sorted = [...teams].sort((a, b) => b.score - a.score);
  const winner = sorted[0];
  const maxScore = winner.score;

  const podiumOrder = sorted.slice(0, 3);
  const podiumDisplay =
    podiumOrder.length >= 2
      ? [podiumOrder[1], podiumOrder[0], podiumOrder[2]].filter(Boolean)
      : podiumOrder;

  const PODIUM_HEIGHTS = [120, 160, 90];
  const podiumColorMap = [podiumOrder[1], podiumOrder[0], podiumOrder[2]];

  return (
    <>
      {showConfetti && <Confetti />}

      <div className="final-screen">
        <div className="winner-badge">🏆</div>
        <div className="winner-title">¡Campeón del día!</div>
        <div className="winner-name" style={{ color: winner.color }}>
          {winner.name}
        </div>
        <div className="winner-score">{winner.score.toLocaleString()} puntos</div>

        {sorted.length >= 2 && (
          <div className="podium">
            {podiumDisplay.map((team, visualIdx) => {
              const rank = sorted.findIndex((t) => t.name === team.name);
              const height = PODIUM_HEIGHTS[visualIdx];
              return (
                <div className="podium-item" key={team.name}>
                  <div className="podium-rank">{MEDAL[rank] || `#${rank + 1}`}</div>
                  <div className="podium-team" style={{ color: team.color, fontWeight: 800 }}>
                    {team.name}
                  </div>
                  <div className="podium-score">{team.score.toLocaleString()} pts</div>
                  <div
                    className="podium-bar"
                    style={{
                      height,
                      background: `linear-gradient(to top, ${team.color}dd, ${team.color}88)`,
                      minWidth: 90,
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}

        <div className="full-results">
          <h3>Resultados Completos</h3>
          {sorted.map((team, i) => (
            <div className="result-row" key={team.name}>
              <div className="result-position">{MEDAL[i] || `${i + 1}°`}</div>
              <div className="result-team-info">
                <div className="result-team-name" style={{ color: team.color }}>
                  {team.name}
                </div>
                <div className="result-team-members">{team.members.join(' · ')}</div>
              </div>
              <div className="result-score">{team.score.toLocaleString()}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn-primary btn-lg" onClick={onReset}>
            🔄 Nueva partida
          </button>
        </div>
      </div>
    </>
  );
}
