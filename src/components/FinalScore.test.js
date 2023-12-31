import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FinalScore from "./FinalScore";

describe("FinalScore Component", () => {
  it("renders with the provided final score", () => {
    const finalScoreValue = "40";
    render(<FinalScore finalScore={finalScoreValue} />);

    const finalScoreElement = screen.getByText("Final Score");
    expect(finalScoreElement).toBeInTheDocument();

    const scoreValue = screen.getByText(finalScoreValue);
    expect(scoreValue).toBeInTheDocument();
  });

  it("renders the final score correctly", () => {
    const finalScoreValue = "80";
    render(<FinalScore finalScore={finalScoreValue} />);

    const scoreValue = screen.getByText(finalScoreValue);
    expect(scoreValue).toBeInTheDocument();
  });
});
