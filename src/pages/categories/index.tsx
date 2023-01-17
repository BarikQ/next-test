import { useEffect, useState } from "react";
import { CategoriesList, CategoryItem, CustomHead } from "@/components";

import styles from "./Categories.module.scss";

const CONTENT_API = "https://getlens-master.s.dev.family/api/pages/";

export default function Categories({ categories, ...props }: any) {
  return (
    <>
      <CustomHead pageTitle="Categories" />
      <CategoriesList categories={categories} />
    </>
  );
}

export async function getStaticProps() {
  const { categories } = await fetch(CONTENT_API).then(response => response.json());

  return {
    props: {
      categories
    },
    revalidate: 3600 * 24 * 30,
  }
}