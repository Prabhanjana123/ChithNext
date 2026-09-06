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
               <Link to ="/description-of-user" className="user-description">
                  user-description
               </Link>
               <Link to ="/create-post" className="user-wants-to-post">
                  Post
               </Link>
               <Link to ="/see-post" className="user-wants-to-see-his-post">
                 see posts
               </Link>
               <div className="users-count">
                  <p>users-count </p>
               </div>
            </div>
            <div className="resume-uploading-space">
              <h1>add  you   add  resume add  showcase  your  talent </h1>
              <div className="add-resume">
              <button className="resume-add-button"> add  resume </button>
              </div>
              <div className="see-ur-existing-resume">
                 these  are  ur  existing resumes 
              </div>
            </div>
            </div>
        </div>        
    );
}
export default UploadResume ;