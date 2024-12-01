"use client";

import ReduxProvider from "@/provider/ReduxProvider";
import React, { ReactNode } from "react";

const LayoutClient = ({ children }: { children: ReactNode }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutClient;
