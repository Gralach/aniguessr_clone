export default function PageFooter() {
  return (
    <div className="text-center mt-5">
      <button className="btn btn-danger px-4 fw-bold">GUESS</button>
      <div className="mt-3">
        <a
          href="/"
          className="text-decoration-none text-warning fw-semibold"
        >
          BACK TO GAMES
        </a>
      </div>

      <footer className="text-center mt-5 text-secondary small">
        <p>© 2025 RPOD WEEBS WIKIA GAME</p>
        <p className="d-flex flex-wrap justify-content-center gap-2">
          <a href="#" className="text-secondary text-decoration-none">
            News
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            About
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            Contact
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            Suggest an anime
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            Anime Database
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            Support us
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            Privacy policy
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            Manage Cookies
          </a>
        </p>
      </footer>
    </div>
  );
}
