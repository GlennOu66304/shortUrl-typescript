// import the scheme and model from mongoose
// import { Schema, model } from "mongoose";
import mongoose, { Document } from "mongoose";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("abcdefghytuew123456789", 5);
export interface Url extends Document {
  longUrl: string;
  shortUrl: string;
  shortId: string;
}

// create new scheme
const shortUrlSchema = new mongoose.Schema({
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

const shortUrl = mongoose.model<Url>("shortUrl", shortUrlSchema);

// export default shortUrl;
export default shortUrl;
// [TypeScript Support](https://mongoosejs.com/docs/typescript.html)
