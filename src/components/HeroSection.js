const HeroSection = {
  template: `
    <header class="hero">
      <nav class="nav">
        <div class="logo">Benny Fang</div>
        <div class="nav-links">
          <a href="#about">About</a>
          <a href="#highlights">Expertise</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div class="hero-grid">
        <div class="hero-content">
          <p class="eyebrow">Senior Software Developer · CTO · AI Integration</p>
          <h1>
            Building AI-powered platforms that scale from idea to impact.
          </h1>
          <p class="lead">
            I am Benny, a full-stack developer and technical leader with 8+
            years of experience delivering cloud-based education and workforce
            solutions for more than 1,000,000 users.
          </p>
          <div class="hero-actions">
            <a class="primary" href="mailto:bfang.01234@gmail.com">Email Me</a>
            <a class="ghost" href="/files/Resume.pdf" target="_blank" rel="noopener">
              View Résumé
            </a>
          </div>
          <div class="hero-meta">
            <div>
              <span>Experience</span>
              <strong>8+ Years</strong>
            </div>
            <div>
              <span>Platform Reach</span>
              <strong>1,000,000+ Users</strong>
            </div>
          </div>
        </div>
        <div class="hero-card">
          <img src="/img/Profile.png" alt="Portrait of Benny Fang" />
          <div class="hero-card-info">
            <h2>Engineering with measurable impact</h2>
            <p>
              Full-stack development, AI integration, scalable architecture,
              and technical leadership across web and mobile products.
            </p>
            <a
              href="https://www.linkedin.com/in/benny-fang-87479b8b"
              class="text-link"
              target="_blank"
              rel="noopener"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
};

export default HeroSection;
