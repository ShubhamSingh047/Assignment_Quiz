import React, { useState } from "react";
import Buttons from "./Buttons";
import Questions from "./Questions";
import { data } from "../data/questions";

const QuizContainer = () => {
  const [currentQus, setCurrentQus] = useState(0);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Handle multiple selections
  const handleAnswer = (option) => {
    setSelectedAnswers((prevAnswers) => {
      const currentSelections = prevAnswers[currentQus] || [];
      const isSelected = currentSelections.includes(option);

      const updatedSelections = isSelected
        ? currentSelections.filter((ans) => ans !== option)
        : [...currentSelections, option];

      return { ...prevAnswers, [currentQus]: updatedSelections };
    });
  };

  // Calculate the score on submission
  const handleSubmit = () => {
    let finalScore = 0;

    data.forEach((question, index) => {
      const correctAnswer = [question.ans]; // Wrap answer in array for comparison
      const selected = selectedAnswers[index] || [];

      if (
        correctAnswer.length === selected.length &&
        correctAnswer.every((ans) => selected.includes(ans))
      ) {
        finalScore++;
      }
    });

    setScore(finalScore);
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setCurrentQus(0);
    setScore(0);
    setIsSubmitted(false);
    setPage(1);
    setSelectedAnswers({});
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
        <div>
          <h2>Your final score is: {score}</h2>
          <button onClick={handleRestart}>Restart Quiz</button>{" "}
        </div>
      )}
    </>
  );
};

export default QuizContainer;
