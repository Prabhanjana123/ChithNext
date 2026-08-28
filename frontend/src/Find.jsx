import "./Find.css"
import {Link} from "react-router-dom"
function Find(){
    return(
     <div className="Find">
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
               <h1>pro</h1>
            </div>
            <div className="find-people">
               <h1>hi</h1>
            </div>
            </div>
     </div>
    );
}
export default Find ;