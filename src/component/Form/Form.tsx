// import { useFormik } from "formik";
// 1.inout build, post request use, debugger
import {
  HStack,
  Box,
  Input,
  Button,
  Flex,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
// import { StarIcon } from "@chakra-ui/icons";
import React, { useState, useRef } from "react";
import styles from "./form.module.css";
import axios from "axios";

export default function Form() {
  // console.log(process.env.REACT_APP_API);
  // let server: string = process.env.REACT_APP_API;
  const [longUrl, setLongUrl] = useState("");
  const [shortId, setShortId] = useState("");
  const [shortenButton, setShortenButton] = useState("ShortenLink");
  const textRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event: any) => setLongUrl(event.target.value);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (shortenButton === "Clear") {
        setLongUrl("");
      }
      if (longUrl != null || "") {
        const result = await axios.post(`${process.env.REACT_APP_API}`, {
          longUrl,
        });

        // console.log(result.data);
        setShortId(result.data.shortId);
        setShortenButton("Clear");
      }

      return;
    } catch (err) {
      console.log(err);
    }
  };
  const handleClickCopy = () => {
    const textCopy = textRef.current.innerText;
    navigator.clipboard.writeText(textCopy);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 500);
  };
  return (
    <div>
      <Flex align="center" justify="center" height="200px">
        <Text fontSize="2xl" textAlign="right" fontWeight="bold" mb="auto">
          Generate a short URL
        </Text>
      </Flex>
      {/* alert the message */}
      {showAlert && (
        <Alert status="success">
          <AlertIcon /> copied successfully! 
        </Alert>
      )}
      <Box m="3">
        <form onSubmit={handleSubmit}>
          <HStack spacing={4}>
            <Input
              value={longUrl}
              onChange={handleChange}
              placeholder="put your link here"
              size="lg"
              className={styles["chakra-input css-6p9lc8"]}
              width="500px"
            />
            <Button type="submit" colorScheme={"blue"}>
              {shortenButton}
            </Button>
          </HStack>
        </form>
      </Box>
      {/* only show the short url when there is a short id */}
      {shortId && (
        <Box height="42px" bg="white" borderRadius="md" m="3">
          <HStack spacing={1}>
            <Text ref={textRef} textDecoration="underline" width="500px">
              <a href={`${process.env.REACT_APP_API}/${shortId}`}>
                {process.env.REACT_APP_API}/{shortId ? shortId : ""}
              </a>
            </Text>
            <Button
              onClick={handleClickCopy}
              type="submit"
              colorScheme={"green"}
            >
              COPY
            </Button>
          </HStack>
        </Box>
      )}
    </div>
  );
}
