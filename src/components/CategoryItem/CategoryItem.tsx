/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryItem.module.scss";

import stockImage from '@/images/stock-image.jpg';

export default function CategoryItem({ title, image, url }: any) {
  return (
    <Link className={styles.categoryItem} href={`categories/${url}`}>
      <span className={styles.categoryTitle}>{title}</span>
      <img className={styles.categoryImage} src={image?.desktop?.webp_x1 || stockImage.src} alt={title} />
    </Link>
  );
}
