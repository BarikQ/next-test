import { useState } from "react";

import styles from "./BurgerButton.module.scss";

export default function BurgerButton({ className, onClick }: any) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    onClick();
    setIsActive(!isActive);
  }
  
  return (
    <div className={isActive ? [styles.container, className, styles.active].join(" ") : [styles.container, className].join(" ")} onClick={handleClick}>
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>
  );
}
