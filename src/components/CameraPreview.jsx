
import { Camera } from "lucide-react";
const  CameraPreview = () => {
  return (
    <div className="w-64 overflow-hidden rounded-lg border border-slate-700 bg-black">
      <div className="flex items-center gap-2 bg-slate-900 px-3 py-2">
        <Camera size={16} className="text-white" />
        <h2 className="text-sm font-medium text-white">
          Robot Camera
        </h2>
      </div>

      <video
  src="/camera.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
/>
    </div>
  );
}

export default CameraPreview;
