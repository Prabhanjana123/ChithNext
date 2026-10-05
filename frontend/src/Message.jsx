import { Link } from "react-router-dom";
import "./Message.css"
function Message(){
    return(
        <div className="Message">
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
            <div className="Messageing-part">
                <div className="chat-list">
                  <h2>messages </h2>
                
                <input 
                   type ="text"
                   placeholder="Search chats .. "
                   />
                   <div className="chat-user">
                     <h3>pranav </h3>
                     <p>HOW  ARE  YOU ?  </p>
                   </div>

                   <div className="chat-user">
                     <h3>aravind</h3>
                     <p>hi </p>
                   </div>
                  </div>

                  <div className="chat-window">
                     <div className="chat-header">
                        <h2>pranav</h2>
                     </div>

                     <div className="messages">
                        <div className="received-message">
                           <p>hi </p>
                        </div>
                        <div className="sent-message">
                           <p>hello</p>
                        </div>                        
                     </div>
                     <div className="message-input">
                        <input 
                        type="text"
                        placeholder="type a message .. "
                        />
                        <button>send </button>
                     </div>
                  </div>

            </div>
            </div>

        </div>
    );
}
export  default Message ;