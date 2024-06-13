import express from "express";
import { WebSocketServer } from "ws"

const app = express();
const port  = 8080;

// Serve static files from the 'dist' directory where html and frontend files are present
app.use(express.static('dist'));

// app. listen will send a server instance which is stored in a variable
// we need serve instance is need when we want to srun http server and the wedsocket server  in the same port
const server = app.listen(port, ()=>{
    console.log("server is listening... ")
});

const wss = new WebSocketServer({ server });

// Broadcast function to send messages to all connected clients
wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === client.OPEN) {
            client.send(data);
        }
    });
};

wss.on("connection",(ws)=>{
    // when ever we get a data from server we can print it here
    ws.on("message",(data)=>{
        console.log("data from clint:",data);
        // this gives the responce from the server
        ws.send("thank you for conneting");
         // Broadcast the message to all connected clients
         wss.broadcast(data);
    })
})

// import express from "express";
// import { WebSocketServer } from "ws";

// const app = express();
// const port = 8080;

// // Serve static files from the 'dist' directory
// app.use(express.static('dist'));

// const server = app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });

// const wss = new WebSocketServer({ server });

// wss.broadcast = function broadcast(data) {
//     wss.clients.forEach(function each(client) {
//         if (client.readyState === client.OPEN) {
//             client.send(data);
//         }
//     });
// };

// wss.on("connection", (ws) => {
//     ws.on("message", (data) => {
//         console.log("Data from client:", data);
//         wss.broadcast(data);
//     });
// });
