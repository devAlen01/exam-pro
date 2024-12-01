import React, { ReactNode } from "react";
import scss from "./LayoutSite.module.scss";

const LayoutSite = ({ children }: { children: ReactNode }) => {
  return (
    <section className={scss.LayoutSite}>
      <main>{children}</main>
    </section>
  );
};

export default LayoutSite;
