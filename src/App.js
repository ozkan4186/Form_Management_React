import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter/>
      <ToastContainer />
    </div>
  ); 
}

export default App;
