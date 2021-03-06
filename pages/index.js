import Head from "next/head";
import Image from "next/image";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
