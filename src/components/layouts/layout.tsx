import React, { useEffect, useState } from "react";
import "./layout.scss";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = (props) => {
  return (
    <div className="layout-wrapper flex flex-col gap-50 px-[8vw] pt-60 md:pt-80 lg:pt-90 pb-50">
      <div />
      <Header balance={props.balance} />
      {props.children}
      <Footer />
    </div>
  );
};
