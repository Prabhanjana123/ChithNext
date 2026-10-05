import "./Home.css"
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import UserCount from "./UsersCount";
function Home(){
   const [posts,setPosts] = useState([]) ;
   
   const  getPosts =  async () => {
      const  response =   await fetch("http://localhost:5000/posts") ;

      const data = await  response.json();

      setPosts(data);
   };

      useEffect(() => {
        getPosts();
      }, []);
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
                  <Link to ="/profile">
                  <p>view profile </p>
                  </Link>
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
                  <UserCount/>
               </div>
            </div>
      <div className="posts">

         {posts.map((post, index) => (

         <div className="one-box" key={index}>

             <div className="posted-user-profile">
               <p>profile photo </p>
             </div>

             <div className="posted-user-image">
                  {post.image &&  (
                  <img src={`http://localhost:5000/uploads/${post.image}`}
                  alt="post"
                  />
                )}
               </div>

             <div className="posted-user-description">
                <p>{post.DESCRIPTION}</p>
             </div>

               <div className="peoples-comment">
                <p>peoples  reaction </p>
               </div>

            </div>

         ))}

      </div>
            </div>
        </div>
     );
}
export default Home ;