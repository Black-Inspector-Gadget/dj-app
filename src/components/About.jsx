import { MapPin, Server, Activity, FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="section-title">My <span>Journey</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              I’ve always been fascinated by how things work—from the granular logic of a math problem to the physical complexity of a robotics rig. 
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              My professional path has taken me from Emory’s medical labs to Google’s global data centers, and currently into the world of Solutions Consulting.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              I believe the best solutions aren't just efficient; they’re elegant and accessible. A dual-threat technical leader who combines deep analytical rigor with a commitment to building diverse, innovative, and responsible technology.
            </p>
            <a href="https://docs.google.com/document/d/1Jf-L3NJAoRv-GRqzm2hK2Zh_3UT5o2Dk0hIRV42qg6c/edit?tab=t.2v03wfw7bf4m" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
              <FileText size={18} /> View Resume
            </a>
          </div>

          <div className="glass glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--bg-color)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <Activity className="text-accent" size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Emory Medical Labs</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Where the analytical rigor began.</p>
              </div>
            </div>
            
            <div style={{ width: '2px', height: '30px', background: 'var(--border-color)', margin: '-1rem 0 -1rem 2.2rem' }}></div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--bg-color)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <Server className="text-accent" size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Google Global Data Centers</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Managing infrastructure at planetary scale.</p>
              </div>
            </div>

            <div style={{ width: '2px', height: '30px', background: 'var(--border-color)', margin: '-1rem 0 -1rem 2.2rem' }}></div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--bg-color)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <MapPin className="text-accent" size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Solutions Consulting</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Translating ambiguity into scalable tech.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
