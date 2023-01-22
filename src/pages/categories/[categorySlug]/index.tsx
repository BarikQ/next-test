import { Catalog, CustomHead } from "@/components";

const CONTENT_API = "https://getlens-master.s.dev.family/api/pages";

export default function Category({
  categoryItems,
  filters,
  categoryData,
}: any) {
  return (
    <>
      <CustomHead pageTitle="Next Catalog" />
      <Catalog
        filters={filters}
        items={categoryItems}
        catalogData={categoryData}
      />
    </>
  );
}

// export async function getStaticPaths() {
//   const { categories } = await fetch(CONTENT_API)
//     .then((response) => response.json());

//   return {
//     fallback: "blocking",
//     paths: categories.map(({ slug }: any) => ({ params: { categorySlug: slug } })),
//   };
// }

export async function getServerSideProps(context: any) {
  const {
    query,
    query: { categorySlug, price_min, price_max, brands, is_new, is_promo },
  } = context;

  const resolvedQuery = `${
    brands
      ? Array.isArray(brands)
        ? brands.reduce(
            (prev: string, brand: string) =>
              `${
                prev.length ? `${prev}&brands[]=${brand}` : `brands[]=${brand}`
              }`,
            ""
          )
        : `brands[]=${brands}`
      : ""
  }${is_new ? "&is_new=true" : ""}${is_promo ? "&is_promo=true" : ""}${
    price_min ? `&price[min]=${price_min}` : ""
  }${price_max ? `&price[max]=${price_max}` : ""}`;

  const { categories, products, filters } = await fetch(
    `${CONTENT_API}/${categorySlug}${
      resolvedQuery.length ? `?${resolvedQuery}` : ""
    }`
  ).then((response) => response.json());

  return {
    props: {
      categoryItems: products,
      filters,
      categoryData: categories.find(({ slug, title }: any) =>
        slug === categorySlug ? title : null
      ),
    },
  };
}

// export async function getStaticProps(context: any) {
//   const { categorySlug, query } = context.params;
//   console.log(categorySlug, context.query)

//   const { products, filters } = await fetch(`${CONTENT_API}/${categorySlug}`)
//     .then((response) => response.json());

//   return {
//     props: {
//       categoryItems: products,
//       filters,
//     },
//   };
// }
