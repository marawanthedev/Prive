import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./pages/landing/landing.jsx";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}></Route>
    </div>
  );
}

export default App;
