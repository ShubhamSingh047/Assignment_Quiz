import React from "react";
import Next from "../container/Next";
import Previous from "../container/Previous";

const Buttons = ({
  currentQus,
  setCurrentQus,
  page,
  setPage,
  handleSubmit,
}) => {
  const isLastQuestion = currentQus === 3;

  return (
    <div>
      {currentQus > 0 && (
        <Previous
          currentQus={currentQus}
          setCurrentQus={setCurrentQus}
          page={page}
          setPage={setPage} // Sync page with Previous
        />
      )}
      {!isLastQuestion && (
        <Next page={page} setPage={setPage} setCurrentQus={setCurrentQus} />
      )}
      {isLastQuestion && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
};

export default Buttons;
