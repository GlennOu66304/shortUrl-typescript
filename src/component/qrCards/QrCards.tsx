import React from "react";

import { QrCard } from "../qrCard/QrCard";

import { useSelector } from "react-redux";
import styles from "./QrCards.module.css";

export const QrCards: React.FC = () => {
  const { shortUrlList } = useSelector((state: any) => state.shortUrl);

  return (
    <div className="QrCards">
      <div>
        {shortUrlList ? (
          shortUrlList.map((item, index) => {
            return (
              <div className={styles["container"]} key={index}>
                <QrCard name2={item.shortId} longUrl2={item.longUrl} />
              </div>
            );
          })
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
};
