import { Montserrat } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import { CustomHead} from "@/components";
import Link from "next/link";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CustomHead pageTitle="Next Main" />
      <div className={[styles.notMain, inter.className].join(" ")}>
        Представим что здесь главная страница с которой можно перейти в каталог...
        <br />
        <Link href="/categories">Каталог</Link>
      </div>
    </>
  );
}
