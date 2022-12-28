import React from 'react'
import { BASEURL } from 'src/consts/Consts';
import { IGood } from 'src/pages/catalog/Catalog';
import { axiosInstance } from '../axios-config';

export const fetchAllGoodsVanila = async () => {
    return  await fetch(`${BASEURL}products/`).catch((response) => response.json())
}
export const getAllGoods = async (): Promise<Array<IGood>> => {
    return axiosInstance.get("products");
}

export const getGoodsFromCategory = async (category: string): Promise<Array<IGood>> => {
    return category ? axiosInstance.get(`products/category/${category}`) : getAllGoods()
}

export const getGoodDetail = async (): Promise<IGood> => {
    // const { category } = params
    return axiosInstance.get("products");
}

export const getCategories = async (): Promise<Array<string>> => {
    return axiosInstance.get("products/categories");
}