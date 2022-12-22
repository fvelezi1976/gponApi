const express = require("express");
const app = express();
const cors = require("cors");
var allowedOrigins = ["http://localhost:3001", "http://localhost:3000"];

//CORS
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin
//       // (like mobile apps or curl requests)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         var msg =
//           "The CORS policy for this site does not " +
//           "allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },

//     exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],

//     credentials: true,
//   })
// );

app.use(
  cors({
    origin: "*",
  })
);

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//RUTAS
app.use(require("./routes/routes"));

app.listen(3001);
console.log("Server on port 3001");
