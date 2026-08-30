import {Link} from "react-router-dom";
import "./UploadResume.css" ;
function UploadResume(){
    return(
        <div className="home">
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
               <div className="profile-sec">
                  <p>profile  img  edit  etc</p>
               </div>
               <Link to ="/upload-resume" className="resume-update">
                  Upload Resume
               </Link>
               <div className="user-description">
                  <p>user-description</p>
               </div>
               <Link to ="/create-post" className="user-wants-to-post">
                  Post
               </Link>
               <div className="user-wants-to-see-his-post">
                  <p> see post</p>
               </div>
               <div className="users-count">
                  <p>users-count </p>
               </div>
            </div>
            <div className="resume-uploading-space">
              <p>place to  upload  resume </p>
            </div>
            </div>
        </div>        
    );
}
export default UploadResume ;