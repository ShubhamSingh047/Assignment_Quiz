import React from "react";

const Previous = ({ currentQus, setCurrentQus }) => {
  const handlePrev = () => {
    setCurrentQus((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return <button onClick={handlePrev}>Previous</button>;
};

export default Previous;
