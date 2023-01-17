import { Montserrat } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import { Catalog, CustomHead} from "@/components";
import { useEffect, useState } from "react";

const inter = Montserrat({ subsets: ["latin"] });
const CONTENT_API = "https://getlens-master.s.dev.family/api/pages/obektivy";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const d = await fetch(CONTENT_API).then(response => response.json());
      console.log(d);
      setData(d);
    }

    getData();
  }, []);

  return (
    <>
      <CustomHead pageTitle="Next Main" />
      <div className={[styles.main, inter.className].join(" ")}>
        <Catalog />
      </div>
    </>
  );
}
