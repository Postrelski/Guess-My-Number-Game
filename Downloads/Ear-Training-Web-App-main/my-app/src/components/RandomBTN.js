import "./RandomBTN.css";

function RandomBTN(props) {
  // Should I use a "dice" icon for this?
  return (
    <div>
      <p>Click here for new interval.</p>
      <button className="random_btn" onClick={props.randomizeHandler}>
        Randomize
      </button>
    </div>
  );
}

export default RandomBTN;
