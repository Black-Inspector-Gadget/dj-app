import { Mail, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="glass glass-card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>
            Ready to turn your "what-if" into an <span className="text-accent">"it’s done"?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            I’ve spent my career automating workflows to save people time. Here is the one manual step left: you picking a time that works. Let’s skip the 20-email thread and get straight to the solution!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://calendar.google.com/calendar/embed?src=c68a1a551719d63813eb6d483eb1609df61363f39e674514ce1b06164d60b6d6%40group.calendar.google.com&ctz=America%2FNew_York" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              <Calendar size={20} /> Schedule a Conversation
            </a>
            <a href="mailto:deah.gooden@gmail.com" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              <Mail size={20} /> Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
