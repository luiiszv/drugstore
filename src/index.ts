import express from "express";
import { config } from "dotenv";

//Routes
import userRouter from "./routes/users.routes";
import rolesRouter from "./routes/roles.routes";
import moduleRouter from "./routes/module.routes";
import permissionsRouter from "./routes/permissions.routes";
//Dadabase
import { connectDb } from "./database/database";


config();
const app = express();

// Middleware
app.use(express.json()); // Convierte la req.body a un JSON

// Puerto
app.set("port", process.env.PORT || 3000);



// Ruta principal
app.use("/users", userRouter);
app.use("/roles", rolesRouter);
app.use('/module', moduleRouter);
app.use('/permissions', permissionsRouter);




connectDb(); //Connect the dataBase

// Escuchar en el puerto
app.listen(app.get("port"), () => {
  console.log("Listen on the port", app.get("port"));
});
