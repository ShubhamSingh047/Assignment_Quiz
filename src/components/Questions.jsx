import React from "react";
import { data } from "../data/questions";

const Questions = ({ currentQus, handleAnswer, selectedAnswers }) => {
  const question = data[currentQus];
  const currentSelections = selectedAnswers[currentQus] || []; // Get selected answers for this question

  return (
    <div>
      <h4>{question.qus}</h4>
      {question.option.map((opt, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              name={`question-${currentQus}`}
              value={opt}
              checked={currentSelections.includes(opt)} // Reflect the selected state
              onChange={() => handleAnswer(opt)} // Toggle selection
            />
            {opt}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Questions;
