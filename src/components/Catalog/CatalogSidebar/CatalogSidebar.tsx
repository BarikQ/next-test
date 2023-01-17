import styles from './CatalogSidebar.module.scss';

export default function CatalogSidebar({ filters, sidebarData: { title, children } }: any) {
  return (
    <div className={styles.sidebar} >
      <div>
        amount
      </div>
      <h2>{title}</h2>
      <div>
        pricing
      </div>
      <div>
        tags
      </div>
      <div>
        brand
      </div>

    </div>
  )
}