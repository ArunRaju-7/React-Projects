import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header today="Tuesday" date="25-11-2025" />
      <div className="main-sections">
        <div className="sidebar-section">
          <Sidebar name="Arunachalam" gmail="arunachalamraj06@gmail.com" />
        </div>
        <div className="mainbar-section">Body section</div>
      </div>
    </div>
  );
}

export default App;
