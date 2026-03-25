export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <p>Designed &amp; Built by Adam Olson</p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
