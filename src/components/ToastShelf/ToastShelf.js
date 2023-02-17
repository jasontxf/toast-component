import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ messages }) {
  return (
    <>
      {messages.length > 0 && (
        <ol
          className={styles.wrapper}
          role="region"
          aria-live="assertive"
          aria-label="Notification"
        >
          {messages.map(({ id, message, variant }) => (
            <li className={styles.toastWrapper} key={id}>
              <Toast variant={variant} id={id}>
                {message}
              </Toast>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default ToastShelf;
