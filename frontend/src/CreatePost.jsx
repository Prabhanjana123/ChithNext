import { Link } from "react-router-dom";
import "./CreatePost.css"
function CreatePost(){
    return(
        <div className="createpost">
            <div className="navbar">
                <div className="application-name"><h2>ChithNext</h2></div>
                 <div className="nav-links">
                    <Link to ='/'>Home</Link>
                    <Link to ='/find'>Find</Link>
                    <Link to = '/oppurtunities'>Oppurtunities</Link>
                    <Link to = '/msg'>Messaging</Link>
                 </div>

            </div>
            <div className="body">
            <div className="profile">
               <div className="profile-pic">
                  <p>here profile pic</p>
               </div>
               <div className="resume">
                  <button className="resume-upload">Update resume</button>
               </div>
               <div className="description">
                  <button className="update-description">Update description</button>
               </div>
               <div className="user-posting">
               <Link to="/create-post">
                      <button className="user-want-to-post">
                        Post
                     </button>
               </Link>
               </div>
               <div className="user-old-posts">
                  <button className="user-want-to-see-old-posts"> Your Posts </button>
               </div>
               <div className="community-count">
                  <p>total people</p>
               </div>
            </div>
            <div className="posting-page">
         <input
            type="file"
            accept="image/*"
            />
            <br></br>
            <textarea
            placeholder="write  something">

            </textarea>

            <button>Publish</button>                
            </div>
            </div>   
        </div>
    );
}
export default CreatePost ;