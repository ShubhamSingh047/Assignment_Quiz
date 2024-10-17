import React, { useState } from "react";
import Buttons from "./Buttons";
import Questions from "./Questions";
import { data } from "../data/questions"; // Import questions data

const QuizContainer = () => {
  const [currentQus, setCurrentQus] = useState(0);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [page, setPage] = useState(1); // Track page navigation
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Track multiple selections per question

  // Handle checkbox selection for multiple answers
  const handleAnswer = (option) => {
    setSelectedAnswers((prevAnswers) => {
      const currentSelections = prevAnswers[currentQus] || [];
      const isSelected = currentSelections.includes(option);

      // Toggle selection: add if not selected, remove if already selected
      const updatedSelections = isSelected
        ? currentSelections.filter((ans) => ans !== option)
        : [...currentSelections, option];

      return {
        ...prevAnswers,
        [currentQus]: updatedSelections,
      };
    });
  };

  const handleSubmit = () => {
    let finalScore = 0;

    // Calculate score by validating answers against correct ones
    data.forEach((question, index) => {
      const correctAnswer = [question.ans]; // Convert single answer to array for comparison
      const selected = selectedAnswers[index] || [];

      // If selected answers match the correct one, increment score
      if (
        correctAnswer.length === selected.length &&
        correctAnswer.every((ans) => selected.includes(ans))
      ) {
        finalScore++;
      }
    });

    setScore(finalScore);
    setIsSubmitted(true); // Display the final score
  };

  return (
    <>
      {!isSubmitted ? (
        <>
          <Questions
            currentQus={currentQus}
            handleAnswer={handleAnswer}
            selectedAnswers={selectedAnswers}
          />
          <Buttons
            currentQus={currentQus}
            setCurrentQus={setCurrentQus}
            page={page}
            setPage={setPage}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <h2>Your final score is: {score}</h2>
      )}
    </>
  );
};

export default QuizContainer;
