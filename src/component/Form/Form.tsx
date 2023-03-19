// import { useFormik } from "formik";
// 1.inout build, post request use, debugger
import {
  HStack,
  Box,
  Input,
  Button,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Qr } from "../../component";
// import { StarIcon } from "@chakra-ui/icons";
import React, { useState, useRef } from "react";

import styles from "./Form.module.css";
import axios from "axios";
// import { Qr } from "../../component";
export const Form: React.FC = () => {
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
              width="600px"
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
            {/* qr code generator button */}
            <Button
              onClick={handleClickCopy}
              type="submit"
              colorScheme={"green"}
            >
              QR Code
            </Button>
          </HStack>
        </Box>
      )}

      <div className={styles["qr"]}>
        <Center h="30vh" justifyContent="center">
          <Qr shortID2={shortId} />
        </Center>
      </div>
    </div>
  );
};
