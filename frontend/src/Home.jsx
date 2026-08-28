import "./Home.css"
import {Link} from "react-router-dom";
function Home(){
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
               <h1>pro</h1>
            </div>
            <div className="posts">
               <h1>hi</h1>
            </div>
            </div>
        </div>
     );
}
export default Home ;