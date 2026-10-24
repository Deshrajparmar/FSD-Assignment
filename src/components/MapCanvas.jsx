
import { Map } from "lucide-react";
import CameraPreview from "./CameraPreview";
import RobotControls from "./RobotControls";
import PointCloud from "./PointCloud";

const MapCanvas = () => {
  return (
    <section className="flex min-h-[500px] min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
      {/* Map header */}
      <div className="flex items-center justify-between border-b border-slate-700 px-5 py-4">
        <div>
          <h2 className="font-semibold text-white">3D Map</h2>
          <p className="mt-1 text-sm text-slate-400">
            Robot environment visualization
          </p>
        </div>

        <Map size={20} className="text-slate-400" />
      </div>

      {/* Map workspace */}
      <div className="relative min-h-[400px] flex-1 bg-slate-950">
        {/* 3D point cloud background */}
        <div className="absolute inset-0">
          <PointCloud />
        </div>

        {/* Camera preview */}
        <div className="absolute bottom-4 left-4 z-10 w-56 max-w-[40%]">
          <CameraPreview />
        </div>

        {/* Robot controls */}
        <RobotControls />
      </div>
    </section>
  );
};

export default MapCanvas;
