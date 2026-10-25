import { BatteryFull, Signal, Circle } from "lucide-react";

const TopStatusBar = () => {
  return (
    <div className="flex w-full items-center justify-center px-3 py-2">
      <div className="flex w-full max-w-3xl items-center justify-around gap-4 rounded-b-3xl border border-slate-700/70 bg-[#111b25] px-5 py-3 text-xs font-medium text-slate-300 shadow-lg sm:gap-8 sm:px-8 sm:py-4 sm:text-sm">
        {/* Battery */}
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="text-slate-200">100%</span>
          <BatteryFull
            size={19}
            className="fill-green-400 text-green-400"
          />
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <Signal size={18} className="text-amber-400" />
          <span>Strong</span>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <span className="text-slate-400">Failsafe</span>
          <span className="text-slate-200">Okay</span>
          <Circle
            size={9}
            className="fill-green-400 text-green-400"
          />
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <span className="text-slate-400">System</span>
          <span className="text-slate-200">Okay</span>
          <Circle
            size={9}
            className="fill-green-400 text-green-400"
          />
        </div>
      </div>
    </div>
  );
};

export default TopStatusBar;