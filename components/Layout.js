import { Raleway } from "@next/font/google";

// font settings
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import Nav from "../components/Nav";
import Header from "../components/Header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio | R4mon Dias</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <div
        className={`page bg-site2 text-white bg-cover bg-no-repeat ${raleway.variable} font-raleway relative`}
      >
        <Nav />
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
