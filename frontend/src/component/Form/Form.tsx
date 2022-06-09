// import { useFormik } from "formik";
// 1.inout build, post request use, debugger
import { Box, Input, Button } from "@chakra-ui/react";
// import { StarIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import styles from "./form.module.css";
import axios from "axios";
export default function Form() {
  const [longUrl, setLongUrl] = useState("");
  const [shortId, setShortId] = useState("");
  const server = "http://localhost:8089";
  const handleChange = (event: any) => setLongUrl(event.target.value);
  // console.log(longUrl);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${server}`, {
        longUrl,
      });
      // console.log(result.data);
      setShortId(result.data.shortId);
      return;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box>
      <h2>Generate a short URL</h2>
      <form onSubmit={handleSubmit}>
        <Input
          value={longUrl}
          onChange={handleChange}
          placeholder="Here is a sample placeholder"
          size="lg"
          className={styles["chakra-input css-6p9lc8"]}
        />
        <Button type="submit">Generate Short Url</Button>
      </form>
      {/* only show the short url when there is a short id */}
      {shortId && (
        <a href={`${server}/${shortId}`}>
          {server}/{shortId ? shortId : ""}
        </a>
      )}
    </Box>
  );
}
