import BurgerButton from "@/components/BurgerButton/BurgerButton";
import { useRouter } from "next/router";
import { useReducer, useRef, useState } from "react";
import styles from "./CatalogSidebar.module.scss";

export default function CatalogSidebar({
  className,
  filters,
  sidebarData: { title, children, amount },
  ...props
}: any) {
  const router: any = useRouter();

  const [filterValues, setFilterValues]: any = useReducer<any>(
    (currentValues: any, newValues: any) => {
      return { ...currentValues, ...newValues };
    },
    {
      price: {
        min: router.query["price_min"] || "",
        max: router.query["price_max"] || "",
      },
      brands: Array.isArray(router.query["brands"])
        ? router.query["brands"].reduce(
            (prev: any, cur: any) => ({ ...prev, [cur]: true }),
            {}
          )
        : { [router.query["brands"]]: true },
      is_new: Boolean(router.query["is_new"]),
      is_promo: Boolean(router.query["is_promo"]),
    }
  );
  const [sidebarOpened, setSidebarOpened] = useState(false);

  function getBrandsQuery(brands: any) {
    return `
    ${Object.keys(brands).reduce((prev: any, cur: any) => {
      if (prev.length > 0) {
        return brands[cur] ? `${prev}&brands=${cur}` : prev;
      }

      if (brands[cur]) {
        return `brands=${cur}`;
      }

      return "";
    }, "")}
    `;
  }

  function updateURL(filters: any) {
    const { categorySlug } = router.query;
    const {
      brands,
      is_new,
      is_promo,
      price: { min, max },
    } = filters;
    const newQuery: any = {};
    const brandsQuery = Object.keys(brands).reduce(
      (prev: any, cur: any) => (brands[cur] ? [...prev, cur] : prev),
      []
    );

    if (is_new) newQuery.is_new = is_new;
    if (is_promo) newQuery.is_promo = is_promo;
    if (min) newQuery.price_min = min;
    if (max) newQuery.price_max = max;
    if (brandsQuery.length) newQuery.brands = brandsQuery;
    // const isNewQuery = is_new ? `is_new=true` : '';
    // const isPromoQuery = is_promo ? `is_promo=true` : '';
    // const minPriceQuery = `${min.length > 0 ? `price_min=${min}` : ''}`;
    // const maxPriceQuery = `${max.length > 0 ? `price_max=${max}` : ''}`;
    // const newQuery = [brandsQuery, isNewQuery, isPromoQuery, minPriceQuery, maxPriceQuery].filter(Boolean).join('&');

    router.push({
      pathname: router.pathname,
      query: { categorySlug, ...newQuery },
    });
  }

  function handlePriceFilterChange(e: any, slug: string, type: string) {
    const updatedState = {
      [slug]: {
        ...filterValues[slug],
        [type]: e.target.value >= 0 ? e.target.value : "",
      },
    };

    setFilterValues(updatedState);
    updateURL({ ...filterValues, ...updatedState });
  }

  function handleFilterChange(e: any, slug: string, type: string) {
    const updatedState: any = {};

    if (type === "multiple") {
      updatedState[slug] = {
        ...filterValues[slug],
        [e.target.value]: e.target.checked,
      };
    } else {
      updatedState[slug] = e.target.checked;
    }
    // router.push();
    setFilterValues(updatedState);
    updateURL({ ...filterValues, ...updatedState });
  }

  return (
    <>
      <BurgerButton
        className={styles.burger}
        onClick={() => setSidebarOpened(!sidebarOpened)}
      />
      <div
        className={
          sidebarOpened
            ? [styles.sidebar, styles.sidebarActive, className].join(" ")
            : [styles.sidebar, className].join(" ")
        }
      >
        <span className={styles.amount}>Товаров {amount}</span>
        <h2 className={styles.title}>{title}</h2>
        {filters && (
          <div className={styles.filters}>
            {filters.map(
              ({ info, items, max, min, slug, title, type }: any) => (
                <div className={styles.filter} key={slug}>
                  <span className={styles.filterTitle}>{title}</span>
                  <div className={styles.filterInputs}>
                    {type === "checkbox" && (
                      <label htmlFor={slug}>
                        <input
                          type="checkbox"
                          id={slug}
                          onChange={(e) => handleFilterChange(e, slug, type)}
                          checked={filterValues[slug]}
                        />
                      </label>
                    )}
                    {type === "range" && (
                      <div className={styles.priceRange}>
                        <input
                          type="number"
                          placeholder="От"
                          min={0}
                          max={filterValues[slug].max}
                          value={filterValues[slug].min}
                          onChange={(e) =>
                            handlePriceFilterChange(e, slug, "min")
                          }
                        />
                        <input
                          type="number"
                          placeholder="До"
                          min={filterValues[slug].min}
                          value={filterValues[slug].max}
                          onChange={(e) =>
                            handlePriceFilterChange(e, slug, "max")
                          }
                        />
                      </div>
                    )}
                    {type === "multiple" && (
                      <>
                        {items.map(({ main, title, value }: any) => (
                          <label htmlFor={`${slug}-${value}`} key={value}>
                            <input
                              type="checkbox"
                              value={value}
                              checked={filterValues[slug]?.[value] || false}
                              id={`${slug}-${value}`}
                              onChange={(e) =>
                                handleFilterChange(e, slug, type)
                              }
                            />
                            <span>{title}</span>
                          </label>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
}
