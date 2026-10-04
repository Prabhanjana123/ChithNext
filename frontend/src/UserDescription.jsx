import {Link} from "react-router-dom";
import {useState} from "react" ;
import "./UserDescription.css" ;
function UserDescription(){

   const [description,setDescription] =  useState("") ;
   const saveDescription =  async()=>{
      const userId = localStorage.getItem("userId");
      const response =  await  fetch ("http://localhost:5000/description",{
         method:"POST",
         headers :{
            "Content-Type" : "application/json"
         },
         body : JSON .stringify({
            description : description,  
            userId : userId
         })
      });
      const  data =  await  response.text();
       console.log(data) ;
   };
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
            <div className="user-description-writing-space">
              <div className="heading">
               <h2>please  enter  your  complete professional  description </h2>
              </div>
              <textarea
              className="description-typeing-page"
              placeholder="enter your professional description "
              value ={description}
              onChange={(e)=>setDescription(e.target.value)}
              />
              <button  onClick={saveDescription}>
               Save Descrition 
              </button>
            </div>
            </div>
        </div>        
    );
}
export default UserDescription ;