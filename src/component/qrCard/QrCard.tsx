import React from "react";
// import styles from "./QrCard.module.css";
// put the  details and edit in a row
import { Flex, Box, Stack, Button } from "@chakra-ui/react";
interface itemProps {
  name2: string;
  longurl2: string;
}
export const QrCard: React.FC <itemProps >= ({name2,longurl2}) => {
  // console.log(item2);
  return (
    <div className="QrCard">
      {/* qr code details */}
      <Flex>
        <Box flex="1" className="details">
          <p>Name:{name2}</p>
          <p>long url:{longurl2}</p>
          <p>short url:{`${process.env.REACT_APP_API}/`}{name2}</p>
        </Box>

        {/* <Box flex="1" className="image">
          <img
            src={
              "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            }
            alt="qr code "
          />
        </Box> */}

        <Box flex="1" className="edit">
          <Stack direction="row" spacing={2}>
            <Button colorScheme="blue">edit</Button>
            <Button colorScheme="blue">delete</Button>
          </Stack>
        </Box>
      </Flex>
    </div>
  );
};
