
import { Map } from "lucide-react";

function MapCanvas() {
  return (
    <section className="flex min-h-[400px] flex-1 flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
      <div className="flex items-center justify-between border-b border-slate-700 px-5 py-4">
        <div>
          <h2 className="font-semibold text-white">3D Map</h2>
          <p className="mt-1 text-sm text-slate-400">
            Robot environment visualization
          </p>
        </div>

        <Map size={20} className="text-slate-400" />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
        <Map size={48} className="text-slate-600" />

        <h3 className="text-lg font-medium text-slate-300">
          Map workspace
        </h3>

        
      </div>
    </section>
  );
}

export default MapCanvas;
