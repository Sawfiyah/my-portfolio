import { useState } from "react";
import profilePic from "../assets/profile.jpg";

const puzzleSize = 3;

function shufflePieces() {
  const pieces = Array.from(
    { length: puzzleSize * puzzleSize },
    (_, index) => index,
  );

  for (let index = pieces.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [pieces[index], pieces[randomIndex]] = [pieces[randomIndex], pieces[index]];
  }

  if (pieces.every((piece, index) => piece === index)) {
    [pieces[0], pieces[1]] = [pieces[1], pieces[0]];
  }

  return pieces;
}

function PhotoPuzzle() {
  const [pieces, setPieces] = useState(shufflePieces);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [draggedPiece, setDraggedPiece] = useState(null);
  const [moves, setMoves] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const isPuzzleSolved = pieces.every((piece, index) => piece === index);

  function swapPieces(firstIndex, secondIndex) {
    if (
      isPuzzleSolved ||
      firstIndex === null ||
      secondIndex === null ||
      firstIndex === secondIndex
    ) {
      return;
    }

    setPieces((currentPieces) => {
      const nextPieces = [...currentPieces];
      [nextPieces[firstIndex], nextPieces[secondIndex]] = [
        nextPieces[secondIndex],
        nextPieces[firstIndex],
      ];
      return nextPieces;
    });
    setMoves((currentMoves) => currentMoves + 1);
    setSelectedPiece(null);
  }

  function handlePieceClick(index) {
    if (isPuzzleSolved) {
      return;
    }

    if (selectedPiece === null) {
      setSelectedPiece(index);
      return;
    }

    if (selectedPiece === index) {
      setSelectedPiece(null);
      return;
    }

    swapPieces(selectedPiece, index);
  }

  function restartPuzzle() {
    setPieces(shufflePieces());
    setSelectedPiece(null);
    setDraggedPiece(null);
    setMoves(0);
  }

  return (
    <div className="puzzle-panel">
      <div className="puzzle-heading">
        <div>
          <p className="puzzle-eyebrow">A little about me</p>
          <p className="puzzle-instructions">
            Put my photo back together. Select two pieces to swap, or drag one
            onto another.
          </p>
        </div>
        <button
          type="button"
          className="puzzle-preview-toggle"
          aria-expanded={showPreview}
          onClick={() => setShowPreview((isVisible) => !isVisible)}
        >
          {showPreview ? "Hide photo" : "Photo hint"}
        </button>
      </div>

      {showPreview && (
        <img
          className="puzzle-preview"
          src={profilePic}
          alt="Reference for the photo puzzle"
        />
      )}

      <div
        className={`puzzle-board${isPuzzleSolved ? " is-solved" : ""}`}
        role="group"
        aria-label="Photo jigsaw puzzle"
      >
        {isPuzzleSolved ? (
          <img className="puzzle-solved-image" src={profilePic} alt="Sawfiyah Bagudu" />
        ) : (
          pieces.map((piece, index) => {
            const pieceRow = Math.floor(piece / puzzleSize);
            const pieceColumn = piece % puzzleSize;
            const isInPlace = piece === index;
            const positionRow = Math.floor(index / puzzleSize) + 1;
            const positionColumn = (index % puzzleSize) + 1;

            return (
              <button
                key={piece}
                type="button"
                className={`puzzle-piece${isInPlace ? " is-in-place" : ""}${
                  selectedPiece === index ? " is-selected" : ""
                }`}
                style={{
                  backgroundImage: `url("${profilePic}")`,
                  backgroundPosition: `${pieceColumn * 50}% ${pieceRow * 50}%`,
                }}
                aria-label={`Piece ${piece + 1}, at row ${positionRow}, column ${positionColumn}${isInPlace ? ", in the correct place" : ""}`}
                aria-pressed={selectedPiece === index}
                draggable
                onClick={() => handlePieceClick(index)}
                onDragStart={(event) => {
                  event.dataTransfer.effectAllowed = "move";
                  setDraggedPiece(index);
                }}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => {
                  event.preventDefault();
                  swapPieces(draggedPiece, index);
                  setDraggedPiece(null);
                }}
                onDragEnd={() => setDraggedPiece(null)}
              />
            );
          })
        )}
      </div>

      <div className="puzzle-footer">
        <p className="puzzle-status" aria-live="polite">
          {isPuzzleSolved
            ? `You put it together in ${moves} ${moves === 1 ? "move" : "moves"}!`
            : selectedPiece === null
              ? `${moves} ${moves === 1 ? "move" : "moves"} · Select a piece to start.`
              : "Now select another piece to swap."}
        </p>
        <button
          type="button"
          className="puzzle-reset"
          onClick={restartPuzzle}
        >
          {isPuzzleSolved ? "Play again" : "Shuffle"}
        </button>
      </div>
    </div>
  );
}

export default PhotoPuzzle;
