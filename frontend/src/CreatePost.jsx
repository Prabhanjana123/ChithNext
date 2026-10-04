import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import "./CreatePost.css"
function CreatePost(){
   const [description,setDescription] = useState("");
   const [image,setImage] = useState(null);

   const navigate =   useNavigate() ;

   const  createpost =  async () =>  {
      const formData = new FormData()  ;
      const userId =  localStorage.getItem("userId");
      console.log("userId:", userId);
      formData.append("DESCRIPTION",description);
      formData.append("image",image) ;
      formData.append("userId",userId);
      const response =  await fetch ("http://localhost:5000/posts",{
         method : "POST",
         body :formData
      });
      const data  =  await   response.json();
      console.log(data) ;
   } ;
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
            <div className="posting-page">
               <div className="user-posting-image">
                 <label htmlFor="posting-image">
                   choose image
                  </label> 

                  <input id = "posting-image"
                  type = "file"
                  accept="image/*"
                  onChange={(e)=> setImage(e.target.files[0])} 
                  />
                  </div> 
                  {image && (

                     <div className="image-preview">
                        <img 
                            src ={URL.createObjectURL(image)}
                            alt = "preview"
                            />
                     </div>
                  )} 

                  <div className="user-posting-description">
                       <textarea
                       placeholder="what  do you  want  to post "
                       value = {description}
                       onChange={(e)=>setDescription(e.target.value)}
                       />   
                  </div> 
              <button className="post_button" onClick={createpost}>
                   Post
                  </button>  
            </div>
            </div>
        </div>
    );
}
export default CreatePost ;
