import "./PlayBTN.css";

function PlayBTN(props) {
  return (
    <div>
      <p>Press to play sound.</p>
      <button onClick={props.play_audio} className="play_btn">
        Play Audio 1
      </button>
    </div>
  );
}

export default PlayBTN;
