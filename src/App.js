import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
function App() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center pt-8 bg-violet-600">
      <LoginPage />
    </div>
  );
}

export default App;
