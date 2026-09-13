import './App.css';

const categories = [
  { icon: '◉', name: 'Todo' },
  { icon: '🎮', name: 'Reviews' },
  { icon: '▤', name: 'Noticias' },
  { icon: '▣', name: 'Lanzamientos' },
  { icon: '▱', name: 'PC' },
  { icon: '◈', name: 'PlayStation' },
  { icon: '◉', name: 'Xbox' },
  { icon: '▥', name: 'Nintendo' },
  { icon: '⚙', name: 'Hardware' },
  { icon: '☷', name: 'Guías' },
];

const latestNews = [
  {
    category: 'PC',
    title: 'Los mejores mods para Skyrim en 2026',
    date: '18 Ene, 2026',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500',
  },
  {
    category: 'PLAYSTATION',
    title: 'State of Play: todos los anuncios del evento',
    date: '17 Ene, 2026',
    image:
      'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500',
  },
  {
    category: 'XBOX',
    title: 'Game Pass suma 5 nuevos títulos este mes',
    date: '16 Ene, 2026',
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500',
  },
  {
    category: 'NINTENDO',
    title: 'Nintendo Switch 2: lo que sabemos hasta ahora',
    date: '15 Ene, 2026',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500',
  },
  {
    category: 'HARDWARE',
    title: 'GeForce RTX 5090: rendimiento y precios filtrados',
    date: '14 Ene, 2026',
    image:
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500',
  },
  {
    category: 'GUÍAS',
    title: 'Guía completa para principiantes',
    date: '13 Ene, 2026',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500',
  },
];

const sideArticles = [
  {
    type: 'NOTICIAS',
    title: 'CD Projekt RED anuncia nuevo proyecto en el universo de The Witcher',
    description:
      'El estudio polaco ha confirmado que ya trabaja en una nueva entrega.',
    date: '20 Ene, 2026',
    comments: 24,
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900',
  },
  {
    type: 'PREVIEW',
    title: 'Avowed: un RPG de mundo abierto con alma clásica',
    description:
      'Hemos podido ver sus primeros minutos y esto es lo que nos ha dejado.',
    date: '20 Ene, 2026',
    comments: 18,
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=900',
  },
  {
    type: 'NOTICIAS',
    title: 'PS6: primeros detalles y posible fecha de lanzamiento',
    description:
      'Filtraciones apuntan a un hardware más potente y una arquitectura renovada.',
    date: '19 Ene, 2026',
    comments: 42,
    image:
      'https://images.unsplash.com/photo-1592840496694-26c035b52bca?w=900',
  },
];

const reviews = [
  {
    title: 'Cyberpunk 2077: Phantom Liberty',
    score: '9.2',
    image:
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=700',
  },
  {
    title: 'Hogwarts Legacy',
    score: '8.7',
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700',
  },
  {
    title: 'Horizon Forbidden West',
    score: '9.5',
    image:
      'https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=700',
  },
  {
    title: 'The Last of Us Part I',
    score: '9.3',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700',
  },
];

export default function App() {
  return (
    <div className="gaming-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="gaming-header">

        <div className="gaming-logo">
          <div className="gaming-logo-symbol">
            ◆
          </div>

          <div>
            <strong>NEXUS</strong>
            <span>GAMING</span>
          </div>
        </div>

        <nav className="gaming-nav">
          <a className="active" href="#">
            Inicio
          </a>
          <a href="#">Reviews</a>
          <a href="#">Noticias</a>
          <a href="#">Lanzamientos</a>
          <a href="#">Hardware</a>
          <a href="#">Guías</a>
        </nav>

        <div className="header-actions">

          <button className="search-button">
            ⌕
          </button>

          <button className="subscribe-button">
            ✉ &nbsp; SUSCRÍBETE
          </button>

        </div>

      </header>

      {/* =========================================
          CATEGORY BAR
      ========================================= */}

      <section className="category-bar">

        {categories.map((category) => (
          <a
            href="#"
            className="category"
            key={category.name}
          >
            <div className="category-icon">
              {category.icon}
            </div>

            <span>{category.name}</span>
          </a>
        ))}

      </section>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <main>

        <section className="main-grid">

          {/* =====================================
              HERO
          ===================================== */}

          <article className="hero-article">

            <div className="hero-image">

              <img
                src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1600"
                alt="Elden Ring"
              />

              <span className="article-badge">
                REVIEW
              </span>

            </div>

            <div className="hero-content">

              <h1>
                Elden Ring: la obra maestra
                <br />
                que sigue definiendo generaciones
              </h1>

              <p>
                Exploración, combate y un mundo que recompensa
                la curiosidad. Analizamos por qué Elden Ring
                se mantiene como uno de los mejores videojuegos
                de la historia.
              </p>

              <div className="article-meta">

                <span>● Marco Rivas</span>
                <span>▣ 22 Ene, 2026</span>
                <span>▧ RPG</span>
                <span>◈ PS5</span>
                <span>◈ Xbox</span>

              </div>

              <div className="score-badge">
                <strong>9.8</strong>
                <span>/10</span>
              </div>

            </div>

          </article>

          {/* =====================================
              SECONDARY ARTICLES
          ===================================== */}

          <section className="secondary-articles">

            {sideArticles.map((article) => (

              <article
                className="secondary-article"
                key={article.title}
              >

                <div className="secondary-image">

                  <img
                    src={article.image}
                    alt={article.title}
                  />

                  <span className="article-badge">
                    {article.type}
                  </span>

                </div>

                <div className="secondary-content">

                  <h2>
                    {article.title}
                  </h2>

                  <p>
                    {article.description}
                  </p>

                  <div className="secondary-meta">

                    <span>
                      ◷ {article.date}
                    </span>

                    <span>
                      ♡ {article.comments}
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </section>

          {/* =====================================
              LATEST NEWS
          ===================================== */}

          <aside className="latest-news">

            <div className="section-heading">

              <span>ACTUALIDAD</span>

              <h2>
                Últimas noticias
              </h2>

            </div>

            <div className="news-list">

              {latestNews.map((news) => (

                <article
                  className="news-item"
                  key={news.title}
                >

                  <img
                    src={news.image}
                    alt={news.title}
                  />

                  <div>

                    <span className="news-category">
                      {news.category}
                    </span>

                    <h3>
                      {news.title}
                    </h3>

                    <time>
                      {news.date}
                    </time>

                  </div>

                </article>

              ))}

            </div>

          </aside>

        </section>

        {/* =========================================
            REVIEWS
        ========================================= */}

        <section className="reviews-section">

          <div className="section-title-row">

            <div>

              <span>ANÁLISIS</span>

              <h2>
                ✦ Reviews destacadas
              </h2>

            </div>

            <a href="#">
              Ver todas →
            </a>

          </div>

          <div className="reviews-grid">

            {reviews.map((review) => (

              <article
                className="review-card"
                key={review.title}
              >

                <div className="review-card-image">

                  <img
                    src={review.image}
                    alt={review.title}
                  />

                  <span>
                    REVIEW
                  </span>

                </div>

                <div className="review-card-content">

                  <h3>
                    {review.title}
                  </h3>

                  <div className="review-card-footer">

                    <strong>
                      {review.score}
                    </strong>

                    <div>
                      ◈　◉　▱
                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =========================================
            NEWSLETTER
        ========================================= */}

        <section className="newsletter">

          <div className="newsletter-icon">
            ✉
          </div>

          <div className="newsletter-content">

            <span>
              NEXUS GAMING
            </span>

            <h2>
              Suscríbete al newsletter
            </h2>

            <p>
              Recibe las últimas noticias, reviews y anuncios
              directamente en tu correo.
            </p>

          </div>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Tu correo electrónico"
            />

            <button>
              →
            </button>

          </form>

        </section>

      </main>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="gaming-footer">

        <div className="footer-logo">
          <div className="gaming-logo-symbol">
            ◆
          </div>

          <div>
            <strong>NEXUS</strong>
            <span>GAMING</span>
          </div>
        </div>

        <nav>
          <a href="#">Inicio</a>
          <a href="#">Reviews</a>
          <a href="#">Noticias</a>
          <a href="#">Lanzamientos</a>
          <a href="#">Hardware</a>
          <a href="#">Guías</a>
        </nav>

        <p>
          Juega. Explora. Descubre.
        </p>

      </footer>

    </div>
  );
}