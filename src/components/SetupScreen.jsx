import { useState } from 'react';

const EMPTY_TEAM = () => ({ name: '', members: ['', '', '', ''] });

const DEFAULT_THEME = {
  icon: '👨‍🍳',
  title: 'Configura los Equipos',
  teamPlaceholder: (i) => `Ej: Los Chefs ${i + 1}`,
};

export default function SetupScreen({ onStart, teamColors, theme = DEFAULT_THEME }) {
  const [teams, setTeams] = useState([EMPTY_TEAM(), EMPTY_TEAM()]);
  const [error, setError] = useState('');

  const updateTeamName = (i, value) => {
    setTeams((prev) => prev.map((t, idx) => (idx === i ? { ...t, name: value } : t)));
    setError('');
  };

  const updateMember = (teamIdx, memberIdx, value) => {
    setTeams((prev) =>
      prev.map((t, i) => {
        if (i !== teamIdx) return t;
        const members = [...t.members];
        members[memberIdx] = value;
        return { ...t, members };
      })
    );
    setError('');
  };

  const addTeam = () => {
    setTeams((prev) => [...prev, EMPTY_TEAM()]);
  };

  const removeTeam = (i) => {
    if (teams.length <= 2) return;
    setTeams((prev) => prev.filter((_, idx) => idx !== i));
  };

  const handleStart = () => {
    for (let i = 0; i < teams.length; i++) {
      if (!teams[i].name.trim()) {
        setError(`El equipo ${i + 1} necesita un nombre`);
        return;
      }
      for (let j = 0; j < 4; j++) {
        if (!teams[i].members[j].trim()) {
          setError(`El equipo "${teams[i].name}" necesita los 4 integrantes`);
          return;
        }
      }
    }
    onStart(teams.map((t) => ({ name: t.name.trim(), members: t.members.map((m) => m.trim()) })));
  };

  return (
    <div className="setup-screen">
      <div className="setup-title">
        <h2>{theme.icon} {theme.title}</h2>
        <p>Mínimo 2 equipos · 4 integrantes por equipo</p>
      </div>

      <div className="teams-grid">
        {teams.map((team, i) => (
          <div className="team-card" key={i}>
            <div className="team-card-header">
              <div
                className="team-color-dot"
                style={{ background: teamColors[i % teamColors.length] }}
              />
              <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#5C5C7A', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Equipo {i + 1}
              </span>
              {teams.length > 2 && (
                <button
                  className="remove-team-btn"
                  onClick={() => removeTeam(i)}
                  title="Eliminar equipo"
                >
                  ✕
                </button>
              )}
            </div>

            <label>Nombre del equipo</label>
            <input
              className="team-name-input"
              type="text"
              placeholder={theme.teamPlaceholder(i)}
              value={team.name}
              onChange={(e) => updateTeamName(i, e.target.value)}
              maxLength={24}
            />

            <div className="members-section">
              <label>Integrantes</label>
              {team.members.map((member, j) => (
                <div className="member-input" key={j}>
                  <div
                    className="member-number"
                    style={{ background: teamColors[i % teamColors.length] }}
                  >
                    {j + 1}
                  </div>
                  <input
                    type="text"
                    placeholder={`Integrante ${j + 1}`}
                    value={member}
                    onChange={(e) => updateMember(i, j, e.target.value)}
                    maxLength={20}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {error && <p className="validation-msg">⚠️ {error}</p>}

      <div className="setup-actions">
        <button className="btn btn-secondary" onClick={addTeam}>
          + Agregar equipo
        </button>
        <button className="btn btn-primary btn-lg" onClick={handleStart}>
          🚀 ¡Comenzar el juego!
        </button>
      </div>

      <div style={{ marginTop: 32, textAlign: 'center', color: '#5C5C7A', fontSize: '0.9rem' }}>
        <strong>📋 Cómo jugar:</strong> Cada equipo elige una categoría y valor de puntos.
        Tienen <strong>30 segundos</strong> para responder. ¡El equipo con más puntos gana!
      </div>
    </div>
  );
}
