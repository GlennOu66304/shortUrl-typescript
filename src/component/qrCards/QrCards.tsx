import React from "react";

import { QrCard } from "../qrCard/QrCard";



import { useSelector } from "react-redux";

export const QrCards: React.FC = () => {

  const { shortUrlList } = useSelector((state: any) => state.shortUrl);

  return (
    <div className="QrCards">
      {shortUrlList ? (
        shortUrlList.map((item, index) => {
          return (
            <QrCard name2={item.shortId} longUrl2={item.longUrl} key={index} />

          );
        })

      )
        : (
          <div>loading</div>
        )}
    </div>
  );
};
