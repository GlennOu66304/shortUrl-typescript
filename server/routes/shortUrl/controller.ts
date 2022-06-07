import shortUrl from "../../model/shortUrl.model"; //controlller.js in andy
import { Request, Response } from "express";

export default {
  createUrl: async (req: Request, res: Response) => {
    // body content filled and get the req.body content
    // 1.define the data type outside the try catch
    const { longUrl } = req.body;

    // const newBucketListItem = new shortUrl(req.body);
    const shhortUrl = await shortUrl.create({ longUrl });
    return res.send(shhortUrl);
  },

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
