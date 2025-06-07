import { useState } from "react";

export default function GuessTheOpening() {
  const [showVideo, setShowVideo] = useState(false);
  const [guess, setGuess] = useState("");

  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column align-items-center p-4">
      <h1 className="fw-bold text-center">Guess The Opening</h1>
      <h4>
        Round 1 <span className="badge bg-danger ms-2">Easy</span>
      </h4>

      {/* AUDIO or VIDEO CLUE */}
      <div className="mt-4" style={{ maxWidth: 800, width: "100%" }}>
        {showVideo ? (
          <video controls className="w-100">
            <source src="/video/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <audio controls className="w-100">
            <source src="/audio/your-audio.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>

      {/* CLUE TOGGLE */}
      <div className="mt-3 d-flex gap-2">
        <button
          className={`btn ${!showVideo ? "btn-danger" : "btn-outline-danger"}`}
          onClick={() => setShowVideo(false)}
        >
          🔊 AUDIO ONLY
        </button>
        <button
          className={`btn ${showVideo ? "btn-danger" : "btn-outline-light"}`}
          onClick={() => setShowVideo(true)}
        >
          🎥 {showVideo ? "VIDEO CLUE" : "UNLOCK VIDEO CLUE"}
        </button>
      </div>

      {/* GUESS INPUT */}
      <div className="mt-4" style={{ maxWidth: 400, width: "100%" }}>
        <input
          type="text"
          className="form-control bg-dark text-white text-center border border-secondary mb-2"
          placeholder="Type your answer here"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button className="btn btn-danger w-100 fw-bold">GUESS</button>
      </div>

      {/* FOOTER */}
      <footer className="mt-auto pt-4 text-center text-muted small">
        <p>© 2025 AniGuessr</p>
        <p>
          <a href="#">About</a> · <a href="#">Support</a> · <a href="#">Suggest</a>
        </p>
      </footer>
    </div>
  );
}
