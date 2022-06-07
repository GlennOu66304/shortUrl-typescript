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
    //   try {
    //     //   use the mongoose save method to save the item into the database
    //     // model save
    //     const bucketListItem = await newBucketListItem.save();
    //     // condition check
    //     if (!bucketListItem)
    //       throw new Error("Something went wrong saving the bucketListItem");
    //     //   send back the data to the console
    //     res.status(200).json(bucketListItem);
    //   } catch (error) {
    //     res.status(500).json({ message: error.message });
    //   }
    // },
    // updatePost: async (req, res, next) => {
    //   const { id } = req.params;
    //   try {
    //     const response = await bucketListItemModel.findByIdAndUpdate(
    //       id,
    //       req.body
    //     );
    //     if (!response) throw Error("Something went wrong");
    //     const updated = { ...response._doc, ...req.body };
    //     res.status(200).json(updated);
    //   } catch (error) {
    //     res.status(500).json({ message: error.message });
    //   }
    // },
};
