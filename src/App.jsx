import "./App.css";
import Landing from "./pages/Landing/landing";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
