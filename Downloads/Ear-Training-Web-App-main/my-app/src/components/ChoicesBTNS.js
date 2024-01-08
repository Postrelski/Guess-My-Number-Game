import "./Choices.css";
import React, { useState, useEffect } from "react";

const intervals = [
  "Major 2nd",
  "Major 3rd",
  "Perfect 4th",
  "Perfect 5th",
  "Major 6th",
  "Major 7th",
  "Octave",
];

function ChoicesBTNS(props) {
  const [classesArray, setClassesArray] = useState(
    Array(intervals.length).fill("interval_btns")
  );

  useEffect(() => {
    setClassesArray(Array(intervals.length).fill("interval_btns"));
  }, [props.count]);

  function answerChecker(event, index) {
    // finds the interval that was clicked and makes shallow copy of array
    const selectedInterval = intervals[index];
    const updatedClassesArray = [...classesArray];

    // updates the index of the classesArray that refers to the button that was clicked
    if (props.correct_answer === selectedInterval) {
      updatedClassesArray[index] = "interval_btns green";
    } else {
      updatedClassesArray[index] = "interval_btns red";
    }

    // updates the original array and reload component
    setClassesArray(updatedClassesArray);
  }

  return (
    <div>
      <p>Make a choice.</p>
      <div>
        {intervals.map((choice, index) => (
          <button
            key={index}
            onClick={(event) => answerChecker(event, index)}
            className={classesArray[index]}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChoicesBTNS;
