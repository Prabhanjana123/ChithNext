import Landing from "./Landing.jsx";
import Home from "./Home.jsx";
import CreatePost from "./CreatePost";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-post" element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;