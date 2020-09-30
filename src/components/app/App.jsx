import React from "react";

import styles from "./app.module.scss";

function App() {
  console.log(styles);
  return <div className={styles.text}>Hello</div>;
}

export default App;
