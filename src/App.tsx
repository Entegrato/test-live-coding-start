import React, { useEffect } from "react";
import { ImageGrid } from "./Components/ImageGrid";
import * as arts from "./urls.json";
import styles from "./App.scss";

export const App: React.FC = () => {

  useEffect(() => {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.litres.ru/static/gu_ajax/gu_ajax.js?146594';    
    
    document.getElementsByTagName('head')[0].appendChild(script);
  })

  return (
    <div className={styles.App}>
      <ImageGrid arts={arts} />
    </div>
  );
};
