import React, { useRef } from "react";
import styles from "./Qr.module.css";
import QRCode from "react-qr-code";
import { Button } from "@chakra-ui/react";
// import canvas from "canvas";
const btoa = window.btoa;
interface QrProps {
  qrValue: string;
  shortID2: string;
}
export const Qr: React.FC<QrProps> = ({ qrValue, shortID2 }) => {
  const svgRef = useRef(null);
  const downloadQr = (svg) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();

    img.onload = function () {
      canvas.width = svg.getAttribute("width");
      canvas.height = svg.getAttribute("height");
      ctx.drawImage(img, 0, 0);

      const a = document.createElement("a");
      a.download = shortID2 + ".png";
      a.href = canvas.toDataURL("image/png");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="Qr">
      <div className={styles["qrcode"]}>
        <QRCode
          ref={svgRef}
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={qrValue}
          viewBox={`0 0 256 256`}
        />
      </div>
      <Button
        colorScheme="blue"
        onClick={() => downloadQr(svgRef.current)}
        className={styles["downloadButton"]}
      >
        Dowload QR Code
      </Button>
    </div>
  );
};
