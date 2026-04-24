const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      padding: '3rem 0',
      borderTop: '1px solid var(--border-color)',
      textAlign: 'center',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        <p style={{ fontWeight: 500, fontFamily: 'var(--font-heading)' }}>
          Built with React & Vite. Styled from scratch.
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
          &copy; {year} Deah Jonae Gooden. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
