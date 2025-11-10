import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Example placeholder content */}
      <div className="pt-24 px-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome to Naavya Creations ✨
        </h1>
        <p className="mt-3 text-gray-600">
          Scroll down to see the navbar animation effect.
        </p>
        <div className="h-[1500px]" /> {/* just to allow scrolling */}
      </div>
    </div>
  );
}

export default App;
