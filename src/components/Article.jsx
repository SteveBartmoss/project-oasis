
import './GameArticle.css';

const article = {
  type: 'review',
  category: 'REVIEW',
  game: 'ELDEN RING',
  title: 'La obra maestra que sigue definiendo generaciones',
  subtitle:
    'Exploración, combate y un mundo que recompensa la curiosidad. Una experiencia que demuestra por qué FromSoftware sigue marcando el camino.',
  author: 'Marco Rivas',
  date: '22 Enero, 2026',
  readingTime: '8 min de lectura',
  image:
    'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1800',
  score: 9.8,
  developer: 'FromSoftware',
  platforms: ['PC', 'PlayStation 5', 'Xbox Series'],
  tags: ['RPG', 'Soulslike', 'Open World'],
};

const sections = [
  {
    title: 'Un mundo que invita a perderse',
    text: `Explorar las Tierras Intermedias es una experiencia
    que pocas veces se siente repetitiva. Cada rincón,
    cada estructura y cada enemigo parecen formar parte
    de una historia que el jugador debe descubrir por sí mismo.`,
  },
  {
    title: 'Combate y exploración',
    text: `El sistema de combate continúa siendo uno de los
    pilares fundamentales. La variedad de armas, builds
    y estilos de juego permite experimentar constantemente
    con nuevas estrategias.`,
  },
  {
    title: 'Una experiencia que permanece',
    text: `Elden Ring no es solamente un videojuego difícil.
    Es una aventura que recompensa la paciencia,
    la observación y la curiosidad.`,
  },
];

export default function GameArticle() {
  const isReview = article.type === 'review';

  return (
    <div className="game-article-page">

      <header className="article-breadcrumb">
        <a href="/">Nexus Gaming</a>
        <span>/</span>
        <a href="/reviews">Reviews</a>
        <span>/</span>
        <span>{article.game}</span>
      </header>

      {/* HERO */}

      <section className="article-hero">

        <img
          className="article-hero-image"
          src={article.image}
          alt={article.game}
        />

        <div className="article-hero-overlay" />

        <div className="article-hero-content">

          <span className="article-category">
            {article.category}
          </span>

          <h1>{article.game}</h1>

          <h2>{article.title}</h2>

          <p>{article.subtitle}</p>

          <div className="article-author">

            <div className="author-avatar">
              MR
            </div>

            <div>
              <strong>{article.author}</strong>
              <span>
                {article.date} · {article.readingTime}
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* ARTICLE BODY */}

      <main className="article-layout">

        <article className="article-body">

          <div className="article-introduction">
            <span className="article-dropcap">
              E
            </span>

            lden Ring representa una de las experiencias
            más ambiciosas del género RPG moderno.
            Un mundo abierto donde el descubrimiento
            es tan importante como el combate.
          </div>

          {sections.map((section) => (
            <section
              className="article-section"
              key={section.title}
            >
              <h2>{section.title}</h2>

              <p>{section.text}</p>
            </section>
          ))}

          <div className="article-verdict">

            <span>VEREDICTO NEXUS</span>

            <h2>
              Una aventura que merece ser experimentada.
            </h2>

            <p>
              Elden Ring consigue transformar la exploración
              en una recompensa constante. Una referencia
              imprescindible para los amantes del RPG.
            </p>

          </div>

          <div className="article-tags">
            {article.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>

        </article>

        {/* SIDEBAR */}

        <aside className="article-sidebar">

          {isReview && (
            <div className="review-score-panel">

              <span>REVIEW SCORE</span>

              <strong>{article.score}</strong>

              <small>/ 10</small>

              <div className="score-line" />

              <p>
                Excelente
              </p>

            </div>
          )}

          <div className="game-info-panel">

            <span>GAME INFO</span>

            <h3>{article.game}</h3>

            <div className="game-info-row">
              <span>Desarrollador</span>
              <strong>{article.developer}</strong>
            </div>

            <div className="game-info-row">
              <span>Plataformas</span>
              <strong>{article.platforms.join(', ')}</strong>
            </div>

            <div className="game-info-row">
              <span>Género</span>
              <strong>{article.tags.join(', ')}</strong>
            </div>

          </div>

          <div className="article-share-panel">

            <span>COMPARTIR ARTÍCULO</span>

            <div>
              <button>𝕏</button>
              <button>f</button>
              <button>↗</button>
            </div>

          </div>

        </aside>

      </main>

    </div>
  );
}
