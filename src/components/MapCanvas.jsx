
import { Map } from "lucide-react";
import CameraPreview from "./CameraPreview";

function MapCanvas() {
  return (
    <section className="flex min-h-[500px] flex-1 flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
      <div className="flex items-center justify-between border-b border-slate-700 px-5 py-4">
        <div>
          <h2 className="font-semibold text-white">3D Map</h2>
          <p className="mt-1 text-sm text-slate-400">
            Robot environment visualization
          </p>
        </div>

        <Map size={20} className="text-slate-400" />
      </div>

      <div className="relative flex flex-1 items-center justify-center bg-slate-950 p-4">
        <div className="text-center">
          <Map size={48} className="mx-auto text-slate-700" />
          <h3 className="mt-3 text-lg font-medium text-slate-300">
            Map workspace
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            The 3D map will appear here
          </p>
        </div>

        <div className="absolute bottom-4 left-4 w-64 max-w-[calc(100%-2rem)]">
          <CameraPreview />
        </div>
      </div>
    </section>
  );
}

export default MapCanvas;
