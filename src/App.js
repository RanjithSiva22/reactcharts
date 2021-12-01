import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./screens/home"
import View from "./screens/view"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/view" element={<View />} />

    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
