import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./pages/landing/landing.jsx";
import EnquiryPage from "./pages/enquiry/enquiry.jsx";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/enquiry" component={EnquiryPage}></Route>
    </div>
  );
}

export default App;
