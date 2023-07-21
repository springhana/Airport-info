import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="app">
      <div className="home">
        <Router>
          <NavBar />
        </Router>
      </div>
    </div>
  );
}

export default App;
