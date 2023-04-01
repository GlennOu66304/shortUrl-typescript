import React from "react";
import styles from "./QrCard.module.css";

// put the  details and edit in a row
// import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Box,
  // Stack,
  // Button,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
} from "@chakra-ui/react";
// import { removeShortUrl, openModal, closeModal } from "../../reduex";
// import { openModal } from "../../reduex/slices/shortUrlSlice";
interface itemProps {
  name2: string;
}

export const QrCard: React.FC<itemProps> = ({ name2 }) => {
  // console.log(item2);
  // const dispatch = useDispatch();
  // const { isOpen } = useSelector((state: any) => state.shortUrl);
  // const handleEdit = (name2) => {
  //   console.log(name2,isOpen,openModal())
  //   dispatch(openModal(name2));
  // };
  // const handleCancel = () => {
  //   dispatch(closeModal());
  // };
  // const handleSave = () => {
  //   dispatch(closeModal());
  // };
  // const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(name2);
  //   dispatch(removeShortUrl(name2));
  //   // after the remove the short url, the data will be updated
  // };

  return (
    <div className={styles["card"]}>
      {/* write a pop up window when you cick the edit button */}

      {/* qr code details */}
      <Flex>
        <Box flex="1" className="details">
          <p>Name:{name2}</p>
          {/* <p>long url:{longurl2}</p> */}
          <p>
            short url:{`${process.env.REACT_APP_API}/`}
            {name2}
          </p>
        </Box>

  
        {/* Pop up windows */}
        {/* <Modal isOpen={isOpen} onClose={handleCancel} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Long Url</ModalHeader>
            <ModalBody>
              <h2>This is a Modal component test </h2>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={handleCancel}>
                Cancel
              </Button>
              <Button colorScheme="blue" mr={3} onClick={handleSave}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
      </Flex>
    </div>
  );
};
