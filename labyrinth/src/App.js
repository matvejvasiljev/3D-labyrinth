import './App.css';
import { useState, useEffect } from "react"

export default function App() {
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState();

  function MazeLoad() {
    setCanvas(document.getElementsByTagName("canvas")[0])
    setCtx(canvas.getContext("2d", { willReadFrequently: true }))

    let img = document.getElementsByClassName("mazeImage")[0]
    console.log(img);

    ctx.drawImage(img, 0, 0, 40, 86)
  };

  return (
    <div className="main">
      <canvas></canvas>
      <img className="mazeImage" src="Union.svg" alt="" />
    </div>
  );
};

function player() {
  return (
    <img src="" alt="" />
  );
};