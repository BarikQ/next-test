import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./CategoriesList.module.scss";

export default function CategoriesList({ categories }: any) {
  return (
    <div className={styles.categoriesList}>
      {categories.length > 0 ? (
        categories.map(({ id, title, image, slug }: any) => (
          <CategoryItem key={id} title={title} image={image} url={slug} />
        ))
      ) : (
        <div>No Categories found</div>
      )}
    </div>
  );
}
