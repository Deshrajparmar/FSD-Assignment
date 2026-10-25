
import Sidebar from "./components/Sidebar";
import MapCanvas from "./components/MapCanvas";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex min-w-0 flex-1 flex-col gap-6 p-6">
        

          <MapCanvas />
        </main>
      </div>
    </div>
  );
}

export default App;
