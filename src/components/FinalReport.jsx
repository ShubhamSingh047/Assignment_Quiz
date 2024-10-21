import { useState, useEffect } from "react";

const FinalReport = (props) => {
  const { score, handleRestart, selectedAnswers, data } = props;
  const [final, setFinal] = useState({});

  useEffect(() => {
    if (selectedAnswers && data) handleFinalData();
  }, [selectedAnswers, data]);

  const handleFinalData = () => {
    const newData = {};
    for (let i = 0; i < data.length; i++) {
      if (selectedAnswers.hasOwnProperty(i)) {
        // Check if the selected answer exists for the index
        newData[data[i].qus] = {
          question: data[i].qus,
          selectedOption: selectedAnswers[i] || [],
          correctAns: Array.isArray(data[i].ans)
            ? data[i].ans
            : [data[i].ans], // Ensure correct answer is an array
        };
      }
    }
    setFinal(newData); // Set final data once
  };

  return (
    <div>
      <h2>Your final score is: {score}</h2>
      <h3>Answers Summary:</h3>
      <ul>
        {Object.entries(final).map(([question, details]) => (
          <li key={question}>
            <strong>{details.question}</strong>
            <br />
            Your answer:{" "}
            {details.selectedOption.join(", ") || "No answer selected"}
            <br />
            Correct answer: {details.correctAns.join(", ")}
          </li>
        ))}
      </ul>
      <button onClick={handleRestart}>Restart Quiz</button>
    </div>
  );
};

export default FinalReport;
