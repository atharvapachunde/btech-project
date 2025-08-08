import express from 'express';

const app = express();

app.get("/api/message", (req,res) => {
    res.send("your message has been sent successfully");
})

app.listen(8080, () => {
    console.log("Server started on PORT: 8080"); 
})