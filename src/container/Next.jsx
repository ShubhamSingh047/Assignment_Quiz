import React from "react";

const Next = ({ page, setPage, setCurrentQus }) => {
  const handleNext = () => {
    setPage((prev) => prev + 1);
    setCurrentQus((prev) => prev + 1);
  };

  return <button onClick={handleNext}>Next</button>;
};

export default Next;
