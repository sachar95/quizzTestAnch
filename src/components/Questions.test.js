import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Question from "./Questions";
import { UserResponseContext } from "../context/context";

describe("Question Component", () => {
  const mockUserResponse = [];

  const mockSetUserResponse = jest.fn();

  const mockQuestion = {
    id: 1,
    question: "Sample question",
    options: [
      { id: 1, text: "Option 1" },
      { id: 2, text: "Option 2" },
      { id: 3, text: "Option 3" },
    ],
    correctAnswerId: 3,
  };

  it("renders question text", () => {
    render(
      <UserResponseContext.Provider value={mockUserResponse}>
        <Question data={mockQuestion} setUserResponse={mockSetUserResponse} />
      </UserResponseContext.Provider>
    );
    const questionText = screen.getByText("Sample question");
    expect(questionText).toBeInTheDocument();
  });

  it("renders options", () => {
    render(
      <UserResponseContext.Provider value={mockUserResponse}>
        <Question data={mockQuestion} setUserResponse={mockSetUserResponse} />
      </UserResponseContext.Provider>
    );
    const option1 = screen.getByText("Option 1");
    const option2 = screen.getByText("Option 2");
    const option3 = screen.getByText("Option 3");
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it("handles checkbox changes and setUserResponse", () => {
    render(
      <UserResponseContext.Provider value={mockUserResponse}>
        <Question data={mockQuestion} setUserResponse={mockSetUserResponse} />
      </UserResponseContext.Provider>
    );
    const checkbox = screen.getByTestId("answer-1");
    fireEvent.change(checkbox, { target: { checked: true } });
    fireEvent.click(checkbox);
    expect(mockSetUserResponse).toHaveBeenCalledWith([
      { id: 1, idResponse: 1 },
    ]);
    expect(checkbox).toBeChecked();
  });
});
