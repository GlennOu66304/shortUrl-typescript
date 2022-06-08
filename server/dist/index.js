"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const shortUrl_1 = __importDefault(require("./routes/shortUrl/shortUrl"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// connect the mongodb database
dotenv_1.default.config();
const url = process.env.MONGO_URI;
// const PORT = process.env.PORT;
mongoose_1.default
    .connect(url, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useFindAndModify: false,
})
    .then(() => console.log("MongoDB database Connected"))
    .catch((err) => console.log(err));
console.log(url);
// const port = process.env.PORT;
const port = 8088;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
// routes area
app.use("/", shortUrl_1.default); //api routes
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
