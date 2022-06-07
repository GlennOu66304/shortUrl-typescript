"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortUrl_model_1 = __importDefault(require("../../model/shortUrl.model")); //controlller.js in andy
exports.default = {
    createUrl: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // body content filled and get the req.body content
        // 1.define the data type outside the try catch
        const { longUrl } = req.body;
        // const newBucketListItem = new shortUrl(req.body);
        const shhortUrl = yield shortUrl_model_1.default.create({ longUrl });
        return res.send(shhortUrl);
    }),
    redirectUrl: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // ge the shortId
        const { shortId } = req.params;
        // check in the database
        const short = yield shortUrl_model_1.default.findOne({ shortId }).lean();
        // yes, then get the longUrl
        if (!short) {
            return res.status(403);
        }
        return res.redirect(short.longUrl);
    }),
};
