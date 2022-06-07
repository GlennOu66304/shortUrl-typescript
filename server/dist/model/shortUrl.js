"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import the scheme and model from mongoose
const mongoose_1 = require("mongoose");
const nanoid_1 = require("nanoid");
const nanoid = (0, nanoid_1.customAlphabet)("abcdefghytuew123456789", 5);
// create new scheme
const shortUrlSchema = new mongoose_1.Schema({
    longUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
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
const ShorUrlItem = (0, mongoose_1.model)("shortUrl", shortUrlSchema);
module.exports = ShorUrlItem;
// [TypeScript Support](https://mongoosejs.com/docs/typescript.html)
