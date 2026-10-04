import {Link} from "react-router-dom"
import "./Profile.css"
import { useState } from "react";
function Profile(){
    const [about ,setAbout] =  useState("") ;
    const [skills,setSkills] =  useState("") ;
    const [experience,setExperience] =  useState("") ;
    const [education,setEducation] = useState("");
    const [profilePhoto,setProfilePhoto] =  useState(null) ;
    return(
        <div className="profile-page">
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
            <div className="profile-editing-page">
                <div className="profile-photo-banner">
                    <div className="profile-photo">
                       {profilePhoto?(
                        <img 
                        src = {URL.createObjectURL(profilePhoto)}
                        alt = "profile"
                        />
                       ):(
                        <p>photo</p>
                       )
                    }
                    </div>     
                    <label className="edit-photo">
                          Edit Photo 
                          <input
                              type  ="file"
                              accept="image/*"
                              onChange={(e)  => setProfilePhoto(e.target.files[0]) }
                              />
                        </label>               
                </div>
                <div className="small-about">
                    <h3>About</h3>
                    <textarea
                    placeholder="tell what  you do "
                    value ={about}
                    onChange={(e)=>setAbout(e.target.value)}/>
                </div>
                <div className="skills-section">
                    <p>add  your skills </p>
                    <textarea
                    placeholder="add your skills  "
                    value ={skills}
                    onChange={(e)=>setSkills(e.target.value)}/>
                </div>
                <div className="experience">
                    <p>add you experience</p>
                    <textarea
                    placeholder="add your experinces  "
                    value ={experience}
                    onChange={(e)=>setExperience(e.target.value)}/>
                </div>
                <div className="education">
                    <p>add education</p>
                    <textarea
                    placeholder="add your education"
                    value ={education}
                    onChange={(e)=>setEducation(e.target.value)}/>
                </div>
            </div>
            </div>
        </div>        
    );
}
export default Profile ;
