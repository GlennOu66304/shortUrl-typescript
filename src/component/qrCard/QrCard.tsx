import React from "react";
import styles from "./QrCard.module.css";

import { Flex, Box, Stack, Button } from "@chakra-ui/react";
import { Modal2 } from "../../component";
import { removeShortUrl, openModal,longUrlChange } from "../../reduex";
import { useDispatch,useSelector} from "react-redux";
interface itemProps {
  name2: string;
  longUrl2: string;
}

export const QrCard: React.FC<itemProps> = ({ name2, longUrl2 }) => {
  const {longUrl} = useSelector((state: any) => state.shortUrl);
  const dispatch = useDispatch();
  const handleEdit = (name2,longUrl2) => {
    dispatch(longUrlChange(longUrl2));
    dispatch(openModal(name2,longUrl2));
  };
  const handleDelete = (name2) => {
    dispatch(removeShortUrl(name2));
  };
  return (
    <div className={styles["card"]}>
      <Modal2 name3={name2}  longUrl2={longUrl}/>
      <Flex>
        <Box flex="1" className="details">
          <p>Name:{name2}</p>
          {/* <p>long url:{longurl2}</p> */}
          <p>
            short url:{`${process.env.REACT_APP_API}/`}
            {name2}
          </p>
          <p>
            long url:
            {longUrl2}
          </p>
        </Box>
      </Flex>
      {/* edit and delete button */}
      <Box flex="1" className={styles["edit"]}>
        <Stack direction="row" spacing={2}>
          <Button colorScheme="blue" onClick={() => handleEdit(name2,longUrl2)}>
            edit
          </Button>
          <Button onClick={() => handleDelete(name2)} colorScheme="blue">
            delete
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
