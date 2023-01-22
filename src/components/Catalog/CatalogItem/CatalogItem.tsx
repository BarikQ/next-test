import Image from "next/image";

import styles from "./CatalogItem.module.scss";

import stockImage from "@/images/stock-image.jpg";
import Favourite from "@/images/favourite.svg";

export default function CatalogItem({
  id,
  image,
  is_new,
  in_stock,
  price,
  slug,
  title,
}: any) {
  return (
    <div className={styles.item}>
      <a className={styles.imageContainer}>
        {is_new && <span className={styles.imageTag}>НОВИНКА</span>}
        <img className={styles.image} src={image?.desktop?.webp_x1 || stockImage.src} alt={title} />
      </a>

      <div className={styles.itemContent}>
        <a className={styles.itemTitle}>{title}</a>

        <div>
          <span className={styles.itemPrice}>{price}</span>

          {is_new && <span className={styles.itemTag}>{is_new}</span>}
        </div>

        <div className={styles.itemControls}>
          <button className={styles.itemButton}>В корзину</button>
          <label htmlFor={`favourite-${id}`} className={styles.favourite}>
            <Favourite />
            <input type="checkbox" id={`favourite-${id}`} />
          </label>
        </div>
      </div>
    </div>
  );
}
