import { useState } from "react";
import PageFooter from "../components/PageFooter";


const clues = [
  {
    label: "Original Screenshot",
    img: "src/assets/images/SABAKU-NO-GAARA.jpg",
  },
  {
    label: "First Clue",
    img: "src/assets/images/SABAKU-NO-GAARA.jpg",
  },
  {
    label: "Second Clue",
    img: "src/assets/images/SABAKU-NO-GAARA.jpg",
  },
  {
    label: "Title Clue",
    img: "src/assets/images/SABAKU-NO-GAARA.jpg",
    isSensitive: true,
    titleHint: "E_ _ _ _  _ _ _ _", // could be passed as prop
  },
];

export default function GuessTheAnime() {
  const [unlockedClueIndex, setUnlockedClueIndex] = useState(0);
  const [activeClueIndex, setActiveClueIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const [guess, setGuess] = useState("");

  const handleUnlock = (index) => {
    if (index <= unlockedClueIndex + 1) {
      setUnlockedClueIndex(index);
      setActiveClueIndex(index);
    }
  };

  const currentClue = clues[activeClueIndex];

  return (
    <div className="text-white min-vh-100 d-flex flex-column align-items-center p-4">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Guess The Anime</h1>
        <h4>
          Round 1 <span className="badge bg-danger ms-2">Easy</span>
        </h4>
      </div>

      {/* IMAGE CONTAINER */}
      <div
        className="position-relative rounded overflow-hidden shadow"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <img
          src={currentClue.img}
          alt="Clue"
          className={`w-100 ${currentClue.isSensitive && !contentVisible ? "blur" : ""}`}
          style={{ objectFit: "cover", height: "auto" }}
        />
        {currentClue.isSensitive && !contentVisible && (
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <p className="mb-2">Content from this anime may contain nudity.</p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => setContentVisible(true)}
            >
              👁 Show Content
            </button>
          </div>
        )}
      </div>

      {/* CLUE BUTTONS */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
        {clues.map((clue, index) => {
          const isUnlocked = index <= unlockedClueIndex;
          const isActive = index === activeClueIndex;
          return (
            <button
              key={clue.label}
              className={`btn btn-sm ${
                isUnlocked
                  ? isActive
                    ? "btn-danger"
                    : "btn-dark border"
                  : "btn-outline-secondary"
              }`}
              disabled={!isUnlocked && index !== unlockedClueIndex + 1}
              onClick={() => handleUnlock(index)}
            >
              {isUnlocked ? "🔓" : "🔒"}{" "}
              {clue.label.toUpperCase()}
              {isUnlocked && index !== 0 && !isActive ? " UNLOCKED" : ""}
            </button>
          );
        })}
      </div>

      {/* TITLE HINT */}
      {currentClue.titleHint && (
        <h5 className="mt-4">Main title: <span className="text-light">{currentClue.titleHint}</span></h5>
      )}

      {/* GUESS INPUT */}
      <div className="mt-3 d-flex flex-column align-items-center" style={{ maxWidth: "400px", width: "100%" }}>
        <input
          type="text"
          className="form-control text-center bg-dark text-white border border-secondary mb-2"
          placeholder="Type your answer here"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button className="btn btn-danger w-100 fw-bold">GUESS</button>
      </div>

      {/* BACK LINK */}
      <PageFooter />
    </div>
  );
}
