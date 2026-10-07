const express =  require("express");  //  importing  express 
const cors    =  require("cors") ;
const mysql   =  require("mysql2") ;
const multer  =  require("multer") ;
const app = express();
const upload = multer({dest  : "uploads/"}) ;
const bcrypt = require("bcrypt");
const resumeUpload =  multer({dest : "resumes/"});
const db = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "password",
        database :"chithnext"
    }
);

db.connect((err)=>{
    if(err){
        console.log("database  failed  to  connect");
        return ;
    }
    console.log("mysql connected ");
});
app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("uploads"));

app.get("/", (req, res) => {
    res.send("ChithNext backend is running!");
});

app.post("/posts",upload.single("image"),(req,res)=>{
     const  description =  req.body.DESCRIPTION  ;
     const image =  req.file ; 
     const imageName = image.filename  ;

     const user_id =  req.body.userId ;
     console.log(image) ;
     const sql  = "INSERT INTO posts (DESCRIPTION, image,user_id)  VALUES (?,?,?) ";
     db.query(sql,[description,imageName,user_id],(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("database error ");
        }
        res.send({
            id : result.insertId,
            description : description
        });
     });
});
app.get("/posts",(req,res)=>{
    const sql = "SELECT * FROM posts";
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("database error ");
        }

        res.send(result);
    });
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});

app.post("/description",(req,res)=>{
    const description =  req.body.description ;
    const user_id = req.body.userId;
    const sql =`INSERT INTO user_description (user_id ,description)
    VALUES(?,?) `;
    db.query(sql,[user_id,description],(err,result) => {
        if(err){
            console.log(err);
            return res.status(500).send("database error ");

        }
        res.send("description saved");
    });
});

app.post("/resume",resumeUpload.single("resume"),(req,res)=>{
    const resume =  req.file ;
    const user_id = req.body.userId;
    const sql = `INSERT INTO resumes (user_id,resume_path) VALUES (?,?) `;
    db.query(sql,[user_id,resume.filename],(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("data base error");
        }
        res.send("resume uploaded and  saved ");
    });
});
app.post("/register",async(req,res)=>{
    const {name,email,password}=  req.body ;
    const hashedPassword = await bcrypt.hash(password,10);

    const sql =`
    INSERT INTO users(name,email,password)
    VALUES (?,?,?)`;

    db.query(sql,[name,email,hashedPassword],(err,result)=>{
        if(err){
            console.log(err);
            if(err.code === "ER_DUP_ENTRY"){
                return res.status(400).send("email_alredy_exist");
            }

            return res.status(500).send("registration failed ");
        }
        res.send("resgistration succesfull"); 
    });
});
app.post("/login",async(req,res)=>{
    const   {email,password} =  req.body ;
    const  sql  = "SELECT * FROM users  WHERE email  = ? ";
    db.query(sql,[email],async(err,result)=>{
          if(err){
            console.log(err);
            return res.status(500).send("database error ");
          }
          if(result.length === 0 ){
             return res.status(400).send("email not found ");
          }
          const user = result[0] ;
          const passwordMatch  =   await  bcrypt.compare(
            password,
            user.password
          ) ;
           if(!passwordMatch){
            return res.status(400).send("wrong password  ");
           }
           res.send({
            message :  "login succesfull ",
            userId  :user.id 
           });

    });
});

app.post("/profile",(req,res)=>{
    const {userId,about,skills,experience,education}=  req.body ;
    const sql = `
    INSERT INTO  profile (user_id,about ,skills,experience,education)
    VALUES (?,?,?,?,?)
    ON DUPLICATE KEY UPDATE 
    about =  VALUES(about),
    skills =  VALUES(skills),
    experience =  VALUES(experience),  
    education =  VALUES(education)      
    ` ;
    db.query(
        sql,
        [userId,about,skills,experience,education],
        (err,result)=>{
            if(err){
                console.log(err);
                return  res.status(500).send("database error ");
            }
            res.send("profile  saved ");
        }
    );
});
app.get("/profile/:userId",(req,res)=>{
    const  userId = req.params.userId ;
    const sql  = "SELECT * FROM profile  WHERE user_id = ? ";
    db.query(sql,[userId],(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("data base error ");
        }
        res.send(result);
    });
});


app.get("/search-users",(req,res)=>{
    const search =  req.query.search ;
    const sql = `
    SELECT id,name,email
    FROM users
    WHERE name LIKE  ? `;
    db.query(sql,[`%${search}%`],(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("data base erorr ");
        }
        res.send(result) ;
    });
});

app.post("/messages",(req,res)=>{
    const {sender_id , receiver_id,message} =  req.body ;

    const sql  =  `INSERT INTO messages (sender_id,receiver_id,message)
    VALUES (?,?,?)`  ;
    db.query(
        sql,
        [sender_id , receiver_id,message],
        (err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).send("data base error ");
            }
            res.send("message sent ");
        }
    );
});


app.get("/users-count",(req,res)=>{
    const sql  = "SELECT COUNT(*)  AS  total_users  FROM  users"  ;
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("database error ");

        }
        res.send(result);
    });
});
app.get("/messages/:user1/:user2",(req,res)=>{
    const user1  =  req.params.user1 ;
    const user2  =  req.params.user2 ;
    const sql  =  `
        SELECT * FROM messages
        WHERE (sender_id  = ? AND receiver_id  = ?) OR 
        (sender_id  = ? AND receiver_id  = ?)
        ORDER  BY  created_at  ASC `;

        db.query(
            sql,
            [user1,user2,user2,user1],
            (err,result)=>{
                if(err){
                    console.log(err);
                    return res.status(500).send("data base error ");
                }
                res.send(result);
            }
        );
});

app.post("/opportunities", (req,res)=>{
    const {user_id,title,description,type,link} =  req.body ;
    const sql = `INSERT INTO opportunities 
    (user_id,title,description,type,link)
    VALUES (?,?,?,?,?)`;
    db.query(
        sql,
        [user_id,title,description,type,link],
        (err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).send("data base error ");
            }
            res.send("opportunity created ");
        }
    );
});


app.get("/opportunities",(req,res)=>{
    const sql  =`SELECT  * FROM opportunities ORDER BY  created_at DESC ` ;
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            return  res.status(500).send("database error ");
        }
        res.send(result);
    });
});

app.get("/users",(req,res)=>{
    const sql = `SELECT id,name,email FROM users `;
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err) ;
            return res.status(500).send("database error ");

        }
        res.send(result);
    });
});