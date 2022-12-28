import React, { useEffect, useState } from 'react'
import { getCategories, getGoodsFromCategory } from 'src/api/catalog'
// components
import CatalogLayout from '../../components/layout/catalog/CatalogLayout'
import CatalogItem from '../../components/catalog/CatalogItem'
import Header from 'src/components/layout/headers/CatalogHeader'

export interface IGood {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export interface ICategory {
  value: string,
  label: string
}

export default function Catalog() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [goods, setGoods] = useState<Array<IGood> | null >(null)
  const [currentCategory, setCurrentCategory] = useState<string>('')
  const [avaliableCategories, setAvaliableCategories] = useState<Array<ICategory>>([])

  useEffect( () => {
    async function fetchGoods() {
      setIsLoading(true)
      const data = await getGoodsFromCategory(currentCategory)
      setGoods(data)
      setIsLoading(false)
  }
  
  fetchGoods()
  }, [currentCategory])

  useEffect( () => {
    async function fetchCategories() {
      const categories: Array<string> = await getCategories()
      const mappedCaegories = categories.map((string) => ({
        value: string,
        label: string
      }))
      setAvaliableCategories(mappedCaegories)
  }
  
  fetchCategories()
  }, [])

  return (
      <CatalogLayout
        header={
          <Header
            avaliableCategories={avaliableCategories}
            setCurrentCategory={setCurrentCategory}
          />
        }
        main={
          <>
          {goods && !isLoading && goods.map((good) => {
            return <CatalogItem key={good.id} {...good}/>
          })}
          {isLoading && <span>Loading...</span>}
          </>
        }
      />
  )
}