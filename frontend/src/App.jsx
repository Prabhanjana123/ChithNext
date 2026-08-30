import Landing from "./Landing.jsx";
import Home from "./Home.jsx";
import CreatePost from "./CreatePost";
import UploadResume  from "./UploadResume.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDescription from "./UserDescription.jsx";
import SeePost from "./SeePost.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-post" element={<CreatePost/>}/>
        <Route path ="/upload-resume" element={<UploadResume/>}/>
        <Route path="/description-of-user" element={<UserDescription/>}/>
        <Route path="/see-post" element={<SeePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;