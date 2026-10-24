
import { useState } from "react";
import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  OctagonAlert,
} from "lucide-react";
const  RobotControls = () => {
  const [mode, setMode] = useState("Manual");
  const [lastAction, setLastAction] = useState("None");
  const [stopped, setStopped] = useState(false);

  function moveRobot(direction) {
    setLastAction(direction);
    setStopped(false);
  }

  function stopRobot() {
    setStopped(true);
    setLastAction("Emergency stop");
  }

  const buttonClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-slate-600 bg-slate-800 text-white shadow-lg transition hover:bg-slate-700";

  return (
    <>
      <div className="absolute right-4 top-4 flex rounded-full border border-slate-700 bg-slate-900/95 p-1 shadow-lg">
        {["Auto", "Manual"].map((item) => (
          <button
            key={item}
            onClick={() => setMode(item)}
            className={`rounded-full px-4 py-2 text-sm ${
              mode === item
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col items-center gap-3">
        <button
          onClick={stopRobot}
          aria-label="Emergency stop"
          className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-400 text-white shadow-lg transition hover:bg-red-700 ${
            stopped ? "bg-red-800" : "bg-red-600"
          }`}
        >
          <OctagonAlert size={24} />
        </button>

        <div className="grid grid-cols-3 gap-2">
          <span />
          <button
            className={buttonClass}
            onClick={() => moveRobot("Forward")}
            aria-label="Move forward"
          >
            <ArrowUp size={20} />
          </button>
          <span />

          <button
            className={buttonClass}
            onClick={() => moveRobot("Left")}
            aria-label="Move left"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className={buttonClass}
            onClick={() => moveRobot("Stop")}
            aria-label="Stop movement"
          >
            <span className="text-xs">STOP</span>
          </button>
          <button
            className={buttonClass}
            onClick={() => moveRobot("Right")}
            aria-label="Move right"
          >
            <ArrowRight size={20} />
          </button>

          <span />
          <button
            className={buttonClass}
            onClick={() => moveRobot("Backward")}
            aria-label="Move backward"
          >
            <ArrowDown size={20} />
          </button>
          <span />
        </div>

        <p className="rounded-full bg-slate-900/90 px-3 py-1 text-xs text-slate-300">
          {stopped ? "Emergency stop selected" : `Last action: ${lastAction}`}
        </p>
      </div>
    </>
  );
}

export default RobotControls;
