import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Names from "./Names";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/names" element={<Names />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;