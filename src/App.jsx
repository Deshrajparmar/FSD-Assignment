
import './App.css'
import Sidebar from './components/Sidebar'
import MapCanvas from './components/MapCanvas';
function App() {
  
   return (
    <div className="flex min-h-screen bg-slate-900">
      <Sidebar />

      <main className="flex-1 p-6 text-white">
       <MapCanvas />
      </main>
    </div>
  );

 
}

export default App
