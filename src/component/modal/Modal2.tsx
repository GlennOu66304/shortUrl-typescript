import React from "react";
// import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  dispatchBothActions2,
  longUrlInputChange,
} from "../../reduex";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
} from "@chakra-ui/react";
interface itemProps {
  name3: string;

  longUrl2: string;
}

export const Modal2: React.FC<itemProps> = ({
  name3,

  longUrl2,
}) => {
  const dispatch = useDispatch();

  const { isOpen, longUrl,selectedItemId } = useSelector((state: any) => state.shortUrl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    dispatch(longUrlInputChange(event.target.value));
  };
  const handleCancel = () => {
    dispatch(closeModal());
  };
  const handleSave = () => {
    const requestData = { selectedItemId, longUrl };
    console.log(requestData);
    dispatch(dispatchBothActions2(requestData));
  };

  return (
    <>
      {/* Pop up windows */}
      <Modal isOpen={isOpen} onClose={handleCancel} size="lg">
        <ModalOverlay
          style={{
            backgroundColor: "rgba(135, 206, 250, 0.01)",
          }}
        />

        <ModalContent bg="white">
          <ModalHeader>Update Long Url</ModalHeader>

          <ModalBody>
            <Input
              value={longUrl2}
              onChange={handleChange}
              placeholder="put your link here"
              size="lg"
              // className={styles["chakra-input css-6p9lc8"]}
              width="450px"
            />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} colorScheme="gray" onClick={handleCancel}>
              Cancel
            </Button>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
