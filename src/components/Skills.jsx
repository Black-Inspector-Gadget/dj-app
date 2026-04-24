import { Code2, Network, Cpu } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Network size={32} />,
      title: "Handling Ambiguity",
      description: "I specialize in taking loose, high-level business problems and 'engineering them down' into concrete, maintainable technical solutions."
    },
    {
      icon: <Code2 size={32} />,
      title: "Full-Stack Perspective",
      description: "My skills span the physical and digital. I understand how the code I write interacts with the network it travels on and the hardware it lives on."
    },
    {
      icon: <Cpu size={32} />,
      title: "Systems Thinking",
      description: "Beyond just 'fixing things,' I focus on scalability and reliability—maintaining 99.99% uptime and building tools that save hundreds of human hours annually."
    }
  ];

  return (
    <section id="skills" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <h2 className="section-title">Core <span>Competencies</span></h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4rem auto', fontSize: '1.2rem' }}>
          What I bring to the table.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skills.map((skill, index) => (
            <div key={index} className="glass glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ 
                background: 'rgba(237, 194, 60, 0.1)', 
                color: 'var(--accent-color)', 
                padding: '1rem', 
                borderRadius: '12px', 
                marginBottom: '1.5rem' 
              }}>
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{skill.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
