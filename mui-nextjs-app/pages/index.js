import Head from "next/head";
import styles from "../styles/Home.module.css";
import MuiTyphography from "../components/muiTyphography";
import MuiBox from "../components/muiBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs - MUI tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
      <main>
        {/* <MuiTyphography /> */}
        <MuiBox />
      </main>
    </div>
  );
}
