import React, { useEffect, useState } from 'react'
import { fetchAllGoodsVanila } from 'src/api/catalog'
// components
import CatalogLayout from '../../components/layout/catalog/CatalogLayout'
import MainHeader from 'src/components/layout/headers/MainHeader'

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

export default function Main() {
  useEffect(() => {
    const fetchFunc = async () => {
        const products = await fetchAllGoodsVanila()
    }
    fetchFunc()
  },[])
  return (
      <CatalogLayout
        header={
          <MainHeader
          />
        }
        main={
          <>
            <main>
                Main page is in progress
            </main>
          </>
        }
      />
  )
}