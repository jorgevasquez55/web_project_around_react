import '../index.css';

function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <div className="page">
      <footer className="footer">
        <p className="footer__copyright">
          © {currentYear}. Jorge Vasquez
        </p>
      </footer>
    </div>
  );
}

export default Footer;