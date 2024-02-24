const app = require("express")();

app.listen("/",(req,res)=>{
    res.send("welcome!!!");
});

app.listen(8000,()=>{
    console.log("App live on 8000");
});

// git init
// git remote add origin https://github.com/Sachin-fsd/cicd.git
//  git status