import React from "react";
import styles from "./Image.scss";
import { IImageProps } from "./Image.types";

export const Image: React.FC<IImageProps> = (props) => {
  return (
    <div className={styles.Art}>
      <img src={props.src} />
    </div>
  );
};
