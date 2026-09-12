import "./Home.css"
import {Link} from "react-router-dom";
function Home(){
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
            <div className="posts">
               <div className="one-box">
               <div className="posted-user-profile">
                        <p>profile</p>
               </div>
               <div className="posted-user-image">
                        <p>image</p>
               </div>
               <div className="posted-user-description">
                        <p>posted-user-description</p>
               </div>
               <div className="peoples-comment">
                        <p>posted-user-description</p>
               </div>
               </div>
            </div>
            </div>
        </div>
     );
}
export default Home ;