import React from "react";
import { Image } from "./Image";
import styles from "./ImageGrid.scss";
import type { IImageGridProps } from "./ImageGrid.types";

export const ImageGrid: React.FC<IImageGridProps> = (props) => {
  return (
    <div className={styles.Grid}>
      {
        props.arts.map(artSrc => {
          return <Image key={artSrc} src={artSrc} />
        })
      }
    </div>
  )
}
