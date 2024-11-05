"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json()); // Convierte la req.body a un JSON
// Puerto
app.set("port", 3000);
// Ruta principal
app.get("/", (_req, res) => {
    console.log("Some here");
    res.send("Hola Mundo");
});
// Escuchar en el puerto
app.listen(app.get("port"), () => {
    console.log("Listen on the port", app.get("port"));
});
