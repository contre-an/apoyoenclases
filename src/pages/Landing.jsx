import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 'cocina',
    path: '/cocina',
    emoji: '🍳',
    title: 'Cocina',
    subject: 'Matemáticas aplicadas',
    description: 'Aprende geometría calculando perímetros y áreas usando contextos culinarios: pizzas, bandejas, moldes y más.',
    tags: ['Perímetro', 'Área', 'Geometría'],
    color: '#C62828',
    bg: '#fff5f5',
    students: 30,
  },
  {
    id: 'pecuarias',
    path: '/pecuarias',
    emoji: '🐄',
    title: 'Gestión de Empresas Pecuarias',
    subject: 'Matemáticas aplicadas · Zootecnia',
    description: 'Calcula áreas y perímetros de corrales, galpones y potreros usando estándares reales de FEDEGAN, ICA y FAO.',
    tags: ['Ganadería', 'Porcinos', 'Avicultura'],
    color: '#2E7D32',
    bg: '#f1f8f1',
    students: 25,
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      {/* Header */}
      <header className="landing-header">
        <div className="landing-header-inner">
          <div className="landing-logo">
            <span className="landing-logo-icon">🎓</span>
            <div>
              <h1 className="landing-title">Apoyo en Clases</h1>
              <p className="landing-subtitle">Plataforma educativa interactiva</p>
            </div>
          </div>
          <div className="landing-instructor">
            <div className="instructor-avatar">CC</div>
            <div>
              <p className="instructor-label">Instructor</p>
              <p className="instructor-name">Carlos Contreras</p>
            </div>
          </div>
        </div>
      </header>

      {/* Marquee */}
      <div className="marquee-wrapper">
        <span className="marquee-text">
          🎓 Bienvenido a Apoyo en Clases &nbsp;·&nbsp; Instructor: Carlos Contreras &nbsp;·&nbsp;
          📐 Matemáticas Aplicadas &nbsp;·&nbsp; 🐄 Gestión Pecuaria &nbsp;·&nbsp; 🍳 Cocina y Geometría &nbsp;·&nbsp;
          🎓 Bienvenido a Apoyo en Clases &nbsp;·&nbsp; Instructor: Carlos Contreras &nbsp;·&nbsp;
          📐 Matemáticas Aplicadas &nbsp;·&nbsp; 🐄 Gestión Pecuaria &nbsp;·&nbsp; 🍳 Cocina y Geometría &nbsp;·&nbsp;
        </span>
      </div>

      {/* Main content */}
      <main className="landing-main">
        <div className="landing-section-header">
          <h2 className="landing-section-title">Mis clases</h2>
          <p className="landing-section-desc">Selecciona una clase para comenzar el juego de preguntas</p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div
              key={course.id}
              className="course-card"
              style={{ '--card-color': course.color, '--card-bg': course.bg }}
            >
              <div className="course-card-banner" style={{ background: course.color }}>
                <span className="course-card-emoji">{course.emoji}</span>
                <div className="course-card-banner-text">
                  <h3 className="course-card-title">{course.title}</h3>
                  <p className="course-card-subject">{course.subject}</p>
                </div>
              </div>

              <div className="course-card-body">
                <p className="course-card-desc">{course.description}</p>
                <div className="course-card-tags">
                  {course.tags.map((tag) => (
                    <span key={tag} className="course-tag" style={{ borderColor: course.color, color: course.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="course-card-footer">
                <span className="course-students">👥 {course.students} estudiantes</span>
                <button
                  className="course-btn"
                  style={{ background: course.color }}
                  onClick={() => navigate(course.path)}
                >
                  Entrar a la clase →
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="landing-footer">
        <p>© 2025 Apoyo en Clases · Instructor Carlos Contreras · Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
