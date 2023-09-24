import React from "react";
import styles from "./QrCard.module.css";


import {

  Button,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Card,
  CardBody,
} from '@chakra-ui/react'

import { Modal2 } from "../../component";
import { removeShortUrl, openModal, longUrlChange } from "../../reduex";
import { useDispatch, useSelector } from "react-redux";
interface itemProps {
  name2: string;
  longUrl2: string;
}

export const QrCard: React.FC<itemProps> = ({ name2, longUrl2 }) => {
  const { longUrl } = useSelector((state: any) => state.shortUrl);
  const dispatch = useDispatch();
  const handleEdit = (name2, longUrl2) => {
    dispatch(longUrlChange(longUrl2));
    dispatch(openModal(name2, longUrl2));
  };
  const handleDelete = (name2) => {
    dispatch(removeShortUrl(name2));
  };
  return (
    <div className="mx-auto w-4/5 mb-8">
      <Modal2 name3={name2} longUrl2={longUrl} />
      <Card variant="elevated">
        <CardBody>

          <TableContainer  >
            <Table variant='unstyled' size='sm' >
              <Tbody>
                <Tr >
                  <Td>Name:</Td>
                  <Td>{name2}</Td>
                  <Td>
                    <Button
                      colorScheme="blue"
                      onClick={() => handleEdit(name2, longUrl2)}
                    >
                      edit
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>short url:</Td>
                  <Td>{`${process.env.REACT_APP_API}/`}{name2}</Td>
                  <Td>  <Button onClick={() => handleDelete(name2)} colorScheme="blue">
                    delete
                  </Button></Td>
                </Tr>
                <Tr>
                  <Td>long url:</Td>
                  <Td> {longUrl2}</Td>
                  <Td>
                    <Button
                      colorScheme="blue"
                      onClick={() => handleEdit(name2, longUrl2)}
                    >
                      edit
                    </Button>

                  </Td>
                </Tr>

              </Tbody>

            </Table>
          </TableContainer>

        </CardBody>
      </Card>
    </div>
  );
};
