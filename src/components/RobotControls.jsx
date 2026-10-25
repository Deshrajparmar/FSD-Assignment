
import { useState } from "react";
import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  OctagonAlert,
} from "lucide-react";

const RobotControls = () => {
  const [mode, setMode] = useState("Manual");
  const [lastAction, setLastAction] = useState("None");
  const [stopped, setStopped] = useState(false);

  const moveRobot = (direction) => {
    if (stopped) return;
    setLastAction(direction);
  };

  const stopRobot = () => {
    setStopped(true);
    setLastAction("Emergency stop");
  };

  const buttonClass =
    "flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-slate-800 text-white shadow-lg transition hover:bg-slate-700 sm:h-11 sm:w-11";

  return (
    <>
      <div className="absolute right-4 top-4 z-50 flex rounded-full border border-slate-700 bg-slate-900/95 p-1 shadow-xl">
        {["Auto", "Manual"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setMode(item);
              setStopped(false);
              setLastAction(`Mode: ${item}`);
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              mode === item
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 z-40 flex flex-col items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/95 p-3 shadow-xl">
        <button
          type="button"
          onClick={stopRobot}
          aria-label="Emergency stop"
          className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-400 text-white shadow-lg transition hover:bg-red-700 sm:h-14 sm:w-14 ${
            stopped ? "bg-red-800" : "bg-red-600"
          }`}
        >
          <OctagonAlert size={24} />
        </button>

        <div className="grid grid-cols-3 gap-2">
          <span />

          <button
            type="button"
            className={buttonClass}
            onClick={() => moveRobot("Forward")}
            aria-label="Move forward"
          >
            <ArrowUp size={20} />
          </button>

          <span />

          <button
            type="button"
            className={buttonClass}
            onClick={() => moveRobot("Left")}
            aria-label="Move left"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            type="button"
            className={buttonClass}
            onClick={() => moveRobot("Stop")}
            aria-label="Stop movement"
          >
            <span className="text-xs">STOP</span>
          </button>

          <button
            type="button"
            className={buttonClass}
            onClick={() => moveRobot("Right")}
            aria-label="Move right"
          >
            <ArrowRight size={20} />
          </button>

          <span />

          <button
            type="button"
            className={buttonClass}
            onClick={() => moveRobot("Backward")}
            aria-label="Move backward"
          >
            <ArrowDown size={20} />
          </button>

          <span />
        </div>

        <p className="max-w-40 text-center text-xs text-slate-300">
          {stopped ? "Emergency stop selected" : `Last action: ${lastAction}`}
        </p>

        {stopped && (
          <button
            type="button"
            onClick={() => {
              setStopped(false);
              setLastAction("None");
            }}
            className="rounded-lg bg-slate-700 px-3 py-2 text-xs text-white hover:bg-slate-600"
          >
            Reset stop
          </button>
        )}
      </div>
    </>
  );
};

export default RobotControls;
