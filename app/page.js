import Image from "next/image";
import PrintButton from "../components/PrintButton";
import { resume } from "../data/resume";

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

export default function Home() {
  const { profile } = resume;

  return (
    <main>
      <header className="topbar screen-only">
        <a className="brand" href="#top">KH.</a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
        <PrintButton />
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">FRONTEND DEVELOPER · CAREER PORTFOLIO</p>
          <h1>{profile.headline}</h1>
          <p className="hero-summary">{profile.summary}</p>

          <div className="contact-list">
            <span>{profile.name}</span>
            <span>{profile.birth}</span>
            <span>{profile.location}</span>
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
          </div>

          <div className="link-row screen-only">
            <ExternalLink href={profile.portfolio}>Portfolio ↗</ExternalLink>
            <ExternalLink href={profile.github}>GitHub ↗</ExternalLink>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-image-wrap">
            <Image src={profile.photo} alt="김하림 프로필" width={300} height={420} priority />
          </div>
          <div className="profile-meta">
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
            <small>{profile.careerLabel}</small>
          </div>
        </div>
      </section>

      <section className="metric-grid">
        {resume.highlights.map((item) => (
          <article className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p>01</p>
          <h2>Core Competencies</h2>
        </div>
        <div className="competency-grid">
          {resume.core.map((item) => (
            <article className="competency-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="experience">
        <div className="section-heading">
          <p>02</p>
          <h2>Work Experience</h2>
        </div>
        <div className="experience-list">
          {resume.experience.map((item) => (
            <article className="experience-item" key={item.company}>
              <div>
                <span>{item.period}</span>
                <h3>{item.company}</h3>
              </div>
              <div>
                <strong>{item.role}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="projects">
        <div className="section-heading">
          <p>03</p>
          <h2>Selected Projects</h2>
        </div>

        <div className="project-list">
          {resume.projects.map((project) => (
            <article className="project-card" key={project.no}>
              <div className="project-index">{project.no}</div>
              <div className="project-content">
                <div className="project-title-row">
                  <div>
                    <span className="period">{project.period}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="tags">
                    {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
                <p className="project-intro">{project.intro}</p>

                {project.impact && (
                  <div className="impact-box">
                    <span>KEY IMPACT</span>
                    <strong>{project.impact.title}</strong>
                    <p>{project.impact.text}</p>
                  </div>
                )}

                <ul>
                  {project.achievements.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="two-column content-section">
        <div>
          <div className="section-heading compact">
            <p>04</p>
            <h2>Tech Stack</h2>
          </div>
          <div className="skill-groups">
            {Object.entries(resume.skills).map(([group, skills]) => (
              <div className="skill-group" key={group}>
                <h3>{group}</h3>
                <div className="tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="section-heading compact">
            <p>05</p>
            <h2>Education</h2>
          </div>
          <div className="education-list">
            {resume.education.map((item) => (
              <article key={item.school}>
                <span>{item.period}</span>
                <h3>{item.school}</h3>
                <p>{item.major}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section about" id="about">
        <div className="section-heading">
          <p>06</p>
          <h2>About Me</h2>
        </div>
        <div className="about-copy">
          {resume.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <footer>
        <div>
          <strong>{profile.name}</strong>
          <span>{profile.role}</span>
        </div>
        <p>Thank you for reading.</p>
      </footer>
    </main>
  );
}
