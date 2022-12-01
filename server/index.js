"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
const corsOptions = {
    origin: "localhost:3000",
    optionsSuccessStatus: 200,
};
app.use((0, cors_1.default)());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/users", (req, res) => {
    res.send([
        {
            id: 0,
            username: "Ramsay",
        },
        {
            id: 1,
            username: "Irvan",
        },
        {
            id: 2,
            username: "Sam",
        },
    ]);
});
