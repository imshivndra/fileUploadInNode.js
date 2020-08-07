const express=require("express");
const app=express();
const upload=require("express-fileupload");

app.use(upload());

app.get("/",(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname +"/index.html");
});
app.post("/",(req,res)=>{
    if(req.files){
        console.log(req.files);
        const file=req.files.filename;
        const filename=file.name;
        file.mv("./uploads/"+filename,(error)=>{
            if(error)res.send("error occured");
            else{
            res.send("Upload completed");
            }
        });
        
    }
});





app.listen(3000,()=>{
    console.log("listening on portn 3000");
})