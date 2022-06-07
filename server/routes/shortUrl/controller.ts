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

  redirectUrl: async (req: Request, res: Response) => {
    // ge the shortId
    const { shortId } = req.params;
    // check in the database
    const short = await shortUrl.findOne({ shortId }).lean();
    // yes, then get the longUrl
    if (!short) {
      return res.status(403);
    }
    return res.redirect(short.longUrl);
  },
};
