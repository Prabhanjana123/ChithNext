import { Link } from "react-router-dom";
import { useState } from "react";
import "./Oppurtunity.css"
function PostOpportunity(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [type,setType] = useState("");
    const [link,setLink] = useState(""); 
    const createOpportunity =  async () =>{
        const userId =  localStorage.getItem("userId");
        const response  =  await fetch("http://localhost:5000/opportunities",{
            method : "POST",
            headers:{
                "Content-type" :"application/json"
            },
            body :JSON.stringify({
                user_id :userId ,
                title :title,
                description :  description,
                type :type,
                link:link
            })
        });
        const data  =  await  response.text();
        console.log(data);
    };
    return(
        <div className="PostOpportunity">
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
            <div className="Oppurnity-posting-section">
              <input 
              type ="text"
              placeholder="Oppurtunity title "
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              />
              <textarea
              placeholder="desceibe the  oppurtunity"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              />
              <input 
              type ="text"
              placeholder="type(intership/job/others)"
              value={type}
              onChange={(e)=>setType(e.target.value)}
              /> 
              <input 
              type ="text"
              placeholder="application link"
              value={link}
              onChange={(e)=>setLink(e.target.value)}
              />      
              <button onClick={createOpportunity}>
                  Post opportunity 
                </button>         
            </div>
            </div>

        </div>
    );
}
export  default PostOpportunity ;