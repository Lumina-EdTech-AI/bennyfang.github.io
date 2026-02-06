import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js";

const App = {
  template: `
    <div class="page">
      <header class="hero">
        <nav class="nav">
          <div class="logo">Benny Fang</div>
          <div class="nav-links">
            <a href="#about">About</a>
            <a href="#highlights">Highlights</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div class="hero-grid">
          <div class="hero-content">
            <p class="eyebrow">Developer · University of Toronto Graduate</p>
            <h1>
              Building thoughtful, human-centered digital experiences.
            </h1>
            <p class="lead">
              I am Benny, a developer based in Canada. I am open to new
              opportunities in Vancouver or Toronto and enjoy crafting modern,
              accessible web experiences.
            </p>
            <div class="hero-actions">
              <a class="primary" href="mailto:bfang.01234@gmail.com">Email Me</a>
              <a class="ghost" href="https://www.linkedin.com/in/benny-fang-87479b8b">
                Connect on LinkedIn
              </a>
            </div>
            <div class="hero-meta">
              <div>
                <span>Location</span>
                <strong>Vancouver · Toronto</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Frontend · UX · Design Systems</strong>
              </div>
            </div>
          </div>
          <div class="hero-card">
            <img src="/img/Profile.jpg" alt="Portrait of Benny Fang" />
            <div class="hero-card-info">
              <h2>Welcome to my homepage</h2>
              <p>
                I am passionate about building clear, engaging products that are
                as beautiful as they are functional.
              </p>
              <a href="/cv" class="text-link">View my profile</a>
            </div>
          </div>
        </div>
      </header>

      <section id="about" class="section about">
        <div>
          <p class="section-label">About</p>
          <h2>Blending engineering with thoughtful design.</h2>
          <p>
            With a foundation in computer science and real-world product work, I
            love collaborating with teams to deliver polished, high-impact
            experiences. I value clean code, consistency, and empathy in every
            project.
          </p>
        </div>
        <div class="stats">
          <div class="stat">
            <strong>5+</strong>
            <span>Years exploring web technologies</span>
          </div>
          <div class="stat">
            <strong>10+</strong>
            <span>Projects spanning UX, data, and UI</span>
          </div>
          <div class="stat">
            <strong>3</strong>
            <span>Cities worked in across Canada</span>
          </div>
        </div>
      </section>

      <section id="highlights" class="section highlights">
        <div class="section-header">
          <p class="section-label">Highlights</p>
          <h2>What I bring to a team</h2>
        </div>
        <div class="card-grid">
          <article class="card">
            <h3>Product-minded development</h3>
            <p>
              I connect engineering decisions with user outcomes, aligning
              solutions with real customer needs.
            </p>
          </article>
          <article class="card">
            <h3>Design systems advocate</h3>
            <p>
              I build reusable, accessible UI components that scale across teams
              and platforms.
            </p>
          </article>
          <article class="card">
            <h3>Collaborative mindset</h3>
            <p>
              I enjoy working cross-functionally with designers, analysts, and
              engineers to deliver delightful products.
            </p>
          </article>
        </div>
      </section>

      <section id="experience" class="section experience">
        <div class="section-header">
          <p class="section-label">Experience</p>
          <h2>Recent focus areas</h2>
        </div>
        <div class="timeline">
          <div class="timeline-item">
            <h3>Front-end Engineering</h3>
            <p>
              Delivering responsive, accessible interfaces with Vue, React, and
              modern CSS.
            </p>
          </div>
          <div class="timeline-item">
            <h3>Data visualization</h3>
            <p>
              Turning complex information into compelling dashboards and insights
              for decision makers.
            </p>
          </div>
          <div class="timeline-item">
            <h3>Growth experimentation</h3>
            <p>
              Partnering with teams to test hypotheses, improve UX, and optimize
              conversion flows.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" class="section contact">
        <div class="contact-card">
          <div>
            <p class="section-label">Contact</p>
            <h2>Let’s build something great.</h2>
            <p>
              Reach out if you’d like to collaborate, share an opportunity, or
              just say hello.
            </p>
          </div>
          <div class="contact-actions">
            <a class="primary" href="mailto:bfang.01234@gmail.com">Email Benny</a>
            <a class="ghost" href="https://www.linkedin.com/in/benny-fang-87479b8b">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
};

createApp(App).mount("#app");
