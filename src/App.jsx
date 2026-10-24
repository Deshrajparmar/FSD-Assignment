
import Sidebar from "./components/Sidebar";
import MapCanvas from "./components/MapCanvas";

function App() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <main className="flex min-w-0 flex-1 flex-col gap-6 p-6">
        <header>
          <h1 className="text-2xl font-bold text-white">
            Insight.IO
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Robotics monitoring dashboard
          </p>
        </header>

        <MapCanvas />
      </main>
    </div>
  );
}

export default App;
