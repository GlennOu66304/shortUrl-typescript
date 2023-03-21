import axios from "axios";
import React, { useEffect, useState } from "react";
// import styles from "./QrCards.module.css";

import { QrCard } from "../qrCard/QrCard";
export const QrCards: React.FC = () => {
  const [shortUrlList, setShortUrlList] = useState([]);
  useEffect(() => {
    const loadShortUrlList = async () => {
      const result = await axios.get(`${process.env.REACT_APP_API}/api/list`);
      // console.log(result.data);
      setShortUrlList(result.data);
    };
    loadShortUrlList();
  }, []);

  return (
    <div className="QrCards">
      {/* <QrCard /> */}
      <div>
        {shortUrlList.map((item, index) => {
          return <QrCard name2={item.shortId}  longurl2={item.longUrl} key={index} />;
        })}
      </div>
    </div>
  );
};
