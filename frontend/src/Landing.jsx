import landingimage from "./assets/landing.png";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import {useState}  from  "react" ;

function Landing() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showRegister , setShowRegister]=  useState(true)  ;
    const [showLogin , setShowLogin]=  useState(false)  ;
    const  registerUser=  async () => {
              const response =  await fetch ("http://localhost:5000/register",{
                method : "POST",
                headers:{

                  "Content-Type" : "application/json"
                },
                body:JSON.stringify({
                  name :name,
                  email : email,
                  password:password
                })
              });
              const data = await  response.text();
              console.log(data);
              alert(data) ;
              if(response.ok){
                setShowRegister(false);
                setShowLogin(true);
              }
    };
    const loginUser =  async ()=>{
            const response =  await fetch ("http://localhost:5000/login",{
                method : "POST",
                headers:{

                  "Content-Type" : "application/json"
                },
                body:JSON.stringify({
                  email : email,
                  password:password
                })
              });
              const data = await  response.json();
              console.log(data);
              alert(data.message+"|  user id "+data.userId) ;
              if(response.ok){
                localStorage.setItem("userId",data.userId);

                setShowLogin(false);
                navigate("/home");
              }
    };
  return (

    <div className="landing">
    <div className="land">
      <img src={landingimage} />

    </div>
    <div className="next-button">
      <button onClick={() => navigate("/home")}>
        Explore
      </button>
    </div>
    {showRegister &&(
      <div className="register-popup">
           <div className="register-box">
               <h2> create account </h2>
                <input 
                 type="text" 
                 placeholder="Name"
                 value ={name}
                 onChange={(e)=>setName(e.target.value)}
                  />
                <input type="email"  
                     placeholder="Email" 
                     value ={email}
                     onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" 
                     placeholder="Password"
                     value ={password}
                     onChange={(e)=>setPassword(e.target.value)}             
                 />

                <button onClick={registerUser}>Register</button>
                <p>already have an account ?
                  <button onClick={()=>{
                       setShowRegister(false);
                       setShowLogin(true);

                  }}>login </button>
                </p>
           </div>      
        </div>
    )}
    {showLogin &&(
      <div className="register-popup">
           <div className="register-box">
               <h2> login to  account </h2>
                <input type="email"  
                      placeholder="Email"
                      value ={email}
                      onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" 
                     placeholder="Password"    
                      value ={password}
                      onChange={(e)=>setPassword(e.target.value)}       
                 />

                <button onClick={loginUser}>login</button>
                  <p>dont have an account ?
                  <button onClick={()=>{
                       setShowRegister(true);
                       setShowLogin(false);

                  }}>sign up </button>
                </p>
           </div>      
        </div>
    )}
    </div>
  );
}

export default Landing;