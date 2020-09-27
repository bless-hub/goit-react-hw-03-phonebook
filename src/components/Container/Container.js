import React from "react";
import style from "./container.module.css";

export default function Container({ title, children }) {
  return (
    <section className={style.section}>
      <h2 className={style.mainHead}>{title}</h2>
      {children}
    </section>
  );
}
