import React from "react";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

/** CREDIT: Adapted from the Code Institute Moments Tutorial Project
 * https://github.com/Code-Institute-Solutions/moments/
*/

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={NoResults}
        message={`Sorry, the page you're looking for doesn't exist`}
      />
    </div>
  );
};

export default NotFound;