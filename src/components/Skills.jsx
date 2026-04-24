import { useState } from 'react';
import { Code2, Network, Cpu, ChevronDown, ChevronUp, Award } from 'lucide-react';

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const coreCompetencies = [
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

  const comprehensiveSkills = [
    {
      category: "Software Engineering & Development",
      skills: ["Python", "C++", "Javascript", "Assembly (MIPS)", "Objective C", "Fortran 90", "HTML", "Google App Script", "Data Structures", "Algorithms", "Pseudocode", "SDLC", "Git", "Version Control"]
    },
    {
      category: "Infrastructure, Systems & Hardware",
      skills: ["Computer Architecture", "Circuit Analysis", "Digital Logic Design", "FPGA Development", "VLSI Design", "Verilog", "VHDL", "Robotics", "Embedded Systems Design", "Linux/Unix Administration", "Windows Server", "Security Management", "Hardware Troubleshooting", "Network Engineering", "HTTP/HTTPS", "Google Cloud Platform", "Raspberry Pi", "Arduino"]
    },
    {
      category: "AI, Data & Mathematics",
      skills: ["Advanced Engineering Math", "Linear & Abstract Algebra", "Differential Equations", "Discrete Math", "Multivariable Calculus", "Real Analysis", "Probability & Statistics", "Numerical Analysis", "Complex Variables", "Data Analysis", "Scientific Computing", "MATLAB", "Natural Language Processing (NLP)", "Generative AI", "AI Agents", "Responsible AI", "GPT-4", "SQL"]
    },
    {
      category: "Solutions Consulting & Strategy",
      skills: ["Solution Scoping", "System Solutioning", "Structured Discovery", "Business Case Development", "Pipeline Management", "User Advocacy", "Process Design", "Root Cause Analysis", "Rapid Prototyping", "Web Analytics", "UX/UI Design", "CMS"]
    },
    {
      category: "Project & Operations Management",
      skills: ["Agile Methodologies", "Waterfall", "Project Management Life Cycle", "Iterative Improvement", "Operations Management", "Configuration Management", "Quality Assurance", "Risk Mitigation", "Change Management", "Process Ownership", "Stakeholder Management", "Cross-Functional Collaboration", "User Enablement"]
    },
    {
      category: "Leadership & Communication",
      skills: ["Brand Ambassadorship", "Public Speaking", "Technical Communication", "Technical Writing", "Technical Documentation", "Talent Acquisition", "Curriculum Development", "Knowledge Management", "Interpersonal Communications", "Customer Support"]
    }
  ];

  return (
    <section id="skills" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <h2 className="section-title">Core <span>Competencies</span></h2>
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-primary)', 
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: '1.5rem',
          letterSpacing: '0.05em',
          maxWidth: '600px', 
          margin: '0 auto 4rem auto' 
        }}>
          What I bring to the table.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {coreCompetencies.map((skill, index) => (
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

        {/* Comprehensive Skills Accordion */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Comprehensive <span>Toolkit</span></h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            A detailed breakdown of my technical proficiencies, methodologies, and analytical skills.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {comprehensiveSkills.map((category, index) => (
              <div key={index} style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-color)' }}>
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '1.5rem', 
                    background: 'transparent', 
                    border: 'none', 
                    color: 'var(--text-primary)', 
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  {category.category}
                  {openIndex === index ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-accent" />}
                </button>
                
                {openIndex === index && (
                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {category.skills.map((skill, sIndex) => (
                      <span key={sIndex} style={{ 
                        background: 'var(--bg-surface-hover)', 
                        border: '1px solid var(--border-color)', 
                        padding: '0.4rem 0.8rem', 
                        borderRadius: '20px', 
                        fontSize: '0.9rem', 
                        color: 'var(--text-secondary)' 
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <a href="https://www.linkedin.com/in/deah-jonae-g-a3a79b59/details/certifications/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
              <Award size={18} /> View My Certifications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
