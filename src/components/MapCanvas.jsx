
import { useState } from "react";
import CameraPreview from "./CameraPreview";
import RobotControls from "./RobotControls";
import PointCloud from "./PointCloud";
import TopStatusBar from "./TopStatusBar";

const MapCanvas = () => {
  const [mainView, setMainView] = useState("map");
  const isMapMain = mainView === "map";

  return (
    <section className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-slate-950">
      <div className="relative z-50 shrink-0">
        <TopStatusBar />
      </div>

      <div className="flex shrink-0 items-center justify-between px-5 py-3">
        <div>
          <h2 className="text-lg font-semibold text-white">
            {isMapMain ? "3D Map" : "Live Camera"}
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Click the preview to switch views
          </p>
        </div>

        
      </div>

      <div className="relative min-h-[500px] min-w-0 flex-1 overflow-hidden bg-black">
      
        <div className="absolute inset-0">
          {isMapMain ? <PointCloud /> : <CameraPreview />}
        </div>

        <button
          type="button"
          onClick={() =>
            setMainView(isMapMain ? "camera" : "map")
          }
          aria-label={
            isMapMain ? "Enlarge camera" : "Enlarge 3D map"
          }
          className="absolute bottom-5 left-5 z-30 h-32 w-48 overflow-hidden rounded-lg border border-slate-600 bg-slate-900 shadow-2xl transition hover:border-sky-400 sm:h-36 sm:w-56"
        >
          <div className="pointer-events-none absolute inset-0">
            {isMapMain ? <CameraPreview /> : <PointCloud />}
          </div>

          <span className="absolute left-2 top-2 rounded bg-slate-950/90 px-2 py-1 text-xs font-medium text-white">
            {isMapMain ? "LIVE CAMERA" : "3D MAP"}
          </span>
        </button>

        <RobotControls />
      </div>
    </section>
  );
};

export default MapCanvas;
