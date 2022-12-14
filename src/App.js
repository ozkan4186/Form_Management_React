import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
        <ToastContainer />
      </AuthProvider>
    </div>
  ); 
}

export default App;
