import {useState,useEffect} from "react"

function UsersCount(){
    const [userCount,setUserCount] = useState(0) ;
    const getUserCount =  async () =>{
       const response = await fetch("http://localhost:5000/users-count");
       const data =  await response.json();
      
       setUserCount(data[0].total_users);
    };
    useEffect(()=>{
       getUserCount();
    },[]);   
    return(
        <p>Users :  {userCount}</p>
    )    ;
}

export default UsersCount ;

