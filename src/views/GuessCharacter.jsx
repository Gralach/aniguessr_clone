

const characters = [
  {
    id: 1,
    img: "src/assets/images/SABAKU-NO-GAARA.jpg",
  },
  {
    id: 2,
    img: "src/assets/images/SABAKU-NO-GAARA.jpg",
  },
  {
    id: 3,
    img: "src/assets/images/SABAKU-NO-GAARA.jpg",
  },
  {
    id: 4,
    img: "src/assets/images/SABAKU-NO-GAARA.jpg",
  },
];

export default function GuessTheCharacter() {
  return (
    <div className="text-white bg-dark min-vh-100">
      <div className="container py-5">
        <div className="text-center mb-5">
          <small className="text-muted">RPOD WEEBS WIKIA GAME</small>
          <h1 className="mt-2 fw-bold">Guess The Characters</h1>
          <h4 className="mt-2">
            Round 1 <span className="badge bg-danger">Easy</span>
          </h4>
        </div>

        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {characters.map((char) => (
            <div
              key={char.id}
              className="text-center"
              style={{ width: "180px" }}
            >
              <img
                src={char.img}
                alt={`Character ${char.id}`}
                className="img-fluid rounded mb-3"
                style={{
                  height: "250px",
                  width: "100%",
                  objectFit: "cover",
                  border: "1px solid #444",
                }}
              />
              <input
                type="text"
                className="form-control mb-2 text-center bg-dark text-white border border-secondary"
                placeholder="Character name"
              />
              <input
                type="text"
                className="form-control text-center bg-dark text-white border border-secondary"
                placeholder="Anime title"
              />
            </div>
          ))}
        </div>

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
    </div>
  );
}
