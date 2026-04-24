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

      <div className="container animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div style={{ maxWidth: '600px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--bg-surface)', borderRadius: '20px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
            <Terminal size={16} className="text-accent" />
            <span style={{ fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
            Solutions-oriented <br/>
            <span className="text-accent">Engineer.</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.8 }}>
            Solutions-oriented Engineer with over a decade of experience spanning Google’s global infrastructure and full-stack internal tool development. Expert at navigating high-ambiguity environments to translate fragmented business requirements into scalable, automated technical solutions. Proven track record of reducing operational workflows from hours to minutes and managing the full lifecycle of hardware, network, and software integration. A dual-threat technical leader who combines deep analytical rigor with a commitment to building diverse, innovative, and responsible technology.
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

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '100%',
            maxWidth: '400px',
            aspectRatio: '1/1',
            borderRadius: '2rem',
            overflow: 'hidden',
            border: '2px solid var(--border-color)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            position: 'relative'
          }}>
            <img 
              src={`${import.meta.env.BASE_URL}profile.jpg`} 
              alt="Deah Jonae Gooden" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/400x400/1e293b/edc23c?text=Add+profile.jpg+to+public+folder";
              }}
            />
          </div>
          {/* Decorative element */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            right: '10%',
            background: 'var(--bg-surface)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--border-color)',
            padding: '1rem 1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <p style={{ margin: 0, fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
              10+ Years <span className="text-accent">Experience</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
