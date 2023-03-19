import React from "react";
// import styles from "./QrCard.module.css";
// put the  details and edit in a row
import { Flex, Box } from "@chakra-ui/react";
export const QrCard: React.FC = () => {
  return (
    <div className="QrCard">
      {/* qr code details */}
      <Flex>
        <Box flex="1" className="details">
          <p>qr code1</p>
          <p>long url:</p>
          <p>short url:</p>
        </Box>

        <Box flex="1" className="image">
          <img
            src={
              "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            }
            alt="qr code "
          />
        </Box>

        <Box flex="1" className="edit">
          <button>edit</button>
          <button>delete</button>
        </Box>
      </Flex>
    </div>
  );
};
