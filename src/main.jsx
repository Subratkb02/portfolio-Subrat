import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const navigation = ['About', 'Resume', 'Portfolio', 'Contact'];

const projects = [
  { title: 'ResQBeacon', category: 'Embedded systems', icon: '◉', link: 'https://github.com/Subratkb02/ResQBeacon.git', description: 'Smart emergency rescue system with ESP32, LoRa, and GPS.' },
  { title: 'HealthCare Website', category: 'Web development', image: 'project-1.png', link: 'https://github.com/Subratkb02/Health-care-website.git' },
  { title: 'Age Calculator', category: 'Web development', image: 'project-2.png', link: 'https://age-calculator-eight-livid.vercel.app/' },
  { title: 'VR Solar System', category: 'Web development', image: 'project-3.png', link: 'https://github.com/Subratkb02/VR_Solar-system.git' },
  { title: 'Vault', category: 'Web design', image: 'project-4.png', link: 'https://www.figma.com/design/QOY4K7burjo6JFOPQlMvn6/TruEstate?node-id=0-1&t=ya6tWYf4QmN74nvL-1' },
  { title: 'Century Eden', category: 'Web design', image: 'project-5.png', link: 'https://www.figma.com/design/QOY4K7burjo6JFOPQlMvn6/TruEstate?node-id=1-3648&t=ya6tWYf4QmN74nvL-1' },
  { title: 'Brand Landing Page', category: 'Web design', image: 'project-6.png', link: 'https://github.com/Subratkb02/Brand-Website.git' },
  { title: 'Remote Health Monitoring System', category: 'Cloud & IoT', image: 'project-7.png', link: 'https://github.com/Subratkb02/Remote-health-monitoring-system.git' },
  { title: 'Banking Management System', category: 'Other', image: 'project-8.png', link: 'https://github.com/Subratkb02/Banking_management_system.git' },
  { title: 'S3 Cloud Image Uploader', category: 'Cloud & IoT', image: 'project-9.png', link: 'https://github.com/Subratkb02/Cloud_image_uploader.git' },
  { title: 'Real-Time Tracker', category: 'Other', image: 'project-10.png', link: 'https://github.com/Subratkb02/Real-Time-Tracker.git' },
];

const techStack = [
  ['C', 'c-original.svg'], ['C++', 'cplusplus-original.svg'], ['Python', 'python.svg'], ['SQL', 'database.svg'],
  ['JavaScript', 'javascript-original.svg'], ['HTML5', 'html5-original.svg'], ['CSS3', 'css3-original.svg'], ['Flask', 'flask-original.svg', true],
  ['REST APIs', 'api.svg'], ['MQTT', 'mqtt.svg'], ['AWS IoT Core', 'amazonwebservices-original-wordmark.svg', true], ['AWS DynamoDB', 'amazonwebservices-original-wordmark.svg', true],
  ['Amazon S3', 'amazonwebservices-original-wordmark.svg', true], ['Git', 'git-original.svg'], ['GitHub', 'github-original.svg', true], ['MySQL', 'mysql-original.svg'],
  ['PostgreSQL', 'postgresql-original.svg'], ['DynamoDB', 'amazonwebservices-original-wordmark.svg', true], ['React', 'react-original.svg'], ['Tailwind CSS', 'tailwindcss-original.svg'],
  ['Jupyter Notebook', 'jupyter-original.svg'], ['Pandas', 'pandas-original.svg'], ['Matplotlib', 'matplotlib-original.svg'], ['Arduino IDE', 'arduino-original.svg'],
];

function SectionTitle({ eyebrow, title, copy }) {
  return <header className="section-heading"><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</header>;
}

function App() {
  const [page, setPage] = useState('About');
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState('All');
  const [submitted, setSubmitted] = useState(false);
  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const visibleProjects = category === 'All' ? projects : projects.filter((project) => project.category === category);

  const changePage = (nextPage) => {
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app" data-theme={theme}>
      <main className="shell">
        <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
          <div className="profile-top">
            <img className="avatar" src="/images/my-avatar.png" alt="Subrat Kumar Behera" />
            <div><p className="eyebrow">Portfolio</p><h1>Subrat Kumar<br />Behera</h1><p className="role">Software &amp; Embedded Systems Developer</p></div>
            <button className="mobile-profile-toggle" aria-label="Toggle contact details" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '−' : '+'}</button>
          </div>

          <div className="profile-details">
            <div className="contact-row"><b>✉</b><div><span>Email</span><a href="mailto:subrat.kbehera02@gmail.com">subrat.kbehera02@gmail.com</a></div></div>
            <div className="contact-row"><b>⌕</b><div><span>Phone</span><a href="tel:+917750010953">+91 7750010953</a></div></div>
            <div className="contact-row"><b>⌖</b><div><span>Location</span><p>Pune, Maharashtra, India</p></div></div>
            <div className="social-links">
              <a href="https://github.com/Subratkb02" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/subratkb02/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://codolio.com/profile/Subratkb02" target="_blank" rel="noreferrer">Codolio</a>
            </div>
          </div>
        </aside>

        <section className="content-panel">
          <nav className="topbar" aria-label="Primary navigation">
            <div className="nav-links">{navigation.map((item) => <button key={item} className={page === item ? 'active' : ''} onClick={() => changePage(item)}>{item}</button>)}</div>
            <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle colour theme"><span>{theme === 'dark' ? '☼' : '☾'}</span><em>{theme === 'dark' ? 'Light' : 'Dark'}</em></button>
          </nav>

          {page === 'About' && <section className="page about-page">
            <div className="hero">
              <p className="eyebrow">Hello, I’m Subrat</p>
              <h2>Building dependable systems from <i>device</i> to <i>dashboard.</i></h2>
              <p className="hero-copy">An Electronics and Telecommunication Engineering student at Army Institute of Technology, Pune, building web, cloud, and embedded systems with a focus on real-world impact.</p>
              <div className="hero-actions"><button className="primary-button" onClick={() => changePage('Portfolio')}>Explore my work <span>↗</span></button><button className="text-button" onClick={() => changePage('Contact')}>Get in touch</button></div>
              <div className="quick-facts"><div><strong>9.3</strong><span>CGPA / 10.0</span></div><div><strong>600+</strong><span>DSA problems solved</span></div><div><strong>2026</strong><span>Expected graduation</span></div></div>
            </div>

            <div className="intro-grid">
              <article className="intro-card intro-card-wide"><p className="card-label">Profile</p><h3>Software development with an embedded-systems mindset.</h3><p>I work with C/C++, Python, Flask, React, REST APIs, MQTT, AWS IoT Core, and DynamoDB. Alongside frontend development and UX research, I enjoy making real-time device data clear and useful.</p></article>
              <article className="intro-card accent-card"><p className="card-label">Now focused on</p><h3>IoT, cloud telemetry &amp; full-stack systems.</h3><p>ESP32 firmware, AWS IoT Core, and data-rich React dashboards.</p></article>
            </div>

            <section className="capabilities"><SectionTitle eyebrow="What I do" title="Where I contribute" /><div className="capability-grid">
              <article><span>01</span><h3>Embedded &amp; IoT</h3><p>ESP32 firmware, sensor data, LoRa, MQTT, GPS, and real-time event handling.</p></article>
              <article><span>02</span><h3>Backend &amp; Cloud</h3><p>Flask REST APIs, AWS IoT Core, DynamoDB, Amazon S3, and reliable device communication.</p></article>
              <article><span>03</span><h3>Frontend Development</h3><p>Responsive interfaces built with React, JavaScript, HTML, CSS, and Tailwind CSS.</p></article>
              <article><span>04</span><h3>Design &amp; Research</h3><p>Visual design and UX research experience through digital property and brand projects.</p></article>
            </div></section>
          </section>}

          {page === 'Resume' && <section className="page resume-page">
            <SectionTitle eyebrow="Resume" title="Education, experience &amp; technical work" copy="A concise view of my academic journey, selected work, and hands-on engineering experience." />
            <div className="resume-columns">
              <div>
                <section className="resume-block"><h3>Education</h3><div className="timeline">
                  <article><span>Sep 2022 — Jun 2026</span><h4>Army Institute of Technology, Pune</h4><p>B.E., Electronics and Telecommunication Engineering</p><strong>CGPA: 9.3 / 10.0 (till 7th semester)</strong></article>
                  <article><span>Apr 2020 — Mar 2021</span><h4>Kendriya Vidyalaya Gopalpur Military Station</h4><p>Senior Secondary (CBSE), Ganjam, Odisha</p><strong>95%</strong></article>
                </div></section>
                <section className="resume-block"><h3>Experience &amp; leadership</h3><div className="timeline">
                  <article><span>Jun 2024 — Jun 2025</span><h4>Secretary · Fine Arts Club, AIT</h4><p>Led 30-person cross-functional teams and managed budgeting, cost analysis, vendor comparisons, logistics, design, and promotion.</p></article>
                  <article><span>Apr 2024 — May 2024</span><h4>Graphic Designer Intern · TruEstate</h4><p>Designed 10+ visuals for brand visibility and contributed UX research for Vault and Century Eden.</p></article>
                  <article><span>Jun 2024 — Jul 2024</span><h4>Web Developer Intern · Prasunet Company</h4><p>Remote internship experience retained from the existing portfolio.</p></article>
                </div></section>
              </div>
              <div>
                <section className="resume-block"><h3>Selected projects</h3><div className="project-notes">
                  <article><p className="project-tag">EMBEDDED SYSTEMS</p><h4>ResQBeacon — Smart Emergency Rescue System</h4><p>Developed modular ESP32 firmware for sensor collection, emergency-event processing, LoRa packets, GPS parsing, GPIO interrupts, and SPI/I2C communication. Tested with Arduino IDE, Serial Monitor, and Wokwi.</p><a href="https://github.com/Subratkb02/ResQBeacon.git" target="_blank" rel="noreferrer">Source code ↗</a></article>
                  <article><p className="project-tag">CLOUD &amp; IOT</p><h4>Remote Health Monitoring System</h4><p>Built encrypted physiological-data telemetry to AWS IoT Core through MQTT, Flask REST APIs, DynamoDB health records, and a React dashboard for live and historical patient data.</p><a href="https://github.com/Subratkb02/Remote-health-monitoring-system.git" target="_blank" rel="noreferrer">Source code ↗</a></article>
                </div></section>
                <section className="resume-block"><h3>Open source &amp; awards</h3><div className="achievement-list"><p><b>Hacktoberfest 2024 &amp; 2025 Contributor</b>Merged pull requests with code improvements and bug fixes across open-source projects.</p><p><b>EY Techathon 5.0</b>Round 2 qualifier for a tech-driven real-world solution.</p><p><b>Scholarships</b>Unnati Ekam, Prime Minister Scholarship Scheme (PMSS), and Open Merit Scholarship recipient.</p></div></section>
              </div>
            </div>
            <section className="skills-block"><SectionTitle eyebrow="Toolbox" title="Technical skills" /><div className="tech-grid">{techStack.map(([name, icon, light]) => <div className="tech-card" key={name}><img className={light ? 'icon-light' : ''} src={`/images/tech/${icon}`} alt="" /><span>{name}</span></div>)}</div><div className="coursework"><p><b>Coursework</b>Object-Oriented Programming, Computer Networks, Operating Systems, Database Management Systems</p><p><b>Problem solving</b>600+ DSA/coding problems solved across multiple online coding platforms</p></div></section>
            <a className="resume-download" href="https://drive.google.com/drive/folders/1dnp1-5EuyHlgknenBKh9-2JL6Lq62_aV" target="_blank" rel="noreferrer">Download résumé <span>↓</span></a>
          </section>}

          {page === 'Portfolio' && <section className="page portfolio-page">
            <SectionTitle eyebrow="Portfolio" title="A selection of things I’ve built" copy="Projects across embedded systems, cloud, web development, and digital product design." />
            <div className="filter-row" aria-label="Project filters">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div>
            <div className="project-grid">{visibleProjects.map((project) => <a className="project-card" key={project.title} href={project.link} target="_blank" rel="noreferrer"><div className={`project-visual ${project.image ? '' : 'project-placeholder'}`}>{project.image ? <img src={`/images/${project.image}`} alt="" /> : <span>{project.icon}</span>}<i>View project ↗</i></div><div><p>{project.category}</p><h3>{project.title}</h3>{project.description && <small>{project.description}</small>}</div></a>)}</div>
          </section>}

          {page === 'Contact' && <section className="page contact-page">
            <SectionTitle eyebrow="Contact" title="Let’s build something useful" copy="Have a role, project, or collaboration in mind? I would be glad to connect." />
            <div className="contact-layout"><div className="contact-intro"><h3>Reach out directly.</h3><a href="mailto:subrat.kbehera02@gmail.com">subrat.kbehera02@gmail.com</a><a href="tel:+917750010953">+91 7750010953</a><p>Pune, Maharashtra, India</p><div className="contact-socials"><a href="https://www.linkedin.com/in/subratkb02/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Subratkb02" target="_blank" rel="noreferrer">GitHub ↗</a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><label>Full name<input required name="name" placeholder="Your name" /></label><label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows="5" placeholder="Tell me about your project" /></label><button className="primary-button" type="submit">Send message <span>↗</span></button>{submitted && <p className="form-message">Thanks — your message is ready to send. Please email me directly to continue.</p>}</form></div>
          </section>}
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
