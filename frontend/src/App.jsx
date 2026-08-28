import Landing from "./Landing.jsx";
import Home from "./Home.jsx";
import Find from "./Find.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path= "/find" element={<Find/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;