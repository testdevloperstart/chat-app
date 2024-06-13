import express from "express";
import { WebSocketServer } from "ws"

const app = express();
const port  = 8080;

// app. listen will send a server instance which is stored in a variable
// we need serve instance is need when we want to srun http server and the wedsocket server  in the same port
const server = app.listen(port, ()=>{
    console.log("server is listening... ")
});

const wss = new WebSocketServer({ server });

wss.on("connection",(ws)=>{
    // when ever we get a data from server we can print it here
    ws.on("message",(data)=>{
        console.log("data from clint:",data);
        // this gives the responce from the server
        ws.send("thank you for conneting");
    })
})