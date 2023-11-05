import "./App.css";
import Landing from "./pages/Landing/landing";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Landing />
    </div>
  );
}

export default App;
