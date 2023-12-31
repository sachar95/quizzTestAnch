import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Footer from "./Footer";
import { UserResponseContext } from "../context/context";

describe("Footer Component", () => {
  const mockSetIndex = jest.fn();
  const mockCalculateFinalScore = jest.fn();
  const mockQuestions = [
    { id: 1, question: "Question 1", options: [] },
    { id: 2, question: "Question 2", options: [] },
    { id: 3, question: "Question 3", options: [] },
  ];

  beforeEach(() => {
    mockSetIndex.mockClear();
  });

  it("renders previous and next buttons", () => {
    render(
      <Footer
        questions={mockQuestions}
        setIndex={mockSetIndex}
        currentIndex={1}
        dataLength={3}
      />
    );
    const previousButton = screen.getByText("previous");
    const nextButton = screen.getByText("next");

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
  it("renders submit button when user getting in last question", () => {
    const userResponse = [{ id: 5, idResponse: 1 }];
    render(
      <UserResponseContext.Provider value={userResponse}>
        <Footer
          calculateFinalScore={mockCalculateFinalScore}
          questions={mockQuestions}
          setIndex={mockSetIndex}
          currentIndex={4}
          dataLength={5}
        />
      </UserResponseContext.Provider>
    );
    const submitButton = screen.getByText("submit");
    expect(submitButton).toBeInTheDocument();
  });

  it('calls setIndex with status "previous" when previous button is clicked', () => {
    render(
      <Footer
        questions={mockQuestions}
        setIndex={mockSetIndex}
        currentIndex={1}
        dataLength={5}
      />
    );
    const previousButton = screen.getByText("previous");
    fireEvent.click(previousButton);

    expect(mockSetIndex).toHaveBeenCalledWith("previous");
  });

  it('calls setIndex with status "next" when next button is clicked and enabled', () => {
    const userResponse = [{ id: 2, idResponse: 1 }];
    render(
      <UserResponseContext.Provider value={userResponse}>
        <Footer
          questions={mockQuestions}
          setIndex={mockSetIndex}
          currentIndex={1}
          dataLength={5}
        />
      </UserResponseContext.Provider>
    );
    const nextButton = screen.getByText("next");
    console.log(nextButton);
    fireEvent.click(nextButton);

    expect(mockSetIndex).toHaveBeenCalledWith("next");
  });

  it("calls handleSubmit function when submit button is clicked", () => {
    const userResponse = [{ id: 5, idResponse: 1 }];
    render(
      <UserResponseContext.Provider value={userResponse}>
        <Footer
          calculateFinalScore={mockCalculateFinalScore}
          questions={mockQuestions}
          setIndex={mockSetIndex}
          currentIndex={4}
          dataLength={5}
        />
      </UserResponseContext.Provider>
    );
    const submitButton = screen.getByText("submit");
    fireEvent.click(submitButton);

    expect(mockCalculateFinalScore).toHaveBeenCalled();
  });
});
