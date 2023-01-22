import { Montserrat } from "@next/font/google";

import styles from "./Layout.module.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Layout({ ...props }: any) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
          min-height: 100vh;
        }

        body,
        main {
          min-height: 100vh;
        }
      `}</style>
      <main className={styles.main}>
        {props.children}
      </main>
    </>
  );
}
