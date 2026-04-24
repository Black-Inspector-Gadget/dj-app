import { ArrowUpRight, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Web App",
      category: "Frontend Architecture & Design",
      description: "A premium, responsive single-page application built with React, Vite, and custom CSS. Designed to showcase a 'dual-threat' engineering background using modern design principles like dark mode, glassmorphism, and custom animations without relying on heavy UI libraries.",
      tags: ["React", "Vite", "Vanilla CSS", "UI/UX Design"],
      link: "#",
      github: "https://github.com/deahjonae/portfolio"
    },
    {
      title: "Workflow Automation Suite",
      category: "Internal Tools",
      description: "Developed comprehensive tools that reduced operational workflows from hours to minutes. Integrated hardware, network, and software systems to maintain 99.99% uptime across global data centers.",
      tags: ["Python", "Go", "Automation", "Infrastructure"],
      link: "#"
    },
    {
      title: "Scalable Tech Solutions",
      category: "Solutions Consulting",
      description: "Translated fragmented business requirements into robust, automated technical implementations for enterprise clients, demonstrating deep analytical rigor.",
      tags: ["System Design", "Cloud Architecture", "Consulting"],
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Greatest <span>Hits</span></h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4rem auto', fontSize: '1.2rem' }}>
          If it involves optimizing a workflow or solving a complex puzzle, I’m in. Here is a mix of my technical achievements.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} className="glass glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <span style={{ color: 'var(--accent-color)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                {project.category}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem' }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ background: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                {project.link && (
                  <a href={project.link} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    Case Study <ArrowUpRight size={16} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
