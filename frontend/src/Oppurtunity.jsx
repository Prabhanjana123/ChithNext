import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import "./Oppurtunity.css"
function Oppurtunity(){
   const [opportunities, setOpportunities]  =  useState([]);
   const getOpportunities  =  async ()=>{
      const response =  await fetch ("http://localhost:5000/opportunities");
      const data = await response.json();
      setOpportunities(data);
   };
   useEffect(()=>{
      getOpportunities();
   },[]);
    return(
        <div className="Oppurtunity">
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
            <div className="Oppurnity-section">
                <div className="jobs-internships-display">
                     <h3>Opportunity </h3>
                     {opportunities.map((opportunity)=>{
                        return(
                        <div className="opportunity-card"  key ={opportunity.id}>
                           <p>{opportunity.title}</p>
                           <p>{opportunity.description}</p>

                           <p>
                              <strong>Type : </strong>{opportunity.type}
                           </p>
                           <a  href={opportunity.link} target="_blank">
                              Apply 
                           </a>
                           </div>
                        );
                     })} 
                 </div>
                <Link to = "/post-opportunity"  className="post-opportunity-button">
                Post opportunity 
                </Link>
            </div>
            </div>

        </div>
    );
}
export  default Oppurtunity;