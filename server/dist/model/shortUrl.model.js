"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import the scheme and model from mongoose
// import { Schema, model } from "mongoose";
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const nanoid = (0, nanoid_1.customAlphabet)("abcdefghytuew123456789", 5);
// create new scheme
const shortUrlSchema = new mongoose_1.default.Schema({
    longUrl: {
        type: String,
        required: true,
    },
    shortId: {
        type: String,
        unique: true,
        default: () => nanoid(),
        required: true,
    },
});
const shortUrl = mongoose_1.default.model("shortUrl", shortUrlSchema);
// export default shortUrl;
exports.default = shortUrl;
// [TypeScript Support](https://mongoosejs.com/docs/typescript.html)
