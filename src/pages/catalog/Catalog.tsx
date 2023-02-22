import React, { useEffect, useState } from 'react';
import { getCategories, fetchGoods } from 'src/api/catalog';
import Header from 'src/components/layout/headers/CatalogHeader';
import useGetGoods from 'src/hooks/useGetGoods'
import CatalogItem from '../../components/catalog/CatalogItem';
// components
import CatalogLayout from '../../components/layout/catalog/CatalogLayout';

export interface IGood {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ICategory {
  value: string;
  label: string;
}

export default function Catalog() {
  const [currentCategory, setCurrentCategory] = useState<string>('');
  const [avaliableCategories, setAvaliableCategories] = useState<Array<ICategory>>([]);
  const { goods, isLoading, addFetchGoods, isRefetching } = useGetGoods(currentCategory);

  useEffect(() => {
    window.addEventListener('scroll', (e: any) => {
      if (window.innerHeight + e.target.documentElement.scrollTop >= e.target.documentElement.scrollHeight) {
        addFetchGoods()
      }
    })
  }, [])

  useEffect(() => {
    async function fetchCategories() {
      const categories: Array<string> = await getCategories();
      const mappedCaegories = categories.map(string => ({
        value: string,
        label: string
      }));
      setAvaliableCategories(mappedCaegories);
    }

    fetchCategories();
  }, []);
  return (
    <CatalogLayout
      header={<Header avaliableCategories={avaliableCategories} setCurrentCategory={setCurrentCategory} />}
      main={
        <>
        {isLoading && <span>Loading...</span>}
          {goods &&
            !isLoading &&
            goods.map(good => {
              return <CatalogItem key={good.id} {...good} />;
            })}
          
          {isRefetching && <span>Refetching...</span>}
        </>
      }
    />
  );
}
