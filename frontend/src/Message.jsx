import { Link } from "react-router-dom";
import "./Message.css"
import { useEffect, useState } from "react";
function Message(){
   const currentUser  = localStorage.getItem("userId");
   const [selectedUser,setSelectedUser]  =  useState(null) ;
   const [messages,setMessages] =  useState([]) ;
   const [message,setMessage] =  useState("");
   const [users,setUsers] =  useState([]);
   const getUsers =  async()=>{
     const response =  await fetch(`http://localhost:5000/users?currentUser=${currentUser}`);
     const data  =  await response.json();
     setUsers(data);
   };
   const getMessages =  async ()=>{
      console.log("get messages  called")
      const response =  await fetch(`http://localhost:5000/messages/${currentUser}/${selectedUser}`);
      const data  =  await response.json();
      setMessages(data);
   };
   useEffect(()=>{
      if  (selectedUser != null){
         getMessages();
      }
   },[selectedUser]);
   useEffect(()=>{
      getUsers();
   },[]);
   const sendMessage =  async ()=>{
      const response  =  await fetch(`http://localhost:5000/messages`,{
         method :"POST",
         headers :{
            "Content-Type" : "application/json"
         },
         body:JSON.stringify({
            sender_id : currentUser,
            receiver_id :selectedUser,
            message :message
         })
      });
      const  data =  await response.text() ;
      getMessages();
      console.log(data);
      setMessage("");
   };
   const selectedUserName  =  users.find(
      (user) => user.id  === selectedUser
   );
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
                   {users.map((user)=>(
                     <div 
                     className="chat-user"
                     key = {user.id}
                     onClick={()=> setSelectedUser(user.id)}
                     >
                        <h3>{user.name}</h3>
                        <p>Click to open chat </p>
                        </div>
                   ))}
                  </div>

                  <div className="chat-window">
                     <div className="chat-header">
                        <h2>{selectedUserName?.name}</h2>
                     </div>

                     <div className="messages">
                      {messages.map((msg)=>(
                        <div key ={msg.id}
                         className={
                           String(msg.sender_id) === String(currentUser)
                           ?"sent-message"
                           :"received-message"
                         }
                         >
                           <p>{msg.message}</p>
                           </div>
                      ))}                       
                     </div>
                     <div className="message-input">
                        <input 
                        type="text"
                        placeholder="type a message .. "
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        />
                        <button  onClick={sendMessage}>send </button>
                     </div>
                  </div>

            </div>
            </div>

        </div>
    );
}
export  default Message ;