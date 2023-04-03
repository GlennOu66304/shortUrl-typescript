// write a for loop which can get the content based on the id in the array
// need to be loop the content through the shortUrlList
var shortUrlList = [
  { longUrl: "https://openai.com/waitlist/plugins", shortId: "fdh11" },
  {
    longUrl:
      "https://glenntechlab.atlassian.net/wiki/spaces/~5d440a1981cbd30da3478961/pages/65629/shorturl-typescript-core+feature+fix",
    shortId: "3c9gh",
  },
  {
    longUrl:
      "https://glenntechlab.atlassian.net/wiki/spaces/~5d440a1981cbd30da3478961/pages/65629/shorturl-typescript-core+feature+fix",
    shortId: "9edaw",
  },
  {
    longUrl:
      "https://glenntechlab.atlassian.net/wiki/spaces/~5d440a1981cbd30da3478961/pages/65629/shorturl-typescript-core+feature+fix",
    shortId: "w8a21",
  },
  {
    longUrl:
      "https://glenntechlab.atlassian.net/wiki/spaces/~5d440a1981cbd30da3478961/pages/65629/shorturl-typescript-core+feature+fix",
    shortId: "63eeu",
  },
  {
    longUrl:
      "https://glenntechlab.atlassian.net/wiki/spaces/~5d440a1981cbd30da3478961/pages/65629/shorturl-typescript-core+feature+fix",
    shortId: "u53tb",
  },
  {
    longUrl:
      "https://www.nytimes.com/2023/03/12/business/media/fox-news-dominion-lawsuit-evidence.html",
    shortId: "4tuht",
  },
  {
    longUrl:
      "https://www.nytimes.com/2023/03/12/business/media/fox-news-dominion-lawsuit-evidence.html",
    shortId: "1f598",
  },
  {
    longUrl:
      "https://github.com/GlennOu66304/react-qunaer-antd/blob/main/src/pages/detail/DetailPage.tsx",
    shortId: "e9782",
  },
  {
    longUrl:
      "https://github.com/GlennOu66304/react-qunaer-antd/blob/main/src/pages/detail/DetailPage.tsx",
    shortId: "6e9f8",
  },
  { longUrl: "https://kcrypto.vercel.app/", shortId: "t91gh" },
  { longUrl: "https://www.astrill.com/member-zone/log-in", shortId: "btw4y" },
  { longUrl: "https://openai.com/waitlist/plugi", shortId: "b2wyg" },
  { longUrl: "https://openai.com/", shortId: "wwh4e" },
  { longUrl: "https://openai.com/", shortId: "fbw4u" },
  {
    longUrl: "https://short-url-typescript-glennou66304.vercel.app/",
    shortId: "fate6",
  },
  {
    longUrl:
      "https://stackoverflow.com/questions/67616800/how-to-auto-insert-a-string-in-filename-by-bash",
    shortId: "ee451",
  },
];
var content = shortUrlList.filter((item) => item.shortId === "ee451");

// write a condition check if the content is empty or not
// if the content is empty, return the error message
// if shortId is not found, return the error message, other wise run the filter function
const test = !shortUrlList ? "error" : "success";