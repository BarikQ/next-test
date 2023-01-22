import CatalogItem from "./CatalogItem/CatalogItem";
import CatalogSidebar from "./CatalogSidebar/CatalogSidebar";

import styles from "./Catalog.module.scss";
import CatalogList from "./CatalogList/CatalogList";
import Link from "next/link";

export default function Catalog({ items, filters, catalogData }: any) {
  return (
    <>
    <Link className={styles.toCategories} href="/categories">{`<`} To Categories</Link>
      <div className={styles.catalog}>
        <CatalogSidebar
          className={styles.catalogSidebar}
          sidebarData={{ ...catalogData, amount: items.length }}
          filters={filters}
        />
        <CatalogList className={styles.catalogList} items={items} />
      </div>
    </>
  );
}
