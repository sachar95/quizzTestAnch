import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders initial question number correctly", () => {
    render(<App />);
    const initialQuestionNumber = screen.getByText(/questions number 1/i);
    expect(initialQuestionNumber).toBeInTheDocument();
  });

  it("renders initial content correctly", () => {
    render(<App />);

    const questionNumberElement = screen.getByText(/questions number 1/i);
    expect(questionNumberElement).toBeInTheDocument();

    const questionComponent = screen.getByTestId("question-component");
    expect(questionComponent).toBeInTheDocument();

    const footerComponent = screen.getByTestId("footer-component");
    expect(footerComponent).toBeInTheDocument();
  });
});
