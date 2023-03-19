import React from "react";
// import styles from "./QrCards.module.css";


import { QrCard } from "../qrCard/QrCard";
export const QrCards: React.FC = () => {
  // const [data, setData] = useState([1, 2, 3]);
  const data = [1, 2, 3]
  return (
    <div className="QrCards">
      {/* <QrCard /> */}
      <div>
        {data.map((item, index) => {
          return <QrCard key={index} />;
        })}
      </div>
    </div>
  );
};
