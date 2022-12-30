import "./App.css";
import Header from "./components/Header";
import Router from "./Router";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <div className="App">
      <div className="m-0 select-none">
        <Header />

        <Router />
      </div>
    </div>
  );
}

export default App;
