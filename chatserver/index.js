// user adnan -> 10 sockets online
const users = new Map();

const socketHandler = (io) => {


  io.on("connect", (socket) => {

  let id = socket.handshake.query.id;
  users.set(id, socket.id);

    console.log("conatact id", id);

    console.log("new connection", socket.id);
    console.log("usersMap", users);

    socket.on("join", (contactId) => {
      console.log("join", contactId);
      socket.join(contactId);
    });

    socket.on("message", ({ sender, recipients, text }) => {
      console.log("new message on the server", recipients, text);
      recipients.forEach((contactId) => {
        const socketId = users.get(contactId);
        socket.to(socketId).broadcast.emit("message", { text, sender, recipients });
      })
    });

    socket.on("disconnect", () => {
      console.log("connection disconnected", socket.id);
      users.forEach((socketId, id) => {
        if (socketId === socket.id) users.clear(id);
        console.log("id", id, " logged out");
      })
    });

  });
};

const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer);
socketHandler(io);

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: false,
}));

// adnan  methodOverride
app.use((req, res, next) => {
  if (req.query && req.query._method){ // eslint-disable-line
    req.method = req.query._method; // eslint-disable-line
  }
  next();
});

app.all("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS",
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  console.log(req.method, req.url);
  next();
});

// page not found middleware
app.all("*", (req, res) => {
  res.status(404).send({ msg: "Sorry, page not found !" });
});

// error middleware
app.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).send({ msg: !err.message ? err : err.message });
});

const PORT = process.env.PORT || 3001;

 httpServer.listen(PORT, () => {
      console.log(`server started - ${PORT}`);
    });
