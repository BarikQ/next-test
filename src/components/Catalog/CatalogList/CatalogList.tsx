import CatalogItem from "../CatalogItem/CatalogItem";

import styles from "./CatalogList.module.scss";

export default function CatalogList({ items, className, ...props }: any) {
  return (
    <div className={[className, styles.catalogList].join(" ")} {...props}>
      {items.length ? (
        <>
          {" "}
          {items.map((item: any) => (
            <CatalogItem key={item.id} {...item} />
          ))}
          {items.map((item: any) => (
            <CatalogItem key={item.id} {...item} />
          ))}
          {items.map((item: any) => (
            <CatalogItem key={item.id} {...item} />
          ))}
          {items.map((item: any) => (
            <CatalogItem key={item.id} {...item} />
          ))}
          {items.map((item: any) => (
            <CatalogItem key={item.id} {...item} />
          ))}
        </>
      ) : (
        <div>No Items Found</div>
      )}
    </div>
  );
}
