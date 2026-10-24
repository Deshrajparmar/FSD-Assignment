
import {
  LayoutDashboard,
  Map,
  MapPin,
  Activity,
  
  UserRound,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="flex h-screen w-20 flex-col items-center bg-slate-950 py-6 text-slate-400">
      <h1 className="mb-10 text-xl font-bold text-white">ERIC</h1>

      <nav className="flex flex-1 flex-col items-center gap-6">
        <LayoutDashboard size={22} />
        <Map size={22} />
        <MapPin size={22} />
        <Activity size={22} />
      </nav>

      <div className="flex flex-col items-center gap-6">
        
        <UserRound size={22} />
      </div>
    </aside>
  );
}

export default Sidebar;
