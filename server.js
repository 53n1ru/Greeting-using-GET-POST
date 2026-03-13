

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));

let userName = "";

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/submit",(req,res)=>{
    userName = req.body.username;
    res.redirect("/greet");
});

app.get("/greet",(req,res)=>{
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Greeting</title>
            <style>
                body{
                    margin:0;
                    font-family:Arial, Helvetica, sans-serif;
                    background: linear-gradient(135deg,#4facfe,#00f2fe);
                    height:100vh;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                .card{
                    background:white;
                    padding:40px;
                    border-radius:12px;
                    box-shadow:0 10px 25px rgba(0,0,0,0.2);
                    text-align:center;
                }

                h1{
                    color:#333;
                }
            </style>
        </head>

        <body>

        <div class="card">
            <h1>Hello ${userName} 👋</h1>
        </div>

        </body>
        </html>
    `);
});

app.listen(PORT,()=>{
    console.log("Server running on http://localhost:3000");
});