import React from "react";
import styles from "../styles/Avatar.module.css";

/** CREDIT: Adapted from the Code Institute Moments Tutorial Project
 * https://github.com/Code-Institute-Solutions/moments/
*/

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;