// src/App.jsx
import './App.css';

const projects = [
  {
    id: 1,
    title: 'Tic Tac Toe Tillit',
    description:
      'Juego clásico de Tic Tac Toe desarrollado para practicar lógica básica, manejo del DOM y eventos en JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/al064134-wq/Tictactoe-Tillit',
    demo: 'https://al064134-wq.github.io/Tictactoe-Tillit/',
    highlight: 'Juego interactivo',
  },
  {
    id: 2,
    title: 'Tarea 3: Cheat Sheet',
    description:
      'Hoja de referencia rápida (cheat sheet) con conceptos clave y ejemplos, pensada como apoyo visual para el estudio.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/al064134-wq/Tarea-3-Cheat-sheet',
    demo: 'https://al064134-wq.github.io/Tarea-3-Cheat-sheet/',
    highlight: 'Referencia visual',
  },
  {
    id: 3,
    title: 'Ejercicio: Escapa de Beyoncé',
    description:
      'Mini juego creativo donde el objetivo es escapar de Beyoncé. Ideal para practicar posicionamiento, animaciones y eventos.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/al064134-wq/Ejercicio-Escapa-de-Beyonce',
    demo: 'https://al064134-wq.github.io/Ejercicio-Escapa-de-Beyonce/',
    highlight: 'Juego creativo',
  },
  {
    id: 4,
    title: 'Tarea 2: Mi Red Social JK',
    description:
      'Maqueta de una red social ficticia, enfocada en la estructura de layout, componentes visuales y estilos consistentes.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/al064134-wq/Tarea-2-Mi-Red-SocialJK',
    demo: 'https://al064134-wq.github.io/Tarea-2-Mi-Red-SocialJK/',
    highlight: 'Diseño de interfaz',
  },
];

function App() {
  return (
    <div className="kr-app">
      {/* Header */}
      <header className="kr-header">
        <div className="kr-logo">KR</div>
        <nav className="kr-nav">
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="kr-hero">
        <div className="kr-hero-text">
          <p className="kr-chip">Portafolio estudiantil • Frontend</p>
          <h1>
            Hola, soy <span>Kevin Ruiz Tillit</span>
          </h1>
          <p className="kr-hero-sub">
            Este portafolio reúne algunos de los proyectos que he desarrollado mientras aprendo
            desarrollo web con HTML, CSS y JavaScript.
          </p>
          <div className="kr-hero-actions">
            <a href="#proyectos" className="kr-btn kr-btn-filled">
              Ver proyectos
            </a>
            <a href="#contacto" className="kr-btn kr-btn-outline">
              Contactar
            </a>
          </div>
        </div>

        <div className="kr-hero-card">
          <h2>Perfil rápido</h2>
          <ul>
            <li>🎓 Estudiante de desarrollo web</li>
            <li>💻 Interés en frontend y UX</li>
            <li>🧠 Aprendizaje basado en proyectos</li>
          </ul>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre" className="kr-section">
        <div className="kr-section-header">
          <h2>Sobre mí</h2>
          <p>¿Quién es Kevin y qué está aprendiendo?</p>
        </div>

        <div className="kr-about-grid">
          <div className="kr-about-card">
            <h3>Contexto</h3>
            <p>
              Soy estudiante de programación y actualmente estoy construyendo proyectos con HTML,
              CSS y JavaScript para entender mejor cómo funciona la web desde cero.
            </p>
          </div>
          <div className="kr-about-card">
            <h3>Objetivo</h3>
            <p>
              Mi objetivo es seguir reforzando mis bases en frontend, aprender frameworks modernos
              como React y llegar a desarrollar interfaces cada vez más profesionales.
            </p>
          </div>
          <div className="kr-about-card kr-about-list">
            <h3>En este parcial he trabajado en:</h3>
            <ul>
              <li>✅ Juegos interactivos en JavaScript</li>
              <li>✅ Maquetación de interfaces tipo red social</li>
              <li>✅ Cheat sheets como material de estudio</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="kr-section kr-section-alt">
        <div className="kr-section-header">
          <h2>Proyectos del parcial</h2>
          <p>Una selección de ejercicios y tareas desarrolladas durante el curso.</p>
        </div>

        <div className="kr-timeline">
          {projects.map((project, index) => (
            <article key={project.id} className="kr-timeline-item">
              <div className="kr-timeline-badge">
                <span>{index + 1}</span>
              </div>

              <div className="kr-project-card">
                <div className="kr-project-header">
                  <h3>{project.title}</h3>
                  <span className="kr-pill">{project.highlight}</span>
                </div>

                <p className="kr-project-desc">{project.description}</p>

                <div className="kr-project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="kr-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="kr-project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="kr-btn kr-btn-ghost"
                  >
                    Ver código en GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="kr-btn kr-btn-mini"
                    >
                      Probar programa
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="kr-section">
        <div className="kr-section-header">
          <h2>Contacto</h2>
          <p>Si te interesa el trabajo de Kevin o quieres dejarle feedback.</p>
        </div>

        <div className="kr-contact">
          <div className="kr-contact-card">
            <h3>GitHub</h3>
            <p>
              Aquí puedes ver más detalles de los repositorios y el código completo de cada
              proyecto.
            </p>
            <a
              href="https://github.com/al064134-wq"
              target="_blank"
              rel="noreferrer"
              className="kr-btn kr-btn-filled"
            >
              Ver perfil de GitHub
            </a>
          </div>

          <div className="kr-contact-card">
            <h3>Correo</h3>
            <p>
              Puedes reemplazar este correo por el de Kevin si se va a usar este portafolio de forma
              pública.
            </p>
            <a href="mailto:al064134@uacam.mx" className="kr-link">
              al064134@uacam.mx
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="kr-footer">
        <p>
          Portafolio de <strong>Kevin Ruiz Tillit</strong> · Generado como práctica de desarrollo
          web.
        </p>
      </footer>
    </div>
  );
}

export default App;
