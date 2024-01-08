import { useState } from "react";
import "./App.css";
import Major_2nd from "./piano_Intervals/Major_2nd.wav";
import Major_3rd from "./piano_Intervals/Major_3rd.wav";
import Perfect_4th from "./piano_Intervals/Perfect_4th.wav";
import Perfect_5th from "./piano_Intervals/Perfect_5th.wav";
import Major_6th from "./piano_Intervals/Major_6th.wav";
import Major_7th from "./piano_Intervals/Major_7th.wav";
import Octave from "./piano_Intervals/Octave.wav";
import ChoicesBTNS from "./components/ChoicesBTNS";
import PlayBTN from "./components/PlayBTN";
import RandomBTN from "./components/RandomBTN";
import Header from "./components/Header";

const toneArray = [
  { address: new Audio(Major_2nd), tone: "Major 2nd" },
  { address: new Audio(Major_3rd), tone: "Major 3rd" },
  { address: new Audio(Perfect_4th), tone: "Perfect 4th" },
  { address: new Audio(Perfect_5th), tone: "Perfect 5th" },
  { address: new Audio(Major_6th), tone: "Major 6th" },
  { address: new Audio(Major_7th), tone: "Major 7th" },
  { address: new Audio(Octave), tone: "Octave" },
];

function App() {
  const [rndNumber, SetRndNumber] = useState(
    Math.floor(Math.floor(Math.random() * 7))
  );

  const [count, SetCount] = useState(0);
  console.log(rndNumber);

  function randomizeHandler() {
    SetRndNumber(Math.floor(Math.random() * 7));
    SetCount((prevCount) => prevCount + 1);
  }

  const playAudio = () => {
    const audio = toneArray[rndNumber].address;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="main_section">
      <Header />
      <RandomBTN randomizeHandler={randomizeHandler} />
      <PlayBTN play_audio={playAudio} />
      <ChoicesBTNS correct_answer={toneArray[rndNumber].tone} count={count} />
    </div>
  );
}

export default App;
