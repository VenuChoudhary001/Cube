import React, { useEffect } from "react";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <section className="font-primary200">{children}</section>
    </>
  );
};

export default Layout;
