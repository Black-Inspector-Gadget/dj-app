import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '500px', height: '500px',
        background: 'var(--accent-color)',
        filter: 'blur(150px)', opacity: 0.15,
        borderRadius: '50%', zIndex: -1
      }}></div>

      <div className="container animate-fade-in">
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--bg-surface)', borderRadius: '20px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
            <Terminal size={16} className="text-accent" />
            <span style={{ fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
            Solutions-oriented <br/>
            <span className="text-accent">Engineer.</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
            Over a decade of experience spanning Google’s global infrastructure and full-stack internal tool development. Translating high-ambiguity environments into scalable, automated technical solutions.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
