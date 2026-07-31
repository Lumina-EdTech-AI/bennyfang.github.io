import AboutSection from "./components/AboutSection.js";
import ContactSection from "./components/ContactSection.js";
import ExperienceSection from "./components/ExperienceSection.js";
import HeroSection from "./components/HeroSection.js";
import HighlightsSection from "./components/HighlightsSection.js";

const App = {
  components: {
    AboutSection,
    ContactSection,
    ExperienceSection,
    HeroSection,
    HighlightsSection,
  },
  template: `
    <div class="page">
      <hero-section />
      <about-section />
      <highlights-section />
      <experience-section />
      <contact-section />
    </div>
  `,
};

export default App;
