import Landing from "./Landing.jsx";
import Home from "./Home.jsx";
import CreatePost from "./CreatePost";
import UploadResume  from "./UploadResume.jsx";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import UserDescription from "./UserDescription.jsx";
import SeePost from "./SeePost.jsx";
import Find from "./Find.jsx";
import Oppurtunity from "./Oppurtunity.jsx";
import Message from "./Message.jsx";
import Profile from "./Profile.jsx"
import PostOpportunity from "./PostOpportunity.jsx";
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
        <Route path = "/find"  element={<Find/>}/>
        <Route path = "/oppurtunities" element={<Oppurtunity/>}/>
        <Route path = "/post-opportunity" element={<PostOpportunity/>}/>
        <Route path ="/msg" element={<Message/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;