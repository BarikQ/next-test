import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem/CatalogItem";
import CatalogSidebar from "./CatalogSidebar/CatalogSidebar";

export default function Catalog({ items, filters, catalogData }: any) {
  return (
    <div>
      <CatalogSidebar sidebarData={catalogData} filters={filters} />
      {items ? items.map((item: any) => <CatalogItem key={item.id} {...item} />) : <div>404</div>}
    </div>
  );
}
