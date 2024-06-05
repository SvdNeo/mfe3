import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="company-name">Neoito</div>
      <div className="copyright">&copy; {new Date().getFullYear()} Neoito</div>
    </footer>
  );
}

export default Footer; // Make sure to export the Footer component
